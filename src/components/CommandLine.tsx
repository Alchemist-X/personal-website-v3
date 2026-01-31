import React from 'react'

interface CommandLineProps {
  command: string
  children: React.ReactNode
  className?: string
}

const CommandLine: React.FC<CommandLineProps> = ({ command, children, className = '' }) => {
  return (
    <div className={`fade-in ${className}`}>
      <div className="mb-2">
        <span className="text-terminal-yellow">{'>'}</span>{' '}
        <span className="text-terminal-text font-mono">{command}</span>
      </div>
      <div className="ml-4">
        {children}
      </div>
    </div>
  )
}

export default CommandLine

