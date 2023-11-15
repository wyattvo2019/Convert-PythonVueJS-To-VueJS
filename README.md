# Convert-PythonVueJS-To-VueJS

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# Convert-PythonVueJS-To-VueJS

## Create AppHeaer
```sh
touch src/components/AppHeader.vue
```
## Write content for AppHeader
```
<!-- # src/components/AppHeader.vue -->
<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.svg" height="50">
    <p>My Vue.js Application</p>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: .5rem 1rem;
  p {
    margin-left: 1rem;
  }
}
nav {
  margin-left: auto;
  ul {
    list-style: none;
  }
  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }
}
</style>
```
## Update App.vue to use AppHeader
```
#src/App.vue
import AppHeader from '@/components/AppHeader.vue'
<template>
....
  <app-header />
....
</template>
```
## Create AppFooter
```sh
touch src/components/AppFooter.vue
```

