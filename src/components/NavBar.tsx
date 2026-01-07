import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const NavBar = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-gray-100 border-t border-gray-800 dark:border-gray-800 light:border-gray-300 px-8 py-4">
      <div className="flex justify-center items-center gap-6">
        <Link to="/" className={`p-2 ${isActive('/') ? 'bg-white dark:bg-white light:bg-gray-800 rounded' : ''}`}>
          <svg className={`w-6 h-6 ${isActive('/') ? 'text-black dark:text-black light:text-white' : 'text-white dark:text-white light:text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        <div className="w-px h-6 bg-gray-700 dark:bg-gray-700 light:bg-gray-400"></div>
        <Link to="/playground" className={`p-2 ${isActive('/playground') ? 'bg-white dark:bg-white light:bg-gray-800 rounded' : ''}`}>
          <svg className={`w-6 h-6 ${isActive('/playground') ? 'text-black dark:text-black light:text-white' : 'text-white dark:text-white light:text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </Link>
        <div className="w-px h-6 bg-gray-700 dark:bg-gray-700 light:bg-gray-400"></div>
        <Link to="/blog" className={`p-2 ${isActive('/blog') ? 'bg-white dark:bg-white light:bg-gray-800 rounded' : ''}`}>
          <svg className={`w-6 h-6 ${isActive('/blog') ? 'text-black dark:text-black light:text-white' : 'text-white dark:text-white light:text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </Link>
        <div className="w-px h-6 bg-gray-700 dark:bg-gray-700 light:bg-gray-400"></div>
        <Link to="/misc" className={`p-2 ${isActive('/misc') ? 'bg-white dark:bg-white light:bg-gray-800 rounded' : ''}`}>
          <svg className={`w-6 h-6 ${isActive('/misc') ? 'text-black dark:text-black light:text-white' : 'text-white dark:text-white light:text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </Link>
        <div className="w-px h-6 bg-gray-700 dark:bg-gray-700 light:bg-gray-400"></div>
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-200 rounded transition-colors"
        >
          {theme === 'dark' ? (
            <svg className="w-6 h-6 text-white dark:text-white light:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default NavBar

