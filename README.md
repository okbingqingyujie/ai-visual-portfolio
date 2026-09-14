# 卫婕 · AI 产品经理 · 个人作品集

这是可运行、可本地预览、可继续编辑的静态网站。无需安装第三方依赖；`dist/` 是完整的发布目录。

在线访问：[卫婕的个人作品集](https://ai-visual-portfolio-zyx.pimsdofearmoli.chatgpt.site)

## 打开方式

直接用浏览器打开 `dist/index.html`，点击「进入作品集」即可访问二级页面。

也可以在此目录运行 `npm run dev`（需要 Node.js 18+），打开终端显示的 `http://127.0.0.1:4173/`。若端口被占用，可用 `PORT=4174 npm run dev` 指定其他端口。

## 文件

- `dist/index.html`：视觉入口
- `dist/portfolio.html`：完整作品集
- `dist/content.js`：可替换个人资料与作品详情
- `dist/styles.css`：响应式样式
- `dist/entrance-effect.js`：入口动效的独立接入点
- `dist/portfolio.js`：菜单、资料绑定、项目对话框与联系交互
- `设计与内容规范.md`：页面结构、PC / 移动端规范和后续替换说明

本版未收到用户附件。入口动效为临时实现，3 张图像为本次生成的概念示例；未虚构客户、经历与项目成果。姓名、职业、邮箱与微信已根据用户提供的信息填入，邮箱链接与微信复制已启用。

作品详情、图片与卡片标题统一从 `content.js` 读取。HTML 中还保留了对应的静态文案，便于未开启 JavaScript 时阅读。替换真实案例时也请同步更新示例说明。图片全部随项目保存，本地预览无需外部图床或在线字体。
