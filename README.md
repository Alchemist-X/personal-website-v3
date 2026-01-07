# Personal Website

A personal website with CLI aesthetic design, featuring terminal-style windows, theme toggle, and responsive layout.

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
website-2601/
├── public/                 # Static assets (images, PDFs, etc.)
│   ├── avatar.jpg         # Your profile picture
│   ├── cv.pdf             # Your CV/resume
│   └── images/            # Other images
│       ├── project1.jpg
│       └── ...
├── src/
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── Blog.tsx       # Blog page
│   │   ├── Playground.tsx # Playground page
│   │   └── Miscellaneous.tsx # Misc page
│   ├── components/        # Reusable components
│   └── contexts/         # React contexts (theme)
└── ...
```

## 📸 How to Add Files

### 1. Adding Images

#### Option A: Using `public` folder (Recommended)

1. Create a `public` folder in the root directory if it doesn't exist:
```bash
mkdir public
```

2. Add your images to the `public` folder:
```
public/
├── avatar.jpg
├── images/
│   ├── kilimanjaro-1.jpg
│   ├── kilimanjaro-2.jpg
│   └── project-screenshot.png
```

3. Reference images in your code:
```tsx
// In Home.tsx or other components
<img src="/avatar.jpg" alt="Profile" />
<img src="/images/kilimanjaro-1.jpg" alt="Kilimanjaro" />
```

#### Option B: Using `src/assets` folder

1. Create an `assets` folder:
```bash
mkdir -p src/assets/images
```

2. Add your images:
```
src/assets/images/
├── avatar.jpg
└── ...
```

3. Import images in your component:
```tsx
import avatarImage from '../assets/images/avatar.jpg'

<img src={avatarImage} alt="Profile" />
```

### 2. Adding Your CV/Resume

1. Place your CV PDF in the `public` folder:
```
public/
└── cv.pdf
```

2. Update the CV link in `src/pages/Home.tsx`:
```tsx
<a href="/cv.pdf" target="_blank" className="hover:underline">CV</a>
```

Or link to an external URL:
```tsx
<a href="https://your-domain.com/cv.pdf" target="_blank" className="hover:underline">CV</a>
```

### 3. Adding Avatar Image

Update `src/pages/Home.tsx`:

```tsx
// Replace the placeholder emoji with your image
<div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
  <img 
    src="/avatar.jpg" 
    alt="Your Name" 
    className="w-full h-full object-cover"
  />
</div>
```

### 4. Adding Project Images (Playground)

Update `src/pages/Playground.tsx`:

```tsx
const projects: Project[] = [
  {
    title: 'Orbito AI',
    description: 'Challenge an AI agent...',
    image: '/images/orbito-screenshot.png', // Add image path
    buttons: [
      { label: 'Play Now', href: '#', primary: true },
      { label: 'Read Blog', href: '#', primary: false }
    ]
  }
]

// Then in the component:
{project.image && (
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
)}
```

### 5. Adding Images to Miscellaneous Page

Update `src/pages/Miscellaneous.tsx`:

```tsx
// Replace placeholder with actual images
<div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center h-48 overflow-hidden">
  <img 
    src="/images/kilimanjaro-peak.jpg" 
    alt="Standing at Uhuru Peak"
    className="w-full h-full object-cover"
  />
</div>
<p className="text-gray-400 text-sm text-center mt-2">
  Standing at Uhuru Peak (5,895m)
</p>
```

## 🔗 How to Configure Links

### Social Media Links

Edit `src/pages/Home.tsx`:

```tsx
<CommandLine command="cat info.md">
  <div className="flex flex-wrap gap-2 text-blue-400">
    <a href="https://twitter.com/yourhandle" target="_blank" className="hover:underline">X</a>
    <span className="text-gray-600">|</span>
    <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" className="hover:underline">Google Scholar</a>
    <span className="text-gray-600">|</span>
    <a href="https://github.com/yourusername" target="_blank" className="hover:underline">GitHub</a>
    <span className="text-gray-600">|</span>
    <a href="mailto:your.email@example.com" className="hover:underline">Email</a>
    <span className="text-gray-600">|</span>
    <a href="/cv.pdf" target="_blank" className="hover:underline">CV</a>
  </div>
</CommandLine>
```

### Location

Update location in `src/pages/Home.tsx`:

```tsx
<CommandLine command="locate me">
  <div>
    <p className="text-white">Your City, Country</p>
    <p className="text-gray-400 text-sm italic mt-1">
      *Last seen {lastSeen} (<span className="text-blue-400">update automatically</span>)
    </p>
  </div>
</CommandLine>
```

## ✏️ Customizing Content

### Home Page (`src/pages/Home.tsx`)

- **Name**: Change `YOUR NAME` to your actual name
- **Updates**: Edit the updates log with your achievements
- **Research Areas**: Update the research interests list
- **Profile**: Modify the profile description
- **Mentors**: Update the mentors list

### Blog Page (`src/pages/Blog.tsx`)

Add your blog posts:

```tsx
const posts: BlogPost[] = [
  {
    date: 'March 20, 2025',
    title: 'Your Blog Post Title',
    description: 'Your blog post description...',
    tags: ['tag1', 'tag2', 'tag3'],
    slug: 'your-blog-post-slug' // For routing
  }
]
```

### Playground Page (`src/pages/Playground.tsx`)

Add your projects:

```tsx
const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '/images/project-screenshot.png',
    buttons: [
      { label: 'Try It', href: 'https://your-project-url.com', primary: true },
      { label: 'Read More', href: '/blog/project-post', primary: false }
    ]
  }
]
```

### Miscellaneous Page (`src/pages/Miscellaneous.tsx`)

- **Life Path**: Update your education and work history
- **Achievements**: Add your achievement images and descriptions
- **Travel Map**: Add a world map component or image

## 🎨 Theme Customization

The website supports dark/light themes. Theme preference is saved in localStorage.

To customize colors, edit:
- `tailwind.config.js` - Tailwind color configuration
- `src/index.css` - Global styles
- Individual component files for specific styling

## 📦 Building for Production

1. Build the project:
```bash
npm run build
```

2. The `dist` folder will contain the production-ready files

3. Deploy the `dist` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)

### Deploying to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploying to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Deploying to GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🛠️ Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing

## 📝 Notes

- All static assets (images, PDFs) should be placed in the `public` folder for easy access
- Use relative paths (`/filename.ext`) for files in the `public` folder
- For better performance, optimize images before adding them
- The theme toggle saves preference in localStorage
- Terminal windows use CSS Grid with auto-sizing for a masonry layout effect

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

MIT License - feel free to use this project for your personal website.
