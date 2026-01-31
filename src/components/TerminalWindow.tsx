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
      className={`bg-terminal-bg rounded-lg border border-terminal-border shadow-2xl terminal-window hover:border-terminal-hover transition-all duration-300 ${className}`}
      style={style}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-[var(--muted-text)] font-mono">{title}</span>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default TerminalWindow

