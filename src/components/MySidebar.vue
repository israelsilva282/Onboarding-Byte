<template>
  <div class="container">
    <h1>Recentes</h1>
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
          <span>{{ question.nome }}</span>
          <div>
            <button>
              <img src="../assets/icon-heart.png" alt="" />
            </button>
            <button><img src="../assets/icon-thumbs-up.png" alt="" /></button>
            <button><img src="../assets/icon-thumbs-down.png" alt="" /></button>
          </div>
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
.container {
  width: 410px;
  background: linear-gradient(0deg, #191622, #191622),
    linear-gradient(0deg, #292730, #292730);
  border-left: 1px solid #292730;
  height: 91.6vh;
}
h1 {
  padding-left: 12px;
  padding-top: 16px;
  font-size: 22px;
  font-weight: 700;
  color: #ff79c6;
  margin-bottom: 16px;
}
.questionSection {
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
}

h2 {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
.cardSection {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 95%;
  border-radius: 4px;
  background: #13111b;
  margin: auto;
  margin-bottom: 18px;
}
.cardSection > h2 {
  margin: 19px 18px 30px 23px;
}
.iconsContainer {
  display: flex;
  background: #292730;
  height: 62px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
span {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ff79c6;
  margin-left: 18px;
}
button {
  color: #ff79c6;
  width: 50px;
  background-color: transparent;
  border: none;
}
</style>