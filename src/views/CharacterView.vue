<script setup>
import { useCharacterStore } from '@/stores/characters';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';

const characterStore = useCharacterStore();
const route = useRoute();
const character = ref(characterStore.characters.find(c => c.id == route.params.id));

watch(() => route.params, () => {
  character.value = characterStore.characters.find(c => c.id == route.params.id);
})
</script>

<template>
  <main>
    <article class="info-card">
      <h3>{{ character.name }}</h3>
      <p>effewdfedwfedw</p>
    </article>
  </main>
</template>