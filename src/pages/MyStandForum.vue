<template>
  <div class="container">
    <Header />
    <section class="mainSection">
      <div>
        <Input />
        <Question />
      </div>
      <div>
        <Sidebar />
      </div>
    </section>
  </div>
</template>
<script>
import Header from "../components/MyHeader.vue";
import Input from "../components/MyInput.vue";
import Question from "../components/MyQuestion.vue";
import Sidebar from "../components/MySidebar.vue";
export default {
  components: {
    Header,
    Input,
    Question,
    Sidebar,
  },
};
</script>
<style scoped>
.mainSection {
  display: flex;
}
</style>