
import { render, screen, fireEvent } from '@/test/test-utils'
import Terminal from '@/components/sections/Terminal'

describe('Terminal', () => {
  const typeCommand = (input: HTMLElement, command: string) => {
    fireEvent.change(input, { target: { value: command } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  }

  it('renders without crashing', () => {
    render(<Terminal />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows title art on initial render', () => {
    render(<Terminal />)
    expect(screen.getByText(/Type 'help' to see available commands/)).toBeInTheDocument()
  })

  describe('Command History Navigation', () => {
    it('navigates through command history with arrow keys', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')

      // Type a few commands
      typeCommand(input, 'help')
      typeCommand(input, 'about')
      typeCommand(input, 'skills')

      // Navigate up through history (most recent first)
      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('skills')

      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('about')

      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('help')

      // Navigate back down
      fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' })
      expect(input).toHaveValue('about')
    })

    it('clears input when navigating past most recent command', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')

      typeCommand(input, 'help')
      
      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('help')

      fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' })
      expect(input).toHaveValue('')
    })
  })

  describe('Command Execution', () => {
    it('processes commands and shows output', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')
      
      typeCommand(input, 'help')
      expect(screen.getByText(/Available commands/)).toBeInTheDocument()
    })

    it('handles empty commands', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')
      
      typeCommand(input, '   ')
      const outputs = screen.getAllByText('$')
      expect(outputs.length).toBe(2) // Initial prompt + current prompt
    })

    it('shows error for unknown commands', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')
      
      typeCommand(input, 'unknown')
      expect(screen.getByText(/Command not found/)).toBeInTheDocument()
    })

    it('clears terminal but preserves history', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')
      
      // Execute commands in sequence
      typeCommand(input, 'help')
      typeCommand(input, 'about')
      typeCommand(input, 'clear')
      
      // Verify display is cleared
      expect(screen.queryByText(/Available commands/)).not.toBeInTheDocument()
      expect(screen.queryByText(/Hi! I'm Ronnie Pyne/)).not.toBeInTheDocument()
      
      // Verify history is preserved in reverse order (most recent first)
      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('clear')
      
      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('about')
      
      fireEvent.keyDown(input, { key: 'ArrowUp', code: 'ArrowUp' })
      expect(input).toHaveValue('help')
    })
  })

  describe('Terminal Interaction', () => {
    it('focuses input when clicking terminal', () => {
      render(<Terminal />)
      const terminal = screen.getByRole('textbox').parentElement!
      const input = screen.getByRole('textbox')
      
      input.blur()
      expect(input).not.toHaveFocus()
      
      fireEvent.click(terminal)
      expect(input).toHaveFocus()
    })

    it('preserves input value when clicking terminal', () => {
      render(<Terminal />)
      const terminal = screen.getByRole('textbox').parentElement!
      const input = screen.getByRole('textbox')
      
      fireEvent.change(input, { target: { value: 'test' } })
      fireEvent.click(terminal)
      
      expect(input).toHaveValue('test')
    })
  })

  describe('Visual Elements', () => {
    it('shows command prompt for each command', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')
      
      typeCommand(input, 'help')
      typeCommand(input, 'about')
      
      const prompts = screen.getAllByText('$')
      expect(prompts.length).toBeGreaterThan(2) // Initial + each command + current prompt
    })

    it('maintains proper command output formatting', () => {
      render(<Terminal />)
      const input = screen.getByRole('textbox')
      
      typeCommand(input, 'skills')
      
      const output = screen.getByText(/Technical Skills:/)
      expect(output).toBeInTheDocument()
      expect(output.closest('div')).toHaveClass('whitespace-pre-wrap')
    })
  })
})