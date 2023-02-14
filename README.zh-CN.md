<p align='center' style="margin-top:80px">
  <img src='/src/assets/logo.svg' alt='Vitesse - Opinionated Vite Starter Template' width='50'/>
</p>

<h6 align='center'>
<a href="https://marvelous-sunflower-cb8d70.netlify.app/">在线 Demo</a>
</h6>

<br>

<p align='center'>
<a href="https://github.com/yangjiakai/vuetify3-base/blob/master/README.md">English</a> | <b>简体中文</b>| <a href="https://github.com/yangjiakai/vuetify3-base/blob/master/README.jp.md">日本語</a>
</p>

## 序文

这是一个使用 vuetify3 + 组合式 api,整合了常用功能和插件的开发模板,之后的 vuetify3 app 都可以基于这个模板进行开发

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core)
- ⚡️ [Vite](https://github.com/vitejs/vite)
- ⚡️ UI Framework [Vuetify 3](https://next.vuetifyjs.com/en/)
- ⚡️ TypeScript
- 📦 组件自动导入
- 🍍 通过 [Pinia](https://pinia.vuejs.org/)进行状态管理
- 🍍 pinia-plugin-persist 状态持久化
- ⚡️ 使用新的 `<script setup>` 语法
- ⚡️ 使用任意的图标集 [Iconify](https://icon-sets.iconify.design/)
- ⚡️ 零配置部署在 Netlify
- ⚡️ i18n 多语言切换
- ⚡️ dark light 模式切换
- ⚡️ 主题色切换
- ⚡️ vue3-perfect-scrollbar 滚动条美化
- ☁️ 响应式多平台自适应

<br>
## Pre-packed

### UI 框架

- [Vuetify3](https://next.vuetifyjs.com/en/) - Vuetify 是一个不要求设计能力的 Vue 界面组件框架，自带了许多自行设计实现的 Vue 组件。

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集 [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

## 现在可以试试!

```
https://github.com/yangjiakai/vuetify3-base.git

cd vuetify3-base

npm install

npm run dev

```

## api 请求

> 关于 API 请求，我的示例使用了 unsplash 的 api
>
> 需要先前往 unsplash 开发者平台，申请自己的**ACCESS_KEY**
>
> https://unsplash.com/oauth/applications
>
> 然后在本地新建`.env.local`文件
>
> 添加`VITE_UNSPLASH_ACCESS_KEY = 你自己的Access Key`
