<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onUpdated, ref } from 'vue';
import { useCategoryStore } from './stores/categories';

const active = ref(false);
const categoryStore = useCategoryStore();
</script>

<template>
  <header>
    <section>
      <img class="logo" src="./assets/logo.svg" alt="">
    </section>
    <nav>
      <section class="homepage-link">
        <RouterLink to="/">Řecká mytologie</RouterLink>
      </section>
      <section class="menu-btn">
        <button @click="active = !active"><i class="fa-solid" :class="{ 'fa-xmark': active, 'fa-bars': !active }"></i></button>
      </section>
    </nav>
  </header>
  <article class="menu" :class="{ 'active': active }">
    <RouterLink @click="active = !active" class="link" to="/">Mytologie</RouterLink>
    <RouterLink @click="active = !active" v-for="(category, i) in categoryStore.categories" :key="i" class="link" :to="{name: 'category', params: {id: category.id}}">{{ category.name }}</RouterLink>
    <RouterLink @click="active = !active" class="link" to="/about">O stránce</RouterLink>
  </article>

  <RouterView />
</template>

<style scoped lang="scss">
@use './mixins.scss' as mixins;

header {
  @include mixins.flex-row;
  justify-content: start;
  width: 100%;
  background-color: #080C37;
  background-image: url(./assets/feather-texture.png);

  .logo {
    display: block;
    width: 60px;
  }

  >section{
    @include mixins.flex-row;
    padding: 10px;
    justify-content: start;
  }

  nav{
    @include mixins.flex-row;
    width: calc(100% - 80px);
    justify-content: start;
    font-weight: 600;
    gap: 20px;
    padding: 10px;

    .homepage-link{
      a{
        width: 100%;
        text-decoration: none;
        color: white;
        font-size: 2.5em;
      }

      @include mixins.responsive(smartphone-portrait){
        display: none;
      }

      @include mixins.responsive(smartphone-landscape){
        display: none;
      }
    }

    section{
      width: 50%;

      @include mixins.responsive(smartphone-portrait){
        width: 100%;
      }

      @include mixins.responsive(smartphone-landscape){
        width: 100%;
      }
    }

    .menu-btn{
      @include mixins.flex-row;
      justify-content: end;
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
}

.menu{
  display: none;
  width: 25%;
  padding: 10px;
  position: absolute;
  right: 0;
  background-color: #FFF5E0;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
  z-index: 1;

  @include mixins.responsive(smartphone-portrait){
    width: calc(100% - 20px);
  }

  @include mixins.responsive(smartphone-landscape){
    width: 60%;
  }

  @include mixins.responsive(tablet){
    width: 40%;
  }
}

.link{
  @include mixins.decorated-text;
  width: 95%;
  padding: 10px;
  font-size: 1.8em;
}

.active{
  @include mixins.flex-column;
  gap: 10px;
}
</style>
