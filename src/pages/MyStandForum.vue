<template>
  <div class="container">
    <Header />
    <section class="mainSection">
      <div class="questionContainer">
        <Input />
        <Question :questions="questions" />
      </div>
      <div>
        <Sidebar :questions="questions" />
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
  data() {
    return {
      questions: [],
    };
  },
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
  justify-content: space-between;
}
.questionContainer {
  width: 100%;
}
</style>