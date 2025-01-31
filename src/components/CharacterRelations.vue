<script setup>
import { ref } from 'vue';
import { useCharacterStore } from '@/stores/characters';
import Dialog from '@/components/Dialog.vue';

const characterStore = useCharacterStore();
const showDialog = ref(false);

function closeDialog() {
  showDialog.value = false;
}

defineProps({
  relationCategory: String,
  relationContent: Array,
})
</script>

<template>
  <section class="relation">
    <p class="relation-category">{{ relationCategory }}</p>
    <section v-for="(relation, i) in relationContent.slice(0, 5)" :key="i">
      <RouterLink v-if="characterStore.characters.find(c => c.id == relation)" class="relation-content"
        :to="{ name: 'character', params: { id: relation } }">{{ characterStore.characters.find(c => c.id == relation).name
        }}</RouterLink>
      <p v-else class="relation-content">{{ relation }}</p>
    </section>
    <section v-if="relationContent.length > 5">
      <button @click="showDialog = true">Zobrazit další</button>
      <Dialog :visible="showDialog" :title="relationCategory" :close="closeDialog" :dialog-content="relationContent" />
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

.relation {
  @include mixins.flex-column;
  width: 95%;
  gap: 5px;

  .relation-category {
    @include mixins.decorated-text;
    width: 100%;
    padding: 5px;
    font-size: 1.2em;
  }

  .relation-content {
    text-decoration: none;
    color: #0F154E;
    line-height: 20px;
    font-size: 1.05em;
  }
}

button {
  font-family: 'Bitter', sans-serif;
  border: none;
  background: #121a61;
  border-radius: 5px;
  color: white;
  font-size: 0.8em;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
}
</style>