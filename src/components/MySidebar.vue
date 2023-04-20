<template>
  <div class="container">
    <h1>Recentes</h1>
    <section class="questionSection">
      <h2>Nenhuma pergunta disponível ...T_T</h2>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  width: 410px;
  background: linear-gradient(0deg, #191622, #191622),
    linear-gradient(0deg, #292730, #292730);
  border-left: 1px solid #292730;
}
h1 {
  padding-left: 12px;
  padding-top: 16px;
  font-size: 22px;
  font-weight: 700;
  color: #ff79c6;
}
.questionSection {
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
}

h2 {
  font-size: 18px;
  font-weight: 700;
}
</style>