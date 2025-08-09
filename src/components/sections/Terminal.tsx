import React, { useState, useRef, useEffect } from 'react';
import { CommandHistory } from './terminal/CommandHistory';
import { InputLine } from './terminal/InputLine';
import { processCommand } from './terminal/CommandProcessor';

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

  // Show title command on load and focus input
  useEffect(() => {
    const titleCommand: Command = {
      input: 'title',
      output: processCommand('title')
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
        output: processCommand('title')
      };
      // Then process the 'all' command
      const allCommand: Command = {
        input: command,
        output: processCommand(command)
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
        output: processCommand(command)
      };
      // Add clear command to history and hide previous commands
      setCommands(prev => [...prev.map(cmd => ({ ...cmd, hidden: true })), clearCommand]);
      setCurrentInput('');
      setHistoryIndex(-1);
      return;
    }

    const newCommand: Command = {
      input: currentInput,
      output: processCommand(currentInput)
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

  return (
    <section className="py-20 h-[calc(100vh-53px)]">
      <div className="container mx-auto px-4 h-full">
        <div 
          className="w-full h-full border border-[var(--terminal-border)] rounded-lg overflow-hidden font-mono text-sm shadow-lg backdrop-blur-md"
          onClick={handleTerminalClick}
          style={{
            backgroundColor: 'rgba(8, 8, 16, 0.85)', // Darker, more opaque background
            backdropFilter: 'blur(10px)',
            boxShadow: `
              0 0 20px rgba(41, 46, 66, 0.3),
              0 0 40px rgba(77, 204, 255, 0.15),
              0 0 80px rgba(77, 204, 255, 0.08)
            `,
          }}
        >
          <div className="h-full flex flex-col">
            <div 
              className="h-7 flex items-center justify-between px-4"
              style={{
                backgroundColor: 'rgba(45, 50, 65, 0.9)', // Darker header
                backdropFilter: 'blur(5px)',
              }}
            >
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-error)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-warning)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-success)]"></div>
              </div>
              <div 
                className="text-xs text-gray-300 font-medium select-none"
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.01em',
                }}
              >
                ronniepyne.com
              </div>
              <div className="w-14"></div> {/* Spacer to center the title */}
            </div>
            <div 
              ref={outputRef}
              className="flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth text-[var(--terminal-text)] select-text terminal-scrollbar"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(41, 46, 66, 0.1) 1px, transparent 1px)',
                backgroundSize: '100% 8px',
                backgroundPosition: '0 -4px',
                userSelect: 'text',
                WebkitUserSelect: 'text',
              }}
            >
              <CommandHistory commands={visibleCommands} />
            </div>
            <form 
              onSubmit={handleSubmit} 
              className="p-4 border-t border-[var(--terminal-border)]"
              style={{
                backgroundColor: 'rgba(8, 8, 16, 0.8)',
                backdropFilter: 'blur(5px)',
              }}
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