interface Project {
  title: string
  description: string
  buttons?: { label: string; href: string; primary?: boolean }[]
}

const Playground = () => {
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
        <h1 className="text-5xl font-bold text-terminal-text mb-2">Playground</h1>
        <p className="text-terminal-text mb-12">
          I like to build AI agents that can interact with humans. Here are some of the projects I have worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-terminal-bg border border-terminal-border rounded-lg p-6 hover:border-terminal-hover transition-colors"
            >
              <h2 className="text-2xl font-bold text-terminal-text mb-3">{project.title}</h2>
              <p className="text-[var(--muted-text)] mb-4">{project.description}</p>
              {project.buttons && (
                <div className="flex gap-3 flex-wrap">
                  {project.buttons.map((button, btnIndex) => (
                    <a
                      key={btnIndex}
                      href={button.href}
                      className={`px-4 py-2 rounded transition-colors ${
                        button.primary
                          ? 'bg-[var(--page-text)] text-[var(--page-bg)] hover:opacity-90'
                          : 'border border-[var(--page-text)] text-[var(--page-text)] hover:bg-[var(--page-text)] hover:text-[var(--page-bg)]'
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
