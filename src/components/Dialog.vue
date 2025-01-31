<script setup>
import { useCharacterStore } from '@/stores/characters';

const characterStore = useCharacterStore();

defineProps({
  visible: Boolean,
  title: String,
  close: Function,
  dialogContent: Array,
});
</script>

<template>
  <section v-if="visible" class="dialog-overlay">
    <section class="info-card" v-if="dialogContent && title">
      <h3>{{ title }}</h3>
      <section class="relations-wrapper">
        <section class="relation" v-for="(relation, i) in dialogContent" :key="i">
          <RouterLink v-if="characterStore.characters.find(c => c.id == relation)" class="relation-content"
            :to="{ name: 'character', params: { id: relation } }">{{ characterStore.characters.find(c => c.id ==
            relation).name }}</RouterLink>
          <p v-else class="relation-content">{{ relation }}</p>
        </section>
      </section>
    </section>
    <section class="dialog-background" @click="close"></section>
    <button @click="close">Zavřít</button>
  </section>
</template>

<style scoped lang="scss">
@use '../mixins.scss' as mixins;

.dialog-overlay {
  @include mixins.flex-column;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  z-index: 2;

  .dialog-background {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 3;
  }
}

.info-card {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50%;
  font-size: 1.2em;
  z-index: 4;

  @include mixins.responsive(smartphone-portrait) {
    width: 70%;
  }

  @include mixins.responsive(smartphone-landscape) {
    width: 50%;
  }

  @include mixins.responsive(tablet) {
    width: 40%;
  }

  .relations-wrapper {
    overflow-y: scroll;
    height: 80%;
    flex-grow: 1;

    .relation {
      @include mixins.flex-column;
      padding: 5px;


      p {
        padding: 0;
      }
    }
  }
}

.relation-content {
  text-decoration: none;
  color: #0F154E;
  line-height: 20px;
  font-size: 1.05em;
}

button {
  font-family: 'Bitter', sans-serif;
  border: none;
  background: linear-gradient(0deg, rgba(14, 26, 143, 1) 0%, rgba(8, 12, 49, 1) 100%);
  border-radius: 5px;
  color: white;
  font-size: 1.1em;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #0F154E;
}
</style>