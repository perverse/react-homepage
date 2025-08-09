import React from 'react';

interface Command {
  input: string;
  output: string;
}

interface CommandHistoryProps {
  commands: Command[];
}

// Enhanced text parser with better formatting support
const parseTextWithFormatting = (text: string) => {
  // More comprehensive regex that handles nested patterns better
  const formatRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\*\*[^*\n]+\*\*)/g;
  
  const renderFormattedText = (textContent: string, key: number) => {
    const parts = textContent.split(formatRegex);
    
    return parts.map((part, partIndex) => {
      const uniqueKey = `${key}-${partIndex}`;
      
      if (!part) return null;
      
      // Handle bold text
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        const boldText = part.slice(2, -2).trim();
        return (
          <strong 
            key={uniqueKey} 
            className="terminal-bold"
          >
            {boldText}
          </strong>
        );
      }
      
      // Handle email addresses
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a
            key={uniqueKey}
            href={`mailto:${part}`}
            className="terminal-link"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      
      // Handle URLs
      if (/^https?:\/\/[^\s]+$/.test(part)) {
        return (
          <a
            key={uniqueKey}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      
      // Handle line breaks and preserve whitespace
      if (part.includes('\n')) {
        return part.split('\n').map((line, lineIndex, lines) => (
          <React.Fragment key={`${uniqueKey}-line-${lineIndex}`}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </React.Fragment>
        ));
      }
      
      return part;
    }).filter(Boolean);
  };
  
  return renderFormattedText(text, 0);
};

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
            {parseTextWithFormatting(cmd.output)}
          </div>
        </div>
      ))}
    </div>
  );
};