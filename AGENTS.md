# AGENTS.md

Instructions for AI agents working on this codebase.

## Project Overview

This is a personal website with a CLI/terminal aesthetic design built with:

- **React 18** - UI framework
- **TypeScript** - Type safety with strict mode enabled
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side routing

The website features terminal-style windows, a dark/light theme toggle, and responsive layout using CSS Grid.

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start development server (localhost:5173)
npm run build  # Build for production (runs tsc && vite build)
npm run preview # Preview production build
```

## Project Structure

```
src/
├── App.tsx              # Main app with routing configuration
├── main.tsx             # Entry point
├── index.css            # Global styles, CSS variables, animations
├── components/
│   ├── TerminalWindow.tsx   # Terminal window wrapper component
│   ├── CommandLine.tsx      # Command prompt display component
│   └── NavBar.tsx           # Bottom navigation bar
├── contexts/
│   └── ThemeContext.tsx     # Dark/light theme state management
└── pages/
    ├── Home.tsx             # Home page with personal info
    ├── Blog.tsx             # Blog listing page
    ├── BlogPost.tsx         # Individual blog post page
    ├── Playground.tsx       # Projects showcase page
    └── Miscellaneous.tsx    # Life experiences, achievements
```

## Routing

Routes are defined in `App.tsx`:

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Home page |
| `/blog` | `Blog` | Blog listing |
| `/blog/:id` | `BlogPost` | Individual blog post |
| `/misc` | `Miscellaneous` | Life experiences |
| `/playground` | `Playground` | Projects showcase |

## Coding Conventions

### TypeScript

- Strict mode is enabled (`strict: true` in tsconfig.json)
- No unused locals or parameters allowed
- Use explicit types for component props via interfaces
- Prefer `React.FC<Props>` pattern for components with props

### Component Patterns

**Terminal Window Component:**
```tsx
<TerminalWindow title="command-description" className="optional-classes" style={{ gridRow: 'span 2' }}>
  <CommandLine command="your-command">
    {/* Content here */}
  </CommandLine>
</TerminalWindow>
```

**Standard Functional Component:**
```tsx
interface MyComponentProps {
  title: string
  children: React.ReactNode
  className?: string
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children, className = '' }) => {
  return (
    // JSX
  )
}

export default MyComponent
```

### Styling

- Use Tailwind CSS utility classes for styling
- Theme-aware colors use CSS variables: `var(--terminal-bg)`, `var(--link-color)`, etc.
- Custom Tailwind colors defined in `tailwind.config.js` map to CSS variables
- Global styles and animations are in `src/index.css`

**Key CSS Variables (defined in `src/index.css`):**
- `--terminal-bg` - Terminal window background
- `--terminal-text` - Terminal text color
- `--terminal-border` - Terminal border color
- `--terminal-hover` - Terminal hover state
- `--page-bg` - Page background
- `--link-color` - Link color (blue)
- `--muted-text` - Muted/secondary text color

**Tailwind Custom Classes:**
- `bg-terminal-bg`, `text-terminal-text`, `border-terminal-border`, `bg-terminal-hover`
- For other CSS vars, use inline: `text-[var(--link-color)]`, `text-[var(--muted-text)]`

### Grid Layout

The home page uses CSS Grid with auto-fill columns:
```tsx
style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
  gridAutoRows: 'min-content',
  gap: '1.5rem',
  gridAutoFlow: 'row dense'
}}
```

Use `gridRow: 'span 2'` or `gridColumn: 'span 2'` for larger cards.

## Adding Content

### Adding Blog Posts

1. Add entry to `posts` array in `src/pages/Blog.tsx`:
```tsx
{
  id: 'unique-slug',
  date: 'Month Day, Year',
  title: 'Post Title',
  description: 'Brief description',
  tags: ['tag1', 'tag2'],
  author: 'Author Name'
}
```

2. Add content to `blogPosts` object in `src/pages/BlogPost.tsx`:
```tsx
'unique-slug': {
  id: 'unique-slug',
  date: 'Month Day, Year',
  title: 'Post Title',
  description: 'Brief description',
  tags: ['tag1', 'tag2'],
  author: 'Author Name',
  content: ['Paragraph 1', 'Paragraph 2'],
  techStack: [{ name: 'Tech', description: 'Why used' }]
}
```

### Adding Projects (Playground)

Add to `projects` array in `src/pages/Playground.tsx`:
```tsx
{
  title: 'Project Name',
  description: 'Description',
  buttons: [
    { label: 'Try It', href: 'https://...', primary: true },
    { label: 'GitHub', href: 'https://...', primary: false }
  ]
}
```

### Static Assets

Place in `public/` directory and reference with absolute paths:
```tsx
<img src="/avatar.jpg" alt="Avatar" />
<a href="/cv.pdf">Download CV</a>
<img src="/images/project.png" alt="Project" />
```

## Theme System

Theme is managed via `ThemeContext` in `src/contexts/ThemeContext.tsx`:
- Toggle adds/removes `light` class on `<html>` element
- Theme preference stored in localStorage
- CSS variables change based on `.light` class presence

## Important Notes

1. **No Test Suite**: There are no automated tests configured. Verify changes manually with `npm run dev`.

2. **No Linter Config**: ESLint is not configured. Rely on TypeScript strict mode for type checking.

3. **Build Validation**: Always run `npm run build` before committing to ensure TypeScript compilation succeeds.

4. **Responsive Design**: The grid layout is responsive by default. Test at different viewport sizes.

5. **Animation Classes**: Terminal windows use `.terminal-window` class for staggered fade-in animations (defined in `index.css`).

6. **Monospace Font**: The site uses monospace fonts (Monaco, Menlo, etc.) for the CLI aesthetic.

## Common Tasks

### Update Personal Info
Edit `src/pages/Home.tsx` - look for placeholder text like `YOUR NAME`, `Location`, etc.

### Change Theme Colors
Modify CSS variables in `src/index.css` under `:root` (dark) and `html.light` (light).

### Add New Page
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/NavBar.tsx`

### Modify Terminal Window Style
Edit `src/components/TerminalWindow.tsx` for structure or `src/index.css` for animations.
