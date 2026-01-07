import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import TerminalWindow from '../components/TerminalWindow'
import CommandLine from '../components/CommandLine'

const Home = () => {
  const { theme } = useTheme()
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
            <div className={`w-24 h-24 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center`}>
              <span className="text-4xl">👤</span>
            </div>
            <div>
              <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>YOUR NAME</h1>
            </div>
          </div>
          
          <CommandLine command="cat info.md">
            <div className="flex flex-wrap gap-2 text-blue-400 dark:text-blue-400 light:text-blue-600">
              <a href="#" className="hover:underline">X</a>
              <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <a href="#" className="hover:underline">Google Scholar</a>
              <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <a href="#" className="hover:underline">GitHub</a>
              <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <a href="#" className="hover:underline">Email</a>
              <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>|</span>
              <a href="#" className="hover:underline">CV</a>
            </div>
          </CommandLine>

          <CommandLine command="locate me" className="mt-4">
            <div>
              <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Location</p>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm italic mt-1`}>
                *Last seen {lastSeen} (<span className="text-blue-400 dark:text-blue-400 light:text-blue-600">update automatically</span>)
              </p>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat updates.log" className="hover:scale-[1.02]" style={{ gridRow: 'span 1' }}>
          <CommandLine command="cat updates.log">
            <div className="space-y-3 font-mono text-sm">
              <div className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors cursor-pointer">
                <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>2025/05:</span>{' '}
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Update 1</span>
              </div>
              <div className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors cursor-pointer">
                <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>2025/04:</span>{' '}
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Update 2</span>
              </div>
              <div className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors cursor-pointer">
                <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>2025/01:</span>{' '}
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Update 3</span>
              </div>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="ls research/" style={{ gridRow: 'span 1' }}>
          <CommandLine command="ls research/">
            <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
              <li>Research Area 1</li>
              <li>Research Area 2</li>
              <li>Research Area 3</li>
            </ul>
            <div className="mt-4">
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Recommended reading:</p>
              <a href="#" className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline">Book Title by Author</a>
            </div>
          </CommandLine>
        </TerminalWindow>

        <TerminalWindow title="cat profile.md" style={{ gridRow: 'span 2' }}>
          <CommandLine command="cat profile.md">
            <div className={`space-y-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
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
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-3`}>I was fortunate to work with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><a href="#" className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline">Mentor 1</a></li>
                <li><a href="#" className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline">Mentor 2</a></li>
                <li><a href="#" className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline">Mentor 3</a></li>
              </ul>
            </div>
          </CommandLine>
        </TerminalWindow>
      </div>
    </div>
  )
}

export default Home

