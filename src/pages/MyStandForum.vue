<template>
  <div class="container">
    <Header />
  </div>
</template>
<script>
import Header from "../components/MyHeader.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  background-color: #13111b;
}
</style>