import { useParams, Link } from 'react-router-dom'

interface BlogPostContent {
  id: string
  date: string
  title: string
  description: string
  tags: string[]
  author?: string
  content: string[]
  techStack?: { name: string; description: string }[]
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()

  const blogPosts: Record<string, BlogPostContent> = {
    'building-ai-chatbot': {
      id: 'building-ai-chatbot',
      date: 'March 20, 2025',
      title: 'Building and Deploying a Personal AI Chatbot',
      description: 'A comprehensive guide on creating a custom AI chatbot using modern technologies and deploying it on a personal website',
      tags: ['ai', 'typescript', 'react', 'openai', 'supabase'],
      author: 'Your Name',
      content: [
        'Building a personal AI chatbot and integrating it into your website can significantly enhance user engagement and provide interactive assistance to your visitors. In this post, I\'ll walk through the process of creating and deploying a custom chatbot using modern web technologies.',
        'The chatbot will be able to understand user queries, provide contextual responses, and maintain conversation history. We\'ll implement features like message history, typing indicators, and a clean, modern UI that matches your website\'s aesthetic.',
        'Throughout this guide, I\'ll cover everything from setting up the development environment to deploying the final product. Let\'s get started!'
      ],
      techStack: [
        { name: 'OpenAI API', description: 'For natural language processing and response generation' },
        { name: 'React', description: 'For building the chat interface' },
        { name: 'TypeScript', description: 'For type-safe development' },
        { name: 'Supabase', description: 'For storing chat history and managing API keys' },
        { name: 'Shadcn UI', description: 'For building a beautiful chat interface' },
        { name: 'Remix', description: 'For server-side rendering and API routes' }
      ]
    },
    'training-ai-agent-orbito': {
      id: 'training-ai-agent-orbito',
      date: 'March 31, 2025',
      title: 'Training an AI Agent to Play Orbito',
      description: 'A deep dive into training a Deep Q-Network (DQN) agent to play Orbito, featuring prioritized experience replay and intrinsic rewards for exploration.',
      tags: ['AI', 'Reinforcement Learning', 'DQN', 'Game AI', 'Python'],
      author: 'Your Name',
      content: [
        'Orbito is a strategic board game that requires careful planning and tactical thinking. In this project, I trained a Deep Q-Network (DQN) agent to master this game through reinforcement learning.',
        'The key challenges included designing an effective reward structure, implementing prioritized experience replay to learn from important game states, and adding intrinsic rewards to encourage exploration of the game space.',
        'After extensive training, the agent achieved impressive performance, consistently beating human players and demonstrating strategic understanding of the game mechanics.'
      ],
      techStack: [
        { name: 'PyTorch', description: 'For building and training the neural network' },
        { name: 'Gymnasium', description: 'For the game environment' },
        { name: 'NumPy', description: 'For numerical computations' },
        { name: 'TensorBoard', description: 'For visualizing training progress' }
      ]
    },
    'developer-productivity-setup': {
      id: 'developer-productivity-setup',
      date: 'March 28, 2024',
      title: 'My Ultimate Developer Productivity Setup 2024',
      description: 'A detailed walkthrough of my development environment, productivity tools, and terminal configuration that supercharge my daily workflow',
      tags: ['productivity', 'tools', 'terminal', 'development'],
      author: 'Your Name',
      content: [
        'A well-configured development environment can make a huge difference in your productivity. In this post, I\'ll share my complete setup that helps me code faster and more efficiently.',
        'I\'ll cover everything from terminal configuration and shell setup to editor plugins and productivity tools. Each tool has been carefully selected to maximize efficiency.',
        'Whether you\'re a beginner or an experienced developer, you\'ll find something useful in this comprehensive guide to building your perfect development environment.'
      ],
      techStack: [
        { name: 'VS Code', description: 'Primary code editor with custom extensions' },
        { name: 'Zsh + Oh My Zsh', description: 'Powerful shell with helpful plugins' },
        { name: 'Git', description: 'Version control with custom aliases' },
        { name: 'Docker', description: 'Containerization for consistent environments' }
      ]
    }
  }

  const post = id ? blogPosts[id] : null

  if (!post) {
    return (
      <div className="min-h-screen p-8 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-terminal-text mb-4">
            Post Not Found
          </h1>
          <Link
            to="/blog"
            className="text-[var(--link-color)] hover:opacity-80 underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 pb-24">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center mb-8 text-[var(--muted-text)] hover:text-terminal-text transition-colors"
        >
          &lt; Back to Blog
        </Link>

        <div className="border-b border-terminal-border pb-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[var(--muted-text)] text-sm">
              {post.date}
            </span>
            <span className="text-[var(--muted-text)] text-sm">
              {post.author ? `By ${post.author}` : 'By Your Name'}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-terminal-text mb-4">
            {post.title}
          </h1>

          <p className="text-[var(--muted-text)] mb-4">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 rounded-full text-sm font-medium bg-terminal-hover text-terminal-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article className="prose max-w-none">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-[var(--muted-text)] mb-4 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          {post.techStack && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-terminal-text mb-4">
                Tech Stack Overview
              </h2>
              <p className="text-[var(--muted-text)] mb-4">
                For this project, we'll use:
              </p>
              <ul className="space-y-2 text-[var(--muted-text)]">
                {post.techStack.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-[var(--link-color)]">•</span>
                    <span>
                      <strong className="text-terminal-text">{tech.name}:</strong>{' '}
                      {tech.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-terminal-border">
            <p className="text-[var(--muted-text)] text-sm italic">
              This is a sample blog post. Replace this content with your actual blog post content.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
