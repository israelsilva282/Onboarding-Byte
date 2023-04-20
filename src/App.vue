<template>
  <div>
    <main>
      <router-view> </router-view>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  min-height: 100vh;
  background-color: #13111b;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>