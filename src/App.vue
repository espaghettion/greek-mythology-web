<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onUpdated, ref } from 'vue';
import { useCategoryStore } from './stores/categories';
import { useCharacterStore } from './stores/characters';
import MiniSearch from 'minisearch';

const active = ref(false);
const categoryStore = useCategoryStore();
const characterStore = useCharacterStore();
const results = ref([]);
const query = ref('');
const lowerCaseQuery = ref('');
const filteredCharacters = ref([]);

const miniSearch = new MiniSearch({
  fields: ['name', 'id', 'symbols', 'home', 'partners'],
  storeFields: ['name']
});
miniSearch.addAll(characterStore.characters);

function searchBar() {
  filteredCharacters.value = [];
  results.value = [];
  lowerCaseQuery.value = query.value.toLowerCase();

  for(let i = 0; i < characterStore.characters.filter(value => value.name.toLowerCase().startsWith(lowerCaseQuery.value)).length; i ++){
    filteredCharacters.value.push(characterStore.characters.filter(value => value.name.toLowerCase().startsWith(lowerCaseQuery.value))[i]);
  }
  for(let i = 0; i < characterStore.characters.filter(value => value.id.toLowerCase().startsWith(lowerCaseQuery.value)).length; i ++){
    filteredCharacters.value.push(characterStore.characters.filter(value => value.id.toLowerCase().startsWith(lowerCaseQuery.value))[i]);
  }
  for(let i = 0; i < miniSearch.search(query.value, {fuzzy: 2}).length; i ++){
    filteredCharacters.value.push(miniSearch.search(query.value, {fuzzy: 2})[i]);
  }

  filteredCharacters.value = filteredCharacters.value.filter((item, index, self) => 
    index === self.findIndex(t => t.id === item.id)
  );
  for(let i = 0; i < filteredCharacters.value.length; i++){
    results.value.push(filteredCharacters.value[i]);
  }
}
</script>

<template>
  <header>
    <section>
      <img class="logo" src="./assets/logo.svg" alt="">
    </section>
    <nav>
      <section class="homepage-link">
        <RouterLink to="/">Řecká mytologie</RouterLink>
      </section>
      <section class="search">
        <section class="searchbar">
          <input v-model="query" @input="searchBar" placeholder="Vyhledávání"/>
          <ul v-if="results.length > 0 && query.length > 0" class="results">
            <li v-for="(result, i) in results" :key="i" class="result">
              <RouterLink @click="query = ''; results = []" :to="{name: 'character', params: {id: result.id}}">{{ result.name }}</RouterLink>
            </li>
          </ul>
        </section>
        <section class="menu-btn">
          <button @click="active = !active"><i class="fa-solid" :class="{ 'fa-xmark': active, 'fa-bars': !active }"></i></button>
        </section>
      </section>
    </nav>
  </header>
  <article class="menu" :class="{ 'active': active }">
    <RouterLink @click="active = !active" class="link" to="/">Mytologie</RouterLink>
    <RouterLink @click="active = !active" v-for="(category, i) in categoryStore.categories" :key="i" class="link" :to="{name: 'category', params: {id: category.id}}">{{ category.name }}</RouterLink>
    <RouterLink @click="active = !active" class="link" to="/about">O stránce</RouterLink>
  </article>

  <RouterView />
</template>

<style scoped lang="scss">
@use './mixins.scss' as mixins;

header {
  @include mixins.flex-row;
  justify-content: start;
  width: 100%;
  background-color: #080C37;
  background-image: url(./assets/feather-texture.png);

  .logo {
    display: block;
    width: 60px;
  }

  >section{
    @include mixins.flex-row;
    padding: 10px;
    justify-content: start;
  }

  nav{
    @include mixins.flex-row;
    width: calc(100% - 80px);
    justify-content: start;
    font-weight: 600;
    gap: 20px;
    padding: 10px;

    .homepage-link{
      a{
        width: 100%;
        text-decoration: none;
        color: white;
        font-size: 2.5em;
      }

      @include mixins.responsive(smartphone-portrait){
        display: none;
      }

      @include mixins.responsive(smartphone-landscape){
        display: none;
      }
    }

    section{
      width: 50%;

      @include mixins.responsive(smartphone-portrait){
        width: 100%;
      }

      @include mixins.responsive(smartphone-landscape){
        width: 100%;
      }
    }

    .search{
      @include mixins.flex-row;
      justify-content: end;
      gap: 20px;

      .searchbar{
        @include mixins.flex-column;
        align-items: end;
        width: 35%;
        position: relative;

        @include mixins.responsive(smartphone-portrait){
          width: 60%;
        }

        .results{
          position: absolute;
          padding: 5px;
          border-radius: 5px;
          top: 100%;
          width: 100%;
          background-color: #FFF5E0;
          text-decoration: none;
          z-index: 1;
          box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);

          .result{
            padding: 10px;

            a{
              text-decoration: none;
              color: #0F154E;
              font-size: 1.15em;
            }
          }
        }
      }

      .menu-btn{
        width: 40px;
      }
    }
  }

  button{
    @include mixins.search-bar;
    width: 40px;
    height: 40px;
    font-size: 1.3em;

    &:hover{
      cursor: pointer;
    }
  }
}

input{
  @include mixins.search-bar;
  width: 100%;
  height: 25px;
  font-size: 1.15em;
  padding: 5px;

  &:focus{
    outline: none;
  }
}

::placeholder{
  color: rgb(180, 180, 180);
}

.menu{
  display: none;
  width: 25%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 78px;
  background-color: #FFF5E0;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-weight: 600;
  border-radius: 5px;
  z-index: 1;

  @include mixins.responsive(smartphone-portrait){
    width: calc(100% - 20px);
  }

  @include mixins.responsive(smartphone-landscape){
    width: 60%;
  }

  @include mixins.responsive(tablet){
    width: 40%;
  }
}

.link{
  @include mixins.decorated-text;
  width: 95%;
  padding: 10px;
  font-size: 1.8em;
}

.active{
  @include mixins.flex-column;
  gap: 10px;
}
</style>
