<template>
  <div class="container">
    <Header />
    <Input />
  </div>
</template>
<script>
import Header from "../components/MyHeader.vue";
import Input from "../components/MyInput.vue";
export default {
  components: {
    Header,
    Input,
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  background-color: #13111b;
}
</style>