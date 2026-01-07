# 使用示例

## 添加头像图片

### 步骤 1: 将图片放入 public 文件夹
```
public/
└── avatar.jpg  (你的头像图片)
```

### 步骤 2: 修改 `src/pages/Home.tsx`

找到这段代码（大约第 33-36 行）：
```tsx
<div className={`w-24 h-24 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center`}>
  <span className="text-4xl">👤</span>
</div>
```

替换为：
```tsx
<div className={`w-24 h-24 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center overflow-hidden`}>
  <img 
    src="/avatar.jpg" 
    alt="Your Name" 
    className="w-full h-full object-cover"
  />
</div>
```

## 添加 CV 文件

### 步骤 1: 将 PDF 放入 public 文件夹
```
public/
└── cv.pdf  (你的简历 PDF)
```

### 步骤 2: 修改 `src/pages/Home.tsx`

找到 CV 链接（大约第 52 行）：
```tsx
<a href="#" className="hover:underline">CV</a>
```

替换为：
```tsx
<a href="/cv.pdf" target="_blank" className="hover:underline">CV</a>
```

## 添加项目图片到 Playground

### 步骤 1: 将图片放入 public/images 文件夹
```
public/images/
└── orbito-screenshot.png
```

### 步骤 2: 修改 `src/pages/Playground.tsx`

在项目对象中添加 image 字段：
```tsx
const projects: Project[] = [
  {
    title: 'Orbito AI',
    description: 'Challenge an AI agent...',
    image: '/images/orbito-screenshot.png',  // 添加这一行
    buttons: [...]
  }
]
```

然后在渲染部分添加图片显示：
```tsx
{project.image && (
  <img 
    src={project.image} 
    alt={project.title}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
)}
<h2 className="text-2xl font-bold...">{project.title}</h2>
```

## 添加杂项页面的图片

### 步骤 1: 将图片放入 public/images 文件夹
```
public/images/
├── kilimanjaro-peak.jpg
└── kilimanjaro-reading.jpg
```

### 步骤 2: 修改 `src/pages/Miscellaneous.tsx`

找到图片占位符并替换：
```tsx
// 替换前
<div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center h-48">
  <span className="text-gray-500">Image placeholder</span>
</div>

// 替换后
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

## 图片优化建议

1. **头像**: 建议尺寸 200x200px 或更大，正方形
2. **项目截图**: 建议宽度 800-1200px
3. **格式**: 使用 JPG 或 WebP 格式以减小文件大小
4. **压缩**: 使用工具如 TinyPNG 压缩图片

## 使用外部图片链接

如果图片托管在其他地方（如 CDN），可以直接使用 URL：

```tsx
<img src="https://your-cdn.com/images/avatar.jpg" alt="Profile" />
```

