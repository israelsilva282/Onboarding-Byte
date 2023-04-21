<template>
  <div>
    <h1>Duvidas e Perguntas</h1>
    <div>
      <div class="questionSection" v-if="questions.length == 0">
        <h2>Nenhuma pergunta disponível ...T_T</h2>
      </div>
      <div
        class="cardSection"
        v-else
        v-for="question in questions"
        :key="question.question"
      >
        <h2>{{ question.question }}</h2>
        <div class="iconsContainer">
          <button><img src="../assets/icon-heart.png" alt="" /></button>
          <button><img src="../assets/icon-thumbs-up.png" alt="" /></button>
          <button><img src="../assets/icon-thumbs-down.png" alt="" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questions: [],
  },
};
</script>
<style scoped>
h1 {
  margin-left: 32px;
  font-size: 22px;
  font-weight: 700;
  color: #ff79c6;
  margin-bottom: 18px;
}
.questionSection {
  height: 67.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
}

h2 {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.cardSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 77px;
  max-width: 95%;
  border-radius: 4px;
  background: #191622;
  padding: 22px 0 24px 25px;
  margin: auto;
  margin-bottom: 18px;
}

.iconsContainer {
  display: flex;
  background: #292730;
  height: 77px;
}
button {
  color: #ff79c6;
  width: 50px;
  background-color: transparent;
  border: none;
}
</style>