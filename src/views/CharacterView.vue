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
      <section v-if="character.symbols" class="relation">
        <p class="relation-category">Symboly</p>
        <p class="relation-content" v-for="(symbol, i) in character.symbols" :key="i">{{ symbol }}</p>
      </section>
      <section v-if="character.father" class="relation">
        <p class="relation-category">Otec</p>
        <RouterLink class="relation-content" :to="{name: 'character', params: {id : character.father}}">{{ characterStore.characters.find(f => f.id == character.father).name }}</RouterLink>
      </section>
      <section v-if="character.mother" class="relation">
        <p class="relation-category">Matka</p>
        <RouterLink class="relation-content" :to="{name: 'character', params: {id : character.mother}}">{{ characterStore.characters.find(m => m.id == character.mother).name }}</RouterLink>
      </section>
      <section v-if="character.children" class="relation">
        <p class="relation-category">Děti</p>
        <RouterLink class="relation-content" v-for="(child, i) in character.children" :key="i" :to="{name: 'character', params: {id : child}}">{{ characterStore.characters.find(c => c.id == child).name }}</RouterLink>
      </section>
      <section v-if="character.home" class="relation">
        <p class="relation-category">Domov</p>
        <p class="relation-content">{{ character.home }}</p>
      </section>
      <section v-if="character.partners" class="relation">
        <p class="relation-category">Partneři</p>
        <RouterLink class="relation-content" v-for="(partner, i) in character.partners" :key="i" :to="{name: 'character', params: {id : partner}}">{{ characterStore.characters.find(p => p.id == partner).name }}</RouterLink>
      </section>
      <section v-if="character.siblings" class="relation">
        <p class="relation-category">Sourozenci</p>
        <RouterLink class="relation-content" v-for="(sibling, i) in character.siblings" :key="i" :to="{name: 'character', params: {id : sibling}}">{{ characterStore.characters.find(s => s.id == sibling).name }}</RouterLink>
      </section>
    </article>
  </main>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

  main{
    @include mixins.flex-row;
    width: 100%;
    gap: 5%;
    align-items: start;
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
    margin: 10px;
    gap: 25px;

    img{
      height: 250px;
      border-radius: 5px;
    }

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
  }
</style>