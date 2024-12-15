<script setup>
import { useCharacterStore } from '@/stores/characters';

const characterStore = useCharacterStore();

defineProps({
    relationCategory: String,
    relationContent: Array,
})
</script>

<template>
  <main>
    <section class="relation">
      <p class="relation-category">{{ relationCategory }}</p>
      <section v-for="(relation, i) in relationContent" :key="i">
        <RouterLink v-if="characterStore.characters.find(c => c.id == relation)" class="relation-content" :to="{name: 'character', params: {id : relation}}">{{ characterStore.characters.find(c => c.id == relation).name }}</RouterLink>
        <p v-if="!characterStore.characters.find(c => c.id == relation)" class="relation-content">{{ relation }}</p>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

    .relation{
      @include mixins.flex-column;
      width: 95%;
      gap: 5px;

      .relation-category{
        @include mixins.decorated-text;
        width: 100%;
        padding: 5px;
        font-size: 1.2em;
      }

      .relation-content{
        text-decoration: none;
        color: #0F154E;
        line-height: 20px;
        font-size: 1.05em;
      }
    }
</style>