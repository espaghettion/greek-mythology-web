<script setup>
import { useCategoryStore } from '@/stores/categories';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';
import CharacterLink from '@/components/CharacterLink.vue';

const categoryStore = useCategoryStore();
const route = useRoute();
const category = ref(categoryStore.categories.find(c => c.id == route.params.id));

watch(() => route.params, () => {
  category.value = categoryStore.categories.find(c => c.id == route.params.id);
})
</script>

<template>
  <main>
    <article class="info">
      <h2>{{ category.name }}</h2>
      <p>{{ category.description }}</p>
    </article>
    <CharacterLink></CharacterLink>
  </main>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

  main{
    gap: 30px;
  }

  .info{
    @include mixins.flex-column;
    width: 50%;
    text-align: center;

    @include mixins.responsive(smartphone-portrait){
      width: 90%;
    }

    @include mixins.responsive(smartphone-landscape){
      width: 80%;
    }

    @include mixins.responsive(tablet){
      width: 70%;
    }

    p{
      line-height: 30px;
      font-size: 1.2em;

      @include mixins.responsive(smartphone-portrait){
        font-size: 1em;
        line-height: 25px;
      }

      @include mixins.responsive(smartphone-landscape){
        font-size: 1.1em;
        line-height: 27.5px;
      }
    }
  }
</style>