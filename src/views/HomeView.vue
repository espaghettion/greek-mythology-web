<script setup>
import { useCategoryStore } from '@/stores/categories';
import { ref } from 'vue';

const categoryStore = useCategoryStore();
const selectedCard = ref(0);

function previousCard() {
  selectedCard.value--;
  if (selectedCard.value < 0) { selectedCard.value = categoryStore.categories.length - 1 }
}

function nextCard() {
  selectedCard.value++;
  if (selectedCard.value > categoryStore.categories.length - 1) { selectedCard.value = 0 }
}
</script>

<template>
  <main>
    <article class="info">
      <h1>Co je to řecká mytologie?</h1>
      <p>Do řecké mytologie patří všechny příběhy a mýty a bozích, hrdinech a bytostech. Byla také částí náboženství
        starověkého Řecka, proto bohové v těchto příbězích figurují tak silně. </p>
    </article>

    <section class="category-link">
      <button class="previous-btn" @click="previousCard()"><i class="fa-solid fa-chevron-left"></i></button>
      <RouterLink :to="{ name: 'category', params: { id: categoryStore.categories[selectedCard].id } }"
        :style="{ backgroundImage: `url(/greek-mythology-web/${categoryStore.categories[selectedCard].image})` }">
        {{ categoryStore.categories[selectedCard].name }}
      </RouterLink>
      <button class="next-btn" @click="nextCard()"><i class="fa-solid fa-chevron-right"></i></button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

body {
  height: 100%;
  min-height: 100vh;

  #app {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
}

.info {
  @include mixins.flex-column;
  width: 50%;
  text-align: center;
  gap: 5px;

  @include mixins.responsive(smartphone-portrait) {
    width: 90%;
  }

  @include mixins.responsive(smartphone-landscape) {
    width: 75%;
  }

  @include mixins.responsive(smartphone-tablet) {
    width: 65%;
  }

  @include mixins.responsive(laptop) {
    width: 60%;
  }
}

.category-link {
  @include mixins.flex-row;
  width: 100%;
  height: 600px;
  flex-grow: 1;

  button {
    border: none;
    background: none;
    font-size: 2em;
    color: white;
    height: 600px;
    padding: 20px;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }

  .previous-btn {
    position: absolute;
    left: 0;
  }

  .next-btn {
    position: absolute;
    right: 0;
  }

  a {
    @include mixins.flex-row;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    font-size: 3em;
    font-weight: 600;
    background-size: cover;
    background-position: center;
    -webkit-mask-image: (to top, (rgba(0, 0, 0, 1)) 50%, (rgba(0, 0, 0, 1)) 100%);
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    text-align: center;
    background-position: center 20%;
  }
}

h1 {
  margin-top: 20px;

  @include mixins.responsive(smartphone-portrait) {
    font-size: 2em;
  }
}
</style>
