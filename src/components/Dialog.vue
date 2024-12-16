<script setup>
import { useCharacterStore } from '@/stores/characters';

const characterStore = useCharacterStore();

    defineProps({
        visible: Boolean,
        title: String,
        close: Function,
        dialogCategory: String,
        dialogContent: Array,
    });
</script>

<template>
    <section v-if="visible" class="dialog-overlay">
        <section class="info-card" v-if="dialogContent && dialogCategory">
            <h3>{{ dialogCategory }}</h3>
            <section v-for="(relation, i) in dialogContent" :key="i">
              <RouterLink v-if="characterStore.characters.find(c => c.id == relation)" class="relation-content" :to="{name: 'character', params: {id : relation}}">{{ characterStore.characters.find(c => c.id == relation).name }}</RouterLink>
              <p v-if="!characterStore.characters.find(c => c.id == relation)" class="relation-content">{{ relation }}</p>
            </section>
        </section>
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
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2;

      .info-card{
        width: 30%;
        font-size: 1.2em;

        >section{
          @include mixins.flex-column;
          padding: 5px;
          
          p{
            padding: 0;
          }
        }
      }
    }

    .relation-content{
        text-decoration: none;
        color: #0F154E;
        line-height: 20px;
        font-size: 1.05em;
    }

    button{
        font-family: 'Bitter', sans-serif;
        border: none;
        background: linear-gradient(0deg, rgba(14,26,143,1) 0%, rgba(8,12,49,1) 100%);
        border-radius: 5px;
        color: white;
        font-size: 1.1em;

        &:hover{
          cursor: pointer;
        }
    }
</style>