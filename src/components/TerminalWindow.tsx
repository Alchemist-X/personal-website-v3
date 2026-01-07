import React from 'react'

interface TerminalWindowProps {
  title: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, className = '', style }) => {
  return (
    <div 
      className={`bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-white rounded-lg border border-gray-800 dark:border-gray-800 light:border-gray-300 shadow-2xl terminal-window hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-400 transition-all duration-300 ${className}`}
      style={style}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 dark:border-gray-800 light:border-gray-300">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">{title}</span>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default TerminalWindow

