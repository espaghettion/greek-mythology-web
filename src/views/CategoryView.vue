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
    gap: 10px;

    p{
      line-height: 30px;
      font-size: 1.2em;
    }
  }
</style>