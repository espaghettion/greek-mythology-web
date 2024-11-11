<script setup>
import { useCategoryStore } from '@/stores/categories';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';

const categoryStore = useCategoryStore();
const route = useRoute();
const category = ref(categoryStore.categories.find(c => c.id == route.params.id));

watch(() => route.params, () => {
  console.log(route.params.id);
  category.value = categoryStore.categories.find(c => c.id == route.params.id);
})
</script>

<template>
  <main>
    <h1>{{ category.name }}</h1>
    <RouterLink v-for="(character, i) in category.characters" :key="i" :to="{name: 'character', params: {id : character.id}}">{{ character.name }}</RouterLink>
  </main>
</template>