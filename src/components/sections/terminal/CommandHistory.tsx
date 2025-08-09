import React from 'react';

interface Command {
  input: string;
  output: string;
}

interface CommandHistoryProps {
  commands: Command[];
}

export const CommandHistory: React.FC<CommandHistoryProps> = ({ commands }) => {
  return (
    <div className="space-y-3">
      {commands.map((cmd, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center">
            <span className="text-[var(--terminal-prompt)] mr-2">$</span>
            <span className="text-[var(--terminal-command)]">{cmd.input}</span>
          </div>
          <div className="text-[var(--terminal-output)] whitespace-pre-wrap pl-4">
            {cmd.output}
          </div>
        </div>
      ))}
    </div>
  );
};