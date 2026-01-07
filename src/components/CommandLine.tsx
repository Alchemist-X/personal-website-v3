import React from 'react'

interface CommandLineProps {
  command: string
  children: React.ReactNode
  className?: string
}

import { useTheme } from '../contexts/ThemeContext'

const CommandLine: React.FC<CommandLineProps> = ({ command, children, className = '' }) => {
  const { theme } = useTheme()
  return (
    <div className={`fade-in ${className}`}>
      <div className="mb-2">
        <span className="text-yellow-400 dark:text-yellow-400 light:text-yellow-600">{'>'}</span>{' '}
        <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-mono`}>{command}</span>
      </div>
      <div className="ml-4">
        {children}
      </div>
    </div>
  )
}

export default CommandLine

