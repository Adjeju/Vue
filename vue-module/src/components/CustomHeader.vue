<template>
  <div class="menu">
    <div class="test">
      <router-link class="menu-links" to="/">Головна</router-link>
      <router-link class="menu-links" to="/list">Список продуктів</router-link>
      <router-link class="menu-links" to="/form">Форма додавання</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader',
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #a8dadc;
  border-radius: 0 0 20px 20px;
}
.menu-links {
  margin: 0 75px;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}
.menu-links:hover {
  color: #1d3557;
}
.test {
  padding: 15px;
}
</style>
