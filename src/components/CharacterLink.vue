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
        <RouterLink v-for="(character, i) in category.characters" :key="i" :style="{ backgroundImage: `url(${character.image})` }" :to="{name: 'character', params: {id : character.id}}">{{ character.name }}</RouterLink>
    </article>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

    article{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
    }

    a{
        @include mixins.flex-row;
        text-decoration: none;
        color: white;
        font-size: 2em;
        font-weight: 600;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        background-size: cover;
    }
</style>