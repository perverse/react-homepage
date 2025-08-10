
import { render, screen, fireEvent } from '@/test/test-utils'
import { InputLine } from '../InputLine'

describe('InputLine', () => {
  const mockProps = {
    value: '',
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    onKeyDown: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders input field correctly', () => {
    render(<InputLine {...mockProps} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows command prompt ($)', () => {
    render(<InputLine {...mockProps} />)
    const prompt = screen.getByText('$')
    expect(prompt).toBeInTheDocument()
    expect(prompt).toHaveClass('text-[var(--terminal-prompt)]')
  })

  describe('Input Handling', () => {
    it('calls onChange when typing', () => {
      render(<InputLine {...mockProps} />)
      const input = screen.getByRole('textbox')
      
      fireEvent.change(input, { target: { value: 'test' } })
      expect(mockProps.onChange).toHaveBeenCalledWith('test')
    })

    it('calls onKeyDown when pressing keys', () => {
      render(<InputLine {...mockProps} />)
      const input = screen.getByRole('textbox')
      
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
      expect(mockProps.onKeyDown).toHaveBeenCalled()
      expect(mockProps.onKeyDown).toHaveBeenCalledWith(expect.any(Object))
    })

    it('displays current value', () => {
      render(<InputLine {...mockProps} value="test command" />)
      expect(screen.getByRole('textbox')).toHaveValue('test command')
    })
  })

  describe('Styling', () => {
    it('has transparent background', () => {
      render(<InputLine {...mockProps} />)
      expect(screen.getByRole('textbox')).toHaveClass('bg-transparent')
    })

    it('has proper text color', () => {
      render(<InputLine {...mockProps} />)
      expect(screen.getByRole('textbox')).toHaveClass('text-[var(--terminal-command)]')
    })

    it('has no spellcheck', () => {
      render(<InputLine {...mockProps} />)
      expect(screen.getByRole('textbox')).toHaveAttribute('spellcheck', 'false')
    })

    it('has no autocomplete', () => {
      render(<InputLine {...mockProps} />)
      expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'off')
    })
  })

  describe('Layout', () => {
    it('maintains proper spacing with prompt', () => {
      render(<InputLine {...mockProps} />)
      const prompt = screen.getByText('$')
      expect(prompt).toHaveClass('mr-2')
    })

    it('input takes remaining space', () => {
      render(<InputLine {...mockProps} />)
      expect(screen.getByRole('textbox')).toHaveClass('flex-1')
    })
  })

  describe('Focus Handling', () => {
    it('can be focused programmatically', () => {
      render(<InputLine {...mockProps} />)
      const input = screen.getByRole('textbox')
      
      input.focus()
      expect(input).toHaveFocus()
    })

    it('shows focus outline properly', () => {
      render(<InputLine {...mockProps} />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('outline-none')
    })
  })
});