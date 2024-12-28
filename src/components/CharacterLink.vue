<script setup>
import { useCategoryStore } from '@/stores/categories';
import { useRoute } from 'vue-router';
import { onMounted, onUpdated, ref, watch } from 'vue';

const categoryStore = useCategoryStore();
const route = useRoute();
const category = ref(categoryStore.categories.find(c => c.id == route.params.id));

watch(() => route.params, () => {
  category.value = categoryStore.categories.find(c => c.id == route.params.id);
})
</script>

<template>
    <article>
        <RouterLink v-for="(character, i) in category.characters" :key="i" :style="{ backgroundImage: `url(${character.image})` }" :to="{name: 'character', params: {id : character.id}}">
            <p>{{ character.name }}</p>
        </RouterLink>
    </article>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

    article{
        display: grid;
        margin-bottom: 20px;
        width: 70%;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;

        @include mixins.responsive(smartphone-portrait){
            grid-template-columns: 1fr;
        }

        @include mixins.responsive(smartphone-landscape){
            grid-template-columns: repeat(2, 1fr);
        }

        @include mixins.responsive(tablet){
            grid-template-columns: repeat(3, 1fr);
        }

        @include mixins.responsive(laptop){
            grid-template-columns: repeat(4, 1fr);
        }
    }

    a{
        @include mixins.flex-row;
        text-decoration: none;
        color: white;
        font-size: 2em;
        font-weight: 600;
        aspect-ratio: 1;
        border-radius: 10px;
        background-size: cover;
        transition: 0.3s ease all;
        background-position: center;

        p{
            @include mixins.flex-row;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            transition: 0.3s ease all;
            backdrop-filter: brightness(40%);

            &:hover{
                opacity: 0;
            }
        }
    }
</style>