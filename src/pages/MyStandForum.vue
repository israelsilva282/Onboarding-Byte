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
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebaseConnection";
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
  methods: {
    async getAllQuestions() {
      // 'questions' collection reference
      const colRef = collection(db, "questions");
      // getting de collection data reference
      const queryRef = query(colRef, orderBy("created", "asc"));
      // adding the data do the array 'questions'
      await getDocs(queryRef).then((snapshot) => {
        snapshot.forEach((doc) => {
          this.questions.push({
            id: doc.id,
            name: doc.data().name,
            question: doc.data().question,
          });
        });
      });
    },
  },

  mounted() {
    this.getAllQuestions();
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