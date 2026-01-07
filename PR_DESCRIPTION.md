# Personal Website - CLI Aesthetic Portfolio

## 🎯 Overview

A modern personal website built with React, TypeScript, and Tailwind CSS, featuring a unique command-line interface (CLI) aesthetic design. The website includes multiple pages, theme toggle functionality, and a responsive masonry layout.

## ✨ Features

### Core Features
- **CLI/Terminal Aesthetic**: Terminal window-style panels with macOS-style window controls
- **Theme Toggle**: Dark/Light mode support with localStorage persistence
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Masonry Layout**: Auto-sizing terminal windows based on content (错排效果)

### Pages
1. **Home Page**: Personal information, updates log, research interests, profile, and mentors
2. **Blog Page**: Blog post listing with tags and filtering
3. **Blog Post Detail Page**: Full blog post view with tech stack overview
4. **Playground Page**: Showcase of AI projects and interactive demos
5. **Miscellaneous Page**: Life path, achievements, and travel map

### Technical Features
- React Router for navigation
- TypeScript for type safety
- Tailwind CSS for styling
- Vite for fast development and building
- Context API for theme management

## 📁 Project Structure

```
website-2601/
├── public/                 # Static assets (images, PDFs)
│   └── images/           # Project images
├── src/
│   ├── components/       # Reusable components
│   │   ├── TerminalWindow.tsx
│   │   ├── CommandLine.tsx
│   │   └── NavBar.tsx
│   ├── contexts/         # React contexts
│   │   └── ThemeContext.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Playground.tsx
│   │   └── Miscellaneous.tsx
│   └── ...
└── ...
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📝 Key Changes

### Commit 1: Initial Setup
- Set up React + TypeScript + Vite project
- Implemented CLI aesthetic design with terminal windows
- Added theme toggle functionality (dark/light mode)
- Created Home, Blog, Playground, and Miscellaneous pages
- Implemented masonry layout for terminal windows

### Commit 2: Documentation
- Added comprehensive README with file mounting instructions
- Created EXAMPLE_USAGE.md with detailed examples
- Added public folder structure for static assets

### Commit 3: Blog Enhancement
- Enhanced blog list page with improved tag display
- Created blog post detail page with full content
- Added routing for individual blog posts
- Implemented tech stack overview section
- Added 3 sample blog posts with complete content

## 🎨 Design Highlights

- **Terminal Windows**: Each section is displayed as a terminal window with red/yellow/green control buttons
- **Command Line Style**: Content is formatted as shell commands (e.g., `> cat profile.md`)
- **Smooth Animations**: Fade-in effects and hover transitions
- **Theme Support**: Complete dark/light theme support across all pages

## 📦 Dependencies

- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0
- tailwindcss: ^3.3.6
- vite: ^5.0.8
- typescript: ^5.3.3

## 🔧 Configuration

- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **PostCSS**: CSS processing

## 📚 Documentation

- `README.md`: Complete setup and usage guide
- `EXAMPLE_USAGE.md`: Detailed examples for adding files and customizing content

## 🎯 Future Enhancements

- [ ] Add blog post filtering by tags
- [ ] Implement search functionality
- [ ] Add comment system for blog posts
- [ ] Integrate with CMS for blog content management
- [ ] Add more interactive playground projects
- [ ] Implement analytics tracking

## 🐛 Known Issues

- None currently

## ✅ Testing

- Tested on Chrome, Firefox, and Safari
- Responsive design tested on mobile and tablet devices
- Theme toggle tested and working correctly
- All routes tested and functional

## 📄 License

MIT License

---

**Author**: Your Name  
**Repository**: https://github.com/Alchemist-X/personal-website-v3.git

