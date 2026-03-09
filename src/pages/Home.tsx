import { useState, useEffect } from 'react'
import TerminalWindow from '../components/TerminalWindow'
import CommandLine from '../components/CommandLine'

const Home = () => {
  const [lastSeen, setLastSeen] = useState('')

  useEffect(() => {
    const updateLastSeen = () => {
      const daysAgo = Math.floor(Math.random() * 7)
      setLastSeen(`${daysAgo} days ago`)
    }
    updateLastSeen()
    const interval = setInterval(updateLastSeen, 86400000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen p-8 pb-24">
      <div
        className="max-w-7xl mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
          gridAutoRows: 'min-content',
          gap: '1.5rem',
          gridAutoFlow: 'row dense'
        }}
      >
        <TerminalWindow title="avatar.jpg && whoami" className="hover:scale-[1.02]" style={{ gridRow: 'span 2' }}>
            <div className="flex items-start gap-4 mb-6">
            <div className="w-24 h-24 bg-terminal-hover rounded-lg flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-terminal-text mb-2">YOUR NAME</h1>
            </div>
          </div>

          <CommandLine command="cat info.md">
            <div className="flex flex-wrap gap-2 text-[var(--link-color)]">
              <a href="#" className="hover:underline">X</a>
              <span className="text-[var(--muted-text)]">|</span>
              <a href="#" className="hover:underline">Google Scholar</a>
              <span className="text-[var(--muted-text)]">|</span>
              <a href="#" className="hover:underline">GitHub</a>
              <span className="text-[var(--muted-text)]">|</span>
              <a href="#" className="hover:underline">Email</a>
              <span className="text-[var(--muted-text)]">|</span>
              <a href="#" className="hover:underline">CV</a>
            </div>
          </CommandLine>

          <CommandLine command="locate me" className="mt-4">
            <div>
              <p className="text-terminal-text">Location</p>
              <p className="text-[var(--muted-text)] text-sm italic mt-1">
                *Last seen {lastSeen} (<span className="text-[var(--link-color)]">update automatically</span>)
              </p>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat experience.md" className="hover:scale-[1.02]" style={{ gridRow: 'span 1' }}>
          <CommandLine command="cat experience.md">
            <div className="space-y-3 font-mono text-sm">
              <div className="hover:text-[var(--link-color)] transition-colors cursor-pointer">
                <span className="text-[var(--muted-text)]">2026-now:</span>{' '}
                <span className="text-terminal-text">OKX · Product Manager 2</span>
              </div>
              <div className="hover:text-[var(--link-color)] transition-colors cursor-pointer">
                <span className="text-[var(--muted-text)]">2025:</span>{' '}
                <span className="text-terminal-text">Alibaba · ML Engineer</span>
              </div>
              <div className="hover:text-[var(--link-color)] transition-colors cursor-pointer">
                <span className="text-[var(--muted-text)]">2022:</span>{' '}
                <span className="text-terminal-text">ByteDance · Product Intern</span>
              </div>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat education.md" style={{ gridRow: 'span 1' }}>
          <CommandLine command="cat education.md">
            <ul className="list-disc list-inside space-y-2 text-terminal-text mb-4">
              <li>JHU · MS FinEcon</li>
              <li>HKU · BEng CompEng</li>
            </ul>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat papers.md" style={{ gridRow: 'span 2' }}>
          <CommandLine command="cat papers.md">
            <div className="space-y-3 text-terminal-text text-sm">
              <p>NeurIPS WS'25 · Bargain Skills</p>
              <p>MgmtSci WP · Gambling Addiction</p>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat skills.md" style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
          <CommandLine command="cat skills.md">
            <div>
              <p className="text-terminal-text mb-3">Skills</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-terminal-text">Product Strategy</span>
                <span className="text-[var(--muted-text)]">·</span>
                <span className="text-terminal-text">ML Evaluation</span>
                <span className="text-[var(--muted-text)]">·</span>
                <span className="text-terminal-text">Econometrics</span>
                <span className="text-[var(--muted-text)]">·</span>
                <span className="text-terminal-text">A/B Testing</span>
                <span className="text-[var(--muted-text)]">·</span>
                <span className="text-terminal-text">Data Pipelines</span>
              </div>
            </div>
          </CommandLine>
        </TerminalWindow>
      </div>
    </div>
  )
}

export default Home
