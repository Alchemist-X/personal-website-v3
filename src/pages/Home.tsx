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

        <TerminalWindow title="cat updates.log" className="hover:scale-[1.02]" style={{ gridRow: 'span 1' }}>
          <CommandLine command="cat updates.log">
            <div className="space-y-3 font-mono text-sm">
              <div className="hover:text-[var(--link-color)] transition-colors cursor-pointer">
                <span className="text-[var(--muted-text)]">2025/05:</span>{' '}
                <span className="text-terminal-text">Update 1</span>
              </div>
              <div className="hover:text-[var(--link-color)] transition-colors cursor-pointer">
                <span className="text-[var(--muted-text)]">2025/04:</span>{' '}
                <span className="text-terminal-text">Update 2</span>
              </div>
              <div className="hover:text-[var(--link-color)] transition-colors cursor-pointer">
                <span className="text-[var(--muted-text)]">2025/01:</span>{' '}
                <span className="text-terminal-text">Update 3</span>
              </div>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="ls research/" style={{ gridRow: 'span 1' }}>
          <CommandLine command="ls research/">
            <ul className="list-disc list-inside space-y-2 text-terminal-text mb-4">
              <li>Research Area 1</li>
              <li>Research Area 2</li>
              <li>Research Area 3</li>
            </ul>
            <div className="mt-4">
              <p className="text-[var(--muted-text)] mb-2">Recommended reading:</p>
              <a href="#" className="text-[var(--link-color)] hover:underline">Book Title by Author</a>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat profile.md" style={{ gridRow: 'span 2' }}>
          <CommandLine command="cat profile.md">
            <div className="space-y-3 text-terminal-text">
              <p>
                Hi, I am a researcher/developer. Brief introduction about yourself.
              </p>
              <p>
                More details about your background, education, and interests.
              </p>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat mentors.md" style={{ gridColumn: 'span 2', gridRow: 'span 1' }}>
          <CommandLine command="cat mentors.md">
            <div>
              <p className="text-terminal-text mb-3">I was fortunate to work with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><a href="#" className="text-[var(--link-color)] hover:underline">Mentor 1</a></li>
                <li><a href="#" className="text-[var(--link-color)] hover:underline">Mentor 2</a></li>
                <li><a href="#" className="text-[var(--link-color)] hover:underline">Mentor 3</a></li>
              </ul>
            </div>
          </CommandLine>
        </TerminalWindow>
      </div>
    </div>
  )
}

export default Home
