<template>
  <div class="container">
    <section class="profileSection">
      <img
        src="../assets/perfil.png"
        alt="Imagem de perfil"
        class="profilePic"
      />
      <p class="profileName">Lilia</p>
    </section>
    <section class="inputSection">
      <input
        class="inputContainer"
        type="text"
        placeholder="procure aqui ..."
      />
      <button class="iconSearch">
        <img src="../assets/icon-search.png" alt="Ícone de pesquisa" />
      </button>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  max-height: 84px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #292730;
}
.profileSection {
  display: flex;
  align-items: center;
}
.profileName {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
.profilePic {
  margin: 16px 0 18px 32px;
}
.inputSection {
  display: flex;
  margin: 17px 44px 17px 0;
}
.inputContainer {
  width: 363px;
  height: 50px;
  border-radius: 4px;
  background-color: #191622;
  border: none;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(255, 121, 198, 0.25);
}
.inputContainer::placeholder {
  font-size: 14px;
  font-weight: 500;
  color: #292730;
}
.iconSearch {
  color: #ff79c6;
  width: 50px;
  background-color: transparent;
  border: none;
  margin-left: -60px;
}
</style>