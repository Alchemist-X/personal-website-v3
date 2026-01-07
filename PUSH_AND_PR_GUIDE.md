# 推送代码和创建 PR 指南

## 🚀 推送代码到 GitHub

由于网络连接问题，请按照以下步骤手动推送：

### 方法 1: 使用 HTTPS（需要 Personal Access Token）

1. **确保你有 GitHub Personal Access Token**：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 选择权限：`repo` (完整仓库权限)
   - 复制生成的 token

2. **推送代码**：
```bash
git push origin main
```
当提示输入密码时，使用你的 Personal Access Token（不是 GitHub 密码）

### 方法 2: 使用 SSH（如果已配置 SSH 密钥）

1. **切换到 SSH URL**：
```bash
git remote set-url origin git@github.com:Alchemist-X/personal-website-v3.git
```

2. **推送代码**：
```bash
git push origin main
```

### 方法 3: 使用 GitHub CLI（如果已安装）

```bash
gh repo sync Alchemist-X/personal-website-v3
```

### 方法 4: 使用 GitHub Desktop

1. 打开 GitHub Desktop
2. 选择这个仓库
3. 点击 "Push origin" 按钮

## 📝 创建 Pull Request

推送成功后，按照以下步骤创建 PR：

### 步骤 1: 访问 GitHub 仓库
访问：https://github.com/Alchemist-X/personal-website-v3

### 步骤 2: 创建 Pull Request
1. 点击 "Compare & pull request" 按钮（如果出现）
   或
   点击 "Pull requests" 标签页 → "New pull request"

2. **选择分支**：
   - Base: `main`
   - Compare: `main`

3. **填写 PR 信息**：

**Title（标题）**：
```
feat: Personal website with CLI aesthetic, theme toggle, and blog system
```

**Description（描述）**：
复制 `PR_DESCRIPTION.md` 文件的全部内容

### 步骤 3: 提交 PR
点击 "Create pull request"

## 📋 PR 标题和描述模板

### PR Title
```
feat: Personal website with CLI aesthetic, theme toggle, and blog system
```

### PR Description
（使用 `PR_DESCRIPTION.md` 的内容）

## 🔍 检查推送状态

检查本地和远程的差异：
```bash
git log origin/main..HEAD
```

查看未推送的 commits：
```bash
git status
```

## ⚠️ 如果推送失败

如果遇到认证问题：

1. **检查 Git 凭据**：
```bash
git config --global credential.helper
```

2. **清除旧的凭据**（macOS）：
```bash
git credential-osxkeychain erase
host=github.com
protocol=https
```

3. **重新推送**：
```bash
git push origin main
```

## 📦 当前待推送的 Commits

1. `0299fb5` - Enhance blog page with tags, create blog post detail page, and add routing
2. `6dd5b4c` - Add comprehensive README and file mounting guide

## ✅ 推送成功后的检查清单

- [ ] 代码已推送到 GitHub
- [ ] 所有文件都在远程仓库中
- [ ] PR 已创建
- [ ] PR 描述已填写完整
- [ ] 标签已添加（如：`enhancement`, `documentation`, `feature`）

