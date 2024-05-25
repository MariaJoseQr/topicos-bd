<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link>
      <router-link to="/catalog">Catálogo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  padding: 1em;
}
nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #42b983;
}
</style>
