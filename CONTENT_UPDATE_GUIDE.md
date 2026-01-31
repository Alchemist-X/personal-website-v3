# 网站内容更新指南

本指南说明如何更新网站的各个部分内容。

---

## 目录结构

```
src/
├── pages/
│   ├── Home.tsx          # 首页个人信息
│   ├── Blog.tsx          # 博客列表
│   ├── BlogPost.tsx      # 博客文章详情
│   ├── Playground.tsx    # 项目展示
│   └── Miscellaneous.tsx # 杂项（生活经历等）
└── components/           # 可复用组件
```

---

## 1. 更新首页个人信息

**文件**: `src/pages/Home.tsx`

### 修改姓名和头像

```tsx
// 找到这段代码，修改 YOUR NAME
<h1 className="text-4xl font-bold text-terminal-text mb-2">YOUR NAME</h1>

// 替换头像（将 👤 替换为图片）
<div className="w-24 h-24 bg-terminal-hover rounded-lg flex items-center justify-center">
  <img src="/avatar.jpg" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
</div>
```

### 修改社交链接

```tsx
// 找到 CommandLine command="cat info.md" 部分
<a href="https://twitter.com/你的用户名" className="hover:underline">X</a>
<a href="https://scholar.google.com/你的链接" className="hover:underline">Google Scholar</a>
<a href="https://github.com/你的用户名" className="hover:underline">GitHub</a>
<a href="mailto:你的邮箱" className="hover:underline">Email</a>
<a href="/cv.pdf" className="hover:underline">CV</a>
```

### 修改位置信息

```tsx
// 找到 locate me 部分
<p className="text-terminal-text">Your City, Country</p>
```

### 修改研究领域

```tsx
// 找到 ls research/ 部分
<ul className="list-disc list-inside space-y-2 text-terminal-text mb-4">
  <li>Machine Learning</li>
  <li>Computer Vision</li>
  <li>Natural Language Processing</li>
</ul>
```

### 修改个人简介

```tsx
// 找到 cat profile.md 部分
<div className="space-y-3 text-terminal-text">
  <p>Hi, I am a PhD student at XXX University.</p>
  <p>My research focuses on...</p>
</div>
```

### 修改导师信息

```tsx
// 找到 cat mentors.md 部分
<li><a href="导师主页链接" className="text-[var(--link-color)] hover:underline">导师姓名</a></li>
```

---

## 2. 添加新博客文章

需要修改两个文件：`Blog.tsx`（列表）和 `BlogPost.tsx`（详情）

### 步骤 1: 在 Blog.tsx 添加文章条目

**文件**: `src/pages/Blog.tsx`

在 `posts` 数组中添加新条目：

```tsx
const posts: BlogPost[] = [
  // 新文章添加在这里（按日期排序，最新的在前）
  {
    id: 'my-new-post',              // 唯一 ID，用于 URL
    date: 'January 15, 2026',       // 发布日期
    title: 'My New Blog Post',      // 文章标题
    description: 'A brief description of what this post is about...', // 简短描述
    tags: ['tag1', 'tag2', 'tag3'], // 标签
    author: 'Your Name'             // 作者
  },
  // ... 其他文章
]
```

### 步骤 2: 在 BlogPost.tsx 添加文章内容

**文件**: `src/pages/BlogPost.tsx`

在 `blogPosts` 对象中添加对应内容：

```tsx
const blogPosts: Record<string, BlogPostContent> = {
  // 新文章内容
  'my-new-post': {  // 必须与 Blog.tsx 中的 id 一致
    id: 'my-new-post',
    date: 'January 15, 2026',
    title: 'My New Blog Post',
    description: 'A brief description...',
    tags: ['tag1', 'tag2', 'tag3'],
    author: 'Your Name',
    content: [
      '第一段内容...',
      '第二段内容...',
      '第三段内容...'
    ],
    techStack: [  // 可选，如果文章涉及技术栈
      { name: 'React', description: 'For building the UI' },
      { name: 'TypeScript', description: 'For type safety' }
    ]
  },
  // ... 其他文章
}
```

### 文章 URL 格式

添加后可通过以下 URL 访问：
```
/blog/my-new-post
```

---

## 3. 更新 Playground 项目

**文件**: `src/pages/Playground.tsx`

在 `projects` 数组中添加/修改：

```tsx
const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description goes here.',
    buttons: [
      { label: 'Try It', href: 'https://demo-link.com', primary: true },
      { label: 'GitHub', href: 'https://github.com/...', primary: false }
    ]
  },
  // 添加更多项目...
]
```

---

## 4. 更新 Miscellaneous 页面

**文件**: `src/pages/Miscellaneous.tsx`

### 更新生活经历 (Life Path)

```tsx
const lifePath = [
  {
    icon: '🏛️',                              // Emoji 图标
    institution: 'Stanford University',       // 机构名称
    dates: '2025.09 - 2030.06 (Expected)',   // 时间
    degree: 'Ph.D. in Computer Science'      // 学位/职位
  },
  {
    icon: '💻',
    institution: 'Google Research',
    dates: '2024.06 - 2025.08',
    degree: 'Research Intern'
  },
  {
    icon: '🎓',
    institution: 'Peking University',
    dates: '2021.09 - 2025.06',
    degree: 'B.S. in Computer Science'
  }
]
```

### 添加图片（Achievement 部分）

```tsx
// 替换 placeholder
<div className="bg-terminal-hover rounded-lg p-4 flex items-center justify-center h-48">
  <img src="/images/achievement.jpg" alt="Achievement" className="w-full h-full object-cover rounded-lg" />
</div>
<p className="text-[var(--muted-text)] text-sm text-center">获奖照片说明</p>
```

### 修改 Random 部分

```tsx
<div className="mt-6 bg-terminal-bg border border-terminal-border rounded-lg p-6 max-w-md">
  <h2 className="text-2xl font-bold text-terminal-text mb-4">Hobbies</h2>
  <p className="text-terminal-text">Basketball, Swimming, Photography</p>
</div>
```

---

## 5. 添加静态资源

将图片等静态文件放在 `public/` 目录：

```
public/
├── avatar.jpg        # 头像
├── cv.pdf           # 简历
└── images/          # 其他图片
    ├── project1.png
    └── achievement.jpg
```

在代码中引用：
```tsx
<img src="/avatar.jpg" alt="Avatar" />
<a href="/cv.pdf">Download CV</a>
```

---

## 6. 本地预览

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:5173 预览更改
```

---

## 7. 部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

构建产物在 `dist/` 目录，可部署到任何静态托管服务（Vercel, Netlify, GitHub Pages 等）。

---

## 快速检查清单

更新内容前确认：

- [ ] 图片已放入 `public/` 目录
- [ ] 博客 ID 在 `Blog.tsx` 和 `BlogPost.tsx` 中一致
- [ ] 链接格式正确（外部链接用 `https://`）
- [ ] 日期格式统一（如 `January 15, 2026`）
- [ ] 本地预览无报错
