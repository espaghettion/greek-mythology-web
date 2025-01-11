<script setup>
import { useCharacterStore } from '@/stores/characters';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import CharacterRelations from '@/components/CharacterRelations.vue';
import Dialog from '@/components/Dialog.vue';

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
      <InfoCard v-if="character.name" :info-category="character.name" :info-content="character.info"/>
      <InfoCard v-if="character.bio" info-category="Životopis" :info-content="character.bio"/>
      <InfoCard v-if="character.facts" info-category="Zajímavosti" :info-content="character.facts"/>
    </article>
    <article class="relations">
      <section>
        <img :src="character.image" :alt="character.name">
      </section>
      <CharacterRelations v-if="character.symbols" relation-category="Symboly" :relation-content="character.symbols"/>
      <CharacterRelations v-if="character.father" relation-category="Otec" :relation-content="character.father"/>
      <CharacterRelations v-if="character.mother" relation-category="Matka" :relation-content="character.mother"/>
      <CharacterRelations v-if="character.children" relation-category="Děti" :relation-content="character.children"/>
      <CharacterRelations v-if="character.home" relation-category="Domov" :relation-content="character.home"/>
      <CharacterRelations v-if="character.partners" relation-category="Partneři" :relation-content="character.partners"/>
      <CharacterRelations v-if="character.siblings" relation-category="Sourozenci" :relation-content="character.siblings"/>
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

    @include mixins.responsive(smartphone-portrait){
      @include mixins.flex-column;
    }
  }

  .info{
    @include mixins.flex-column;
    width: 40%;

    @include mixins.responsive(smartphone-portrait){
      width: 90%;
    }

    @include mixins.responsive(smartphone-landscape){
      width: 75%;
    }

    @include mixins.responsive(tablet){
      width: 55%;
    }
  }

  .relations{
    @include mixins.flex-column;
    width: 17%;
    padding: 30px;
    background-color: #FDF6E8;
    border-radius: 5px;
    margin: 10px;
    gap: 25px;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);

    @include mixins.responsive(smartphone-landscape){
      padding: 20px;
    }

    img{
      height: 250px;
      border-radius: 5px;

      @include mixins.responsive(smartphone-landscape){
        height: 150px;
      }

      @include mixins.responsive(tablet){
        height: 200px;
      }
    }
  }
</style>