<script setup>
import { useCategoryStore } from '@/stores/categories';
import { ref } from 'vue';

const categoryStore = useCategoryStore();
const selectedCard = ref(0);

function previousCard(){
  selectedCard.value--;
  if (selectedCard.value < 0) {selectedCard.value = categoryStore.categories.length - 1}
}

function nextCard(){
  selectedCard.value++;
  if (selectedCard.value > categoryStore.categories.length - 1) {selectedCard.value = 0}
}
</script>

<template>
  <main>
    <h1>Co je to řecká mytologie?</h1>
    <p>Lorem.</p>

    <section class="category-link">
      <button class="previous-btn" @click="previousCard()"><i class="fa-solid fa-chevron-left"></i></button>
      <RouterLink :to="{name: 'category', params: {id: categoryStore.categories[selectedCard].id}}" :style="{ backgroundImage: `${categoryStore.categories[selectedCard].image}` }">{{ categoryStore.categories[selectedCard].name }}</RouterLink>
      <button class="next-btn" @click="nextCard()"><i class="fa-solid fa-chevron-right"></i></button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

.category-link{
  @include mixins.flex-row;
  width: 100%;
  height: 600px;

  button{
    border: none;
    background: none;
    font-size: 2em;
    color: white;
    height: 600px;
    padding: 20px;

    &:hover{
      cursor: pointer;
    }
  }

  .previous-btn{
    position: absolute;
    left: 0;
  }

  .next-btn{
    position: absolute;
    right: 0;
  }

  a{
    @include mixins.flex-row;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    font-size: 2.5em;
    font-weight: 600;
    background-size: cover;
    background-position: center;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
  }
}
</style>
