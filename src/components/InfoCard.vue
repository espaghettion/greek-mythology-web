<script setup>
import { useCharacterStore } from '@/stores/characters';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';

/*const characterStore = useCharacterStore();
const route = useRoute();
const character = ref(characterStore.characters.find(c => c.id == route.params.id));

watch(() => route.params, () => {
  character.value = characterStore.characters.find(c => c.id == route.params.id);
})*/

defineProps({
    infoCategory: String,
    infoContent: String,
})
</script>

<template>
  <main>
    <article class="info-card">
      <h3>{{ infoCategory }}</h3>
      <p>{{ infoContent }}</p>
    </article>
  </main>
</template>

<style lang="scss" scoped>
    h3, p{
        padding: 10px;
    }
</style>