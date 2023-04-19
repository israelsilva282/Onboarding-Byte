<template>
  <div class="container">
    <Header />
    <Input />
    <Question />
  </div>
</template>
<script>
import Header from "../components/MyHeader.vue";
import Input from "../components/MyInput.vue";
import Question from "../components/MyQuestion.vue";
export default {
  components: {
    Header,
    Input,
    Question,
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  background-color: #13111b;
}
</style>