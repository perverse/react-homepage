import React from 'react'
import { render, screen } from '@/test/test-utils'
import { CommandHistory } from '../CommandHistory'

describe('CommandHistory', () => {
  const mockCommands = [
    { input: 'help', output: 'Available commands...' },
    { input: 'about', output: 'Hi! I\'m Ronnie Pyne...' },
    { input: 'skills', output: 'Technical Skills:...' }
  ]

  it('renders command history correctly', () => {
    render(<CommandHistory commands={mockCommands} />)
    
    mockCommands.forEach(cmd => {
      expect(screen.getByText(cmd.input)).toBeInTheDocument()
      expect(screen.getByText(cmd.output)).toBeInTheDocument()
    })
  })

  it('renders empty state correctly', () => {
    render(<CommandHistory commands={[]} />)
    expect(screen.queryByText('help')).not.toBeInTheDocument()
  })

  it('maintains command order', () => {
    render(<CommandHistory commands={mockCommands} />)
    
    const commandElements = screen.getAllByText(/^\$/)
    expect(commandElements).toHaveLength(mockCommands.length)
    
    // Check order of commands
    const commandTexts = commandElements.map(el => 
      el.nextSibling?.textContent
    )
    expect(commandTexts).toEqual(mockCommands.map(cmd => cmd.input))
  })

  it('preserves whitespace in command output', () => {
    const commandWithWhitespace = {
      input: 'test',
      output: '  indented\nline break\n  more indent'
    }
    
    render(<CommandHistory commands={[commandWithWhitespace]} />)
    const outputElement = screen.getByText((content) => content.includes('indented'))
    expect(outputElement).toHaveClass('whitespace-pre-wrap')
  })

  it('applies correct styling to command prompts', () => {
    render(<CommandHistory commands={mockCommands} />)
    
    const prompts = screen.getAllByText('$')
    prompts.forEach(prompt => {
      expect(prompt).toHaveClass('text-[var(--terminal-prompt)]')
    })
  })

  it('applies correct styling to command inputs', () => {
    render(<CommandHistory commands={mockCommands} />)
    
    mockCommands.forEach(cmd => {
      const input = screen.getByText(cmd.input)
      expect(input).toHaveClass('text-[var(--terminal-command)]')
    })
  })

  it('applies correct styling to command outputs', () => {
    render(<CommandHistory commands={mockCommands} />)
    
    mockCommands.forEach(cmd => {
      const output = screen.getByText(cmd.output)
      expect(output).toHaveClass('text-[var(--terminal-output)]')
    })
  })

  it('maintains proper spacing between commands', () => {
    render(<CommandHistory commands={mockCommands} />)
    
    const historyContainer = screen.getAllByText('$')[0].closest('.space-y-3')
    expect(historyContainer).toHaveClass('space-y-3')
  })
});