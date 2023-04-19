<template>
  <div class="container">
    <MyLogo />
  </div>
</template>
<script>
import MyLogo from "../components/MyLogo";
export default {
  components: {
    MyLogo,
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #13111b;
}
</style>