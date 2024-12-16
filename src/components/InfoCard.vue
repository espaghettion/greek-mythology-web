<script setup>
defineProps({
    infoCategory: String,
    infoContent: Array,
})
</script>

<template>
    <section class="info-card">
      <h3>{{ infoCategory }}</h3>
      <p v-for="(info, i) in infoContent" :key="i">{{ info }}</p>
    </section>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;


</style>