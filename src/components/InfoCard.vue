<script setup>
defineProps({
    infoCategory: String,
    infoContent: String,
})
</script>

<template>
  <main>
    <section class="info-card">
      <h3>{{ infoCategory }}</h3>
      <p>{{ infoContent }}</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
    h3, p{
        padding: 10px;
    }

    .info-card{
      width: 100%;
    }
</style>