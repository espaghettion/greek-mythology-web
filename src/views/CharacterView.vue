<script setup>
import { useCharacterStore } from '@/stores/characters';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';
import InfoCard from '@/components/InfoCard.vue';

const characterStore = useCharacterStore();
const route = useRoute();
const character = ref(characterStore.characters.find(c => c.id == route.params.id));

watch(() => route.params, () => {
  character.value = characterStore.characters.find(c => c.id == route.params.id);
})
</script>

<template>
  <main>
    <article class="info">
      <InfoCard :info-category="character.name" info-content="herro?" />
      <InfoCard info-category="Výskyty" info-content="herro?" />
      <InfoCard info-category="Zajímavosti" info-content="herro?" />
    </article>
    <article class="relations">
      <section>
        <img :src="character.image" :alt="character.name">
      </section>
      <section>awoj</section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
  @use '../mixins.scss' as mixins;

  main{
    @include mixins.flex-row;
    width: 100%;
    gap: 5%;
  }

  .info{
    @include mixins.flex-column;
    width: 40%;
  }

  .relations{
    @include mixins.flex-column;
    padding: 30px;
    background-color: #FDF6E8;
    border-radius: 5px;

    img{
      height: 250px;
      border-radius: 5px;
    }
  }
</style>