<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onUpdated, ref } from 'vue';
import { useCategoryStore } from './stores/categories';

const active = ref(false);
const categoryStore = useCategoryStore();

onUpdated(() => {
  const categoryStore = useCategoryStore();
})

</script>

<template>
  <header>
    <section>
      <img class="logo" src="./assets/logo.svg" alt="">
      <RouterLink to="/">Řecká mytologie</RouterLink>
    </section>
    <nav>
      <button @click="active = !active"><i class="fa-solid" :class="{ 'fa-xmark': active, 'fa-bars': !active }"></i></button>
    </nav>
  </header>
  <article class="menu" :class="{ 'active': active }">
    <RouterLink class="link" to="/">Mytologie</RouterLink>
    <RouterLink v-for="(category, i) in categoryStore.categories" :key="i" class="link" :to="{name: 'category', params: {id: category.id}}">{{ category.name }}</RouterLink>
    <RouterLink class="link" to="/about">O stránce</RouterLink>
  </article>

  <RouterView />
</template>

<style scoped lang="scss">
@use './mixins.scss' as mixins;

header {
  @include mixins.flex-row;
  width: 100%;
  background-color: #080C37;
  background-image: url(./assets/feather-texture.png);
}

.logo {
  display: block;
  width: 60px;
}

nav, section {
  @include mixins.flex-row;
  justify-content: end;
  align-items: center;
  width: 50%;
  padding: 10px;
}

section{
  align-items: center;
  justify-content: start;
  font-size: 2.5em;
  font-weight: 600;
  gap: 20px;

  a{
    text-decoration: none;
    color: white;
  }
}

button{
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 3px solid #ACAFCC;
  border-radius: 5px;
  color: #ACAFCC;
  font-size: 1.3em;

  &:hover{
    cursor: pointer;
  }
}

.menu{
  display: none;
  width: 25%;
  padding: 10px;
  position: absolute;
  right: 0px;
  background-color: #FFF5E0;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
}

.link{
  text-decoration: none;
  padding: 10px;
  font-size: 1.8em;
  border-radius: 5px;
  width: 95%;
  color: white;
  background: linear-gradient(0deg, rgba(14,26,143,1) 0%, rgba(8,12,49,1) 100%);
  transition: 0.3s all ease;

  &:hover{
    background: linear-gradient(0deg, rgba(8,12,49,1) 0%, rgba(14,26,143,1) 100%);
  }
}

.active{
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
</style>
