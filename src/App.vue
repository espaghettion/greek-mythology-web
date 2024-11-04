<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const active = ref(false);
</script>

<template>
  <header>
    <section>
      <img class="logo" src="./assets/logo.svg" alt="">
      <p>Řecká mytologie</p>
    </section>
    <nav>
      <button @click="active = !active"><i class="fa-solid fa-bars"></i></button>
    </nav>
  </header>
  <article class="menu" :class="{ 'active': active }">
    <RouterLink class="link" to="/">MYTOLOGIE</RouterLink>
    <RouterLink class="link" to="/">BOHOVÉ</RouterLink>
    <RouterLink class="link" to="/">TITÁNI</RouterLink>
    <RouterLink class="link" to="/">HRDINOVÉ</RouterLink>
    <RouterLink class="link" to="/">NADLIDSKÉ STVOŘENÍ</RouterLink>
    <RouterLink class="link" to="/about">O STRÁNCE</RouterLink>
  </article>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  display: flex;
  width: 100%;
  background-color: #080C37;
  background-image: url(./assets/feather-texture.png);
}

.logo {
  display: block;
  width: 60px;
}

section{
  display: flex;
  align-items: center;
  width: 40%;
  color: white;
  font-size: 2.5em;
  font-weight: 600;
  padding: 10px;
  gap: 20px;
}

nav {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 60%;
  padding: 10px;
}

button{
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 3px solid #ACAFCC;
  border-radius: 5px;
  color: #ACAFCC;
  font-size: 1.3em;

  :hover{
    cursor: pointer;
  }
}

.menu{
  display: none;
  width: 220px;
  padding: 10px;
  position: absolute;
  right: 0px;
  background-color: #FFF5E0;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 600;
}

.link{
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  color: white;
  background: linear-gradient(0deg, rgba(14,26,143,1) 0%, rgba(8,12,49,1) 100%);
}

.active{
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
</style>
