# Commit Messages

## Option 1: Single Comprehensive Commit (if squashing)

```
feat: Complete personal website with CLI aesthetic, theme toggle, and blog system

- Implement CLI/terminal window aesthetic design with macOS-style controls
- Add dark/light theme toggle with localStorage persistence
- Create responsive masonry layout for terminal windows
- Build 5 pages: Home, Blog, Blog Post Detail, Playground, Miscellaneous
- Enhance blog page with tags and filtering
- Add comprehensive documentation (README, EXAMPLE_USAGE)
- Set up file mounting system for static assets (images, CV)
- Implement React Router for navigation
- Add TypeScript for type safety
- Configure Tailwind CSS for styling

Features:
- Terminal window components with hover effects
- Command-line style content formatting
- Blog post detail pages with tech stack overview
- Theme context for global theme management
- Responsive navigation bar
- Smooth animations and transitions

Documentation:
- Complete README with setup instructions
- File mounting guide for images and CV
- Example usage documentation
- Deployment guides for Vercel, Netlify, GitHub Pages
```

## Option 2: Individual Commit Messages (Current)

### Commit 1: Initial Setup
```
feat: Initial commit - Personal website with CLI aesthetic

- Set up React + TypeScript + Vite project
- Implement CLI aesthetic design with terminal windows
- Add theme toggle functionality (dark/light mode)
- Create Home, Blog, Playground, and Miscellaneous pages
- Implement masonry layout for terminal windows
- Add responsive navigation bar
- Configure Tailwind CSS and PostCSS
```

### Commit 2: Documentation
```
docs: Add comprehensive README and file mounting guide

- Add detailed README with project structure and setup instructions
- Create EXAMPLE_USAGE.md with file mounting examples
- Add public folder structure for static assets
- Include deployment guides for Vercel, Netlify, GitHub Pages
- Document theme customization and content editing
```

### Commit 3: Blog Enhancement
```
feat: Enhance blog page with tags and create blog post detail page

- Improve blog list page with enhanced tag display
- Create blog post detail page component
- Add routing for individual blog posts (/blog/:id)
- Implement tech stack overview section
- Add 3 sample blog posts with complete content
- Support theme toggle in blog pages
- Add "Back to Blog" navigation link
```

## Option 3: Conventional Commits Format

```
feat(website): complete personal website with CLI aesthetic

BREAKING CHANGE: Initial release of personal website

- feat(ui): implement CLI/terminal window aesthetic design
- feat(theme): add dark/light theme toggle with persistence
- feat(layout): implement responsive masonry layout
- feat(pages): create Home, Blog, Playground, Miscellaneous pages
- feat(blog): add blog list and detail pages with tags
- feat(routing): implement React Router navigation
- docs(readme): add comprehensive documentation
- docs(examples): add file mounting guide
- style(theme): add theme support across all components
- refactor(components): create reusable TerminalWindow component
```

## Option 4: Simple and Clear

```
Add personal website with CLI aesthetic design

Features:
- Terminal window-style UI components
- Dark/light theme toggle
- Blog system with tags and detail pages
- Playground for AI projects
- Responsive masonry layout
- Complete documentation
```

## Recommended: Use Option 2 (Current Individual Commits)

Your current commits are well-organized and follow good practices:
1. Each commit has a clear purpose
2. Commits are logically separated
3. Easy to review and understand
4. Good for maintaining git history

If you want to create a PR, use the PR_DESCRIPTION.md file I created above.

