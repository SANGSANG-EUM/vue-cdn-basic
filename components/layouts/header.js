const HeaderComponent = {
components: {
  'navigation': Navigation
},
template: `
<header id="header" v-if="$route.meta.showHeader">
  <h1 class="logo">
    <router-link to="/">
      <img src="/assets/img/logo.png" alt="">
    </router-link>
  </h1>
  <navigation></navigation>
</header>
`
};