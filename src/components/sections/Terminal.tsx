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

  // Show title command on load
  useEffect(() => {
    const titleCommand: Command = {
      input: 'title',
      output: processCommand('title')
    };
    setCommands([titleCommand]);
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
    e.preventDefault();
    inputRef.current?.focus();
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
          className="w-full h-full bg-[var(--terminal-bg)] border border-[var(--terminal-border)] rounded-lg overflow-hidden font-mono text-sm cursor-text shadow-lg"
          onClick={handleTerminalClick}
          style={{
            boxShadow: '0 0 20px rgba(41, 46, 66, 0.2)',
          }}
        >
          <div className="h-full flex flex-col">
            <div className="h-7 bg-[var(--terminal-border)] flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-error)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-warning)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--terminal-success)]"></div>
              </div>
            </div>
            <div 
              ref={outputRef}
              className="flex-1 overflow-y-auto p-4 space-y-2 scroll-smooth text-[var(--terminal-text)]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(41, 46, 66, 0.1) 1px, transparent 1px)',
                backgroundSize: '100% 8px',
                backgroundPosition: '0 -4px',
              }}
            >
              <CommandHistory commands={visibleCommands} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--terminal-border)]">
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