<script setup>
import InfoCard from '@/components/InfoCard.vue';
</script>

<template>
  <main>
    <article>
      <InfoCard info-category="O stránce" info-content="hi" />
      <InfoCard info-category="Upozornění" info-content="hi" />
      <InfoCard info-category="Kontakt" info-content="hi" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
article{
  width: 50%;
}
</style>
