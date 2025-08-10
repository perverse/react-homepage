import { processCommand } from '@/components/sections/terminal/CommandProcessor';

describe('CommandProcessor', () => {
  describe('Basic command handling', () => {
    it('returns empty string for empty input', () => {
      expect(processCommand('')).toBe('');
    });

    it('returns error message for unknown command', () => {
      expect(processCommand('unknown')).toContain('Command not found');
    });

    it('handles whitespace in commands', () => {
      expect(processCommand('  help  ')).toContain('Available commands');
    });
  });

  describe('Help command', () => {
    it('shows all non-hidden commands', () => {
      const output = processCommand('help');
      expect(output).toContain('help');
      expect(output).toContain('about');
      expect(output).toContain('skills');
      expect(output).toContain('projects');
      expect(output).toContain('contact');
      expect(output).not.toContain('clear'); // hidden command
      expect(output).not.toContain('title'); // hidden command
    });
  });

  describe('Projects command', () => {
    it('lists all projects when no number provided', () => {
      const output = processCommand('projects');
      expect(output).toContain('4mation Technologies AI Integration');
      expect(output).toContain('CreditorWatch Microservices Migration');
      expect(output).toContain('Type \'projects <number>\' for more details');
    });

    it('shows detailed project info when number provided', () => {
      const output = processCommand('projects 1');
      expect(output).toContain('Role:');
      expect(output).toContain('Period:');
      expect(output).toContain('Tech Stack:');
    });

    it('handles invalid project numbers', () => {
      const output = processCommand('projects 999');
      expect(output).toContain('Project 999 not found');
    });

    it('handles non-numeric project identifiers', () => {
      const output = processCommand('projects abc');
      expect(output).toContain('Project NaN not found');
    });
  });

  describe('Skills command', () => {
    const output = processCommand('skills');

    it('shows all skill categories', () => {
      expect(output).toContain('Languages & Core Technologies');
      expect(output).toContain('Frameworks & Libraries');
      expect(output).toContain('Infrastructure & DevOps');
      expect(output).toContain('Modern Development Tools');
      expect(output).toContain('Methodologies');
    });

    it('includes specific key technologies', () => {
      expect(output).toContain('PHP');
      expect(output).toContain('TypeScript');
      expect(output).toContain('React');
      expect(output).toContain('AWS');
      expect(output).toContain('Docker');
    });
  });

  describe('About command', () => {
    const output = processCommand('about');

    it('includes key professional information', () => {
      expect(output).toContain('Ronnie Pyne');
      expect(output).toContain('Full Stack');
      expect(output).toContain('4mation Technologies');
    });

    it('contains all key points', () => {
      expect(output).toMatch(/• .+ experience/);
      expect(output).toMatch(/• .+ mentoring/);
      expect(output).toMatch(/• .+ practices/);
    });
  });

  describe('Contact command', () => {
    const output = processCommand('contact');

    it('includes all contact methods', () => {
      expect(output).toContain('Email:');
      expect(output).toContain('ronniepyne@gmail.com');
    });

    it('includes all professional profiles', () => {
      expect(output).toContain('Portfolio:');
      expect(output).toContain('GitHub:');
      expect(output).toContain('LinkedIn:');
    });
  });

  describe('All command', () => {
    const output = processCommand('all');

    it('includes all non-hidden commands in sequence', () => {
      expect(output).toMatch(/\$ help.*\$ about.*\$ skills.*\$ projects.*\$ contact/s);
    });

    it('includes separators between commands', () => {
      expect(output).toMatch(/[-]{50}/);
    });
  });

  describe('Clear command', () => {
    it('returns clear message', () => {
      expect(processCommand('clear')).toBe('Terminal cleared.');
    });
  });

  describe('Theme command', () => {
    it('accepts the new kelp theme and calls setTheme', () => {
      const mock = jest.fn();
      const output = processCommand('theme kelp', mock);
      expect(mock).toHaveBeenCalledWith('kelp');
      expect(output).toContain('Kelp mode');
    });
  });

  describe('Title command', () => {
    const output = processCommand('title');

    it('includes ASCII art', () => {
      expect(output).toContain('██████╗');
    });

    it('includes help message', () => {
      expect(output).toContain('Type \'help\' to see available commands');
    });
  });
});
