import { useTheme } from '../contexts/ThemeContext'

interface Project {
  title: string
  description: string
  buttons?: { label: string; href: string; primary?: boolean }[]
}

const Playground = () => {
  const { theme } = useTheme()
  const projects: Project[] = [
    {
      title: 'Orbito AI',
      description: 'Challenge an AI agent trained to play Orbito, a strategic board game of alignment and tactics.',
      buttons: [
        { label: 'Play Now', href: '#', primary: true },
        { label: 'Read Blog', href: '#', primary: false }
      ]
    },
    {
      title: 'More coming soon...',
      description: 'Stay tuned for more interactive AI experiments and games.'
    }
  ]

  return (
    <div className="min-h-screen p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>Playground</h1>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-12`}>
          I like to build AI agents that can interact with humans. Here are some of the projects I have worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-white border border-gray-800 dark:border-gray-800 light:border-gray-300 rounded-lg p-6 hover:border-gray-700 dark:hover:border-gray-700 light:hover:border-gray-400 transition-colors`}
            >
              <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-3`}>{project.title}</h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
              {project.buttons && (
                <div className="flex gap-3 flex-wrap">
                  {project.buttons.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.href}
                      className={`px-4 py-2 rounded transition-colors ${
                        button.primary
                          ? `${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`
                          : `${theme === 'dark' ? 'border border-white text-white hover:bg-white hover:text-black' : 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'}`
                      }`}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Playground

