import React, { useState, useRef, useEffect } from 'react';
import { CommandHistory } from '@/components/sections/terminal/CommandHistory';
import { InputLine } from '@/components/sections/terminal/InputLine';
import { processCommand } from '@/components/sections/terminal/CommandProcessor';
import { useTheme } from '@/contexts/ThemeContext';

interface Command {
  input: string;
  output: string;
  hidden?: boolean;
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  // Show title command on load and focus input
  useEffect(() => {
    const titleCommand: Command = {
      input: 'title',
      output: processCommand('title', setTheme)
    };
    setCommands([titleCommand]);
    
    // Focus the input after a short delay to ensure it's rendered
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom when commands change
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commands]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const command = currentInput.trim().toLowerCase();
    
    // Special handling for 'all' command
    if (command === 'all') {
      // Hide all current commands
      setCommands(prev => prev.map(cmd => ({ ...cmd, hidden: true })));
      // Then show the title
      const titleCommand: Command = {
        input: 'title',
        output: processCommand('title', setTheme)
      };
      // Then process the 'all' command
      const allCommand: Command = {
        input: command,
        output: processCommand(command, setTheme)
      };
      setCommands(prev => [...prev, titleCommand, allCommand]);
      setCurrentInput('');
      setHistoryIndex(-1);
      return;
    }

    // Handle clear command
    if (command === 'clear') {
      const clearCommand: Command = {
        input: command,
        output: processCommand(command, setTheme)
      };
      // Add clear command to history and hide previous commands
      setCommands(prev => [...prev.map(cmd => ({ ...cmd, hidden: true })), clearCommand]);
      setCurrentInput('');
      setHistoryIndex(-1);
      return;
    }

    const newCommand: Command = {
      input: currentInput,
      output: processCommand(currentInput, setTheme)
    };

    setCommands(prev => [...prev, newCommand]);
    setCurrentInput('');
    setHistoryIndex(-1);
  };

  const handleTerminalClick = (e: React.MouseEvent) => {
    // Only focus input if we're not selecting text
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      // Only focus if clicking on empty space, not on text content
      const target = e.target as HTMLElement;
      if (target.tagName !== 'SPAN' && target.tagName !== 'PRE' && !target.closest('pre')) {
        e.preventDefault();
    inputRef.current?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commands.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commands[commands.length - 1 - newIndex].input);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commands[commands.length - 1 - newIndex].input);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  // Filter out hidden commands for display
  const visibleCommands = commands.filter(cmd => !cmd.hidden);

  // Theme styles are read directly from CSS variables (set via ThemeContext)

  return (
    <section className="py-20 h-[calc(100vh-53px)]">
      <div className="container mx-auto px-4 h-full">
        <div 
          className="w-full h-full border border-[var(--terminal-border)] rounded-lg overflow-hidden font-mono text-sm backdrop-blur-md bg-[var(--terminal-bg)]"
          onClick={handleTerminalClick}
          style={{ boxShadow: 'var(--terminal-glow)' }}
        >
          <div className="h-full flex flex-col">
            <div 
              className="h-7 flex items-center justify-between px-4 bg-[var(--terminal-header-bg)] backdrop-blur-sm"
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-error)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-warning)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-success)]"></div>
              </div>
              <div 
                className="text-gray-300 font-medium select-none font-sans text-[11px] tracking-[0.01em]"
              >
                ronniepyne.com
              </div>
              <div className="w-14"></div> {/* Spacer to center the title */}
            </div>
            <div 
              ref={outputRef}
              className="flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth text-[var(--terminal-text)] select-text terminal-scrollbar bg-[linear-gradient(to_bottom,var(--terminal-grid-line)_1px,transparent_1px)] bg-[length:100%_8px] bg-[position:0_-4px]"
            >
              <CommandHistory commands={visibleCommands} />
            </div>
            <form 
              onSubmit={handleSubmit} 
              className="p-4 border-t border-[var(--terminal-border)] bg-[var(--terminal-input-bg)] backdrop-blur-sm"
            >
              <InputLine
                ref={inputRef}
                value={currentInput}
                onChange={setCurrentInput}
                onSubmit={() => handleSubmit(new Event('submit') as any)}
                onKeyDown={handleKeyDown}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}