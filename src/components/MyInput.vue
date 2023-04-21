<template>
  <div>
    <div class="container">
      <input
        type="text"
        class="mainInput"
        placeholder="escreva aqui sua duvida ou problema..."
      />
      <button class="iconSearch">
        <img src="../assets/icon-send.png" alt="Ícone de pesquisa" />
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 79px;
}
.mainInput {
  height: 77px;
  width: 95%;
  max-width: 95%;
  border-radius: 4px;
  background: #191622;
  border: none;
  padding: 30px 0 30px 25px;
}

.mainInput::placeholder {
  font-weight: 500;
  font-size: 18px;
  color: #292730;
}
.iconSearch {
  color: #ff79c6;
  width: 50px;
  height: 77px;
  background-color: transparent;
  border: none;
  margin-left: -65px;
}
</style>