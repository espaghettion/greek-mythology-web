<script setup>
defineProps({
  infoCategory: String,
  infoContent: Array,
})
</script>

<template>
  <section class="info-card">
    <h3>{{ infoCategory }}</h3>
    <p v-for="(info, i) in infoContent" :key="i" v-html="info"></p>
  </section>
</template>