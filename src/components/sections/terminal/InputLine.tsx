import React, { forwardRef } from 'react';

interface InputLineProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const InputLine = forwardRef<HTMLInputElement, InputLineProps>(
  ({ value, onChange, onKeyDown }, ref) => {
    return (
      <div className="flex items-center">
        <span className="text-[var(--terminal-prompt)] mr-2">$</span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none text-[var(--terminal-command)] placeholder-[var(--terminal-text)]/50"
          spellCheck="false"
          autoComplete="off"
        />
      </div>
    );
  }
);