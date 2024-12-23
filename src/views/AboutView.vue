<script setup>
import InfoCard from '@/components/InfoCard.vue';
</script>

<template>
  <main>
    <article>
      <InfoCard info-category="O stránce" :info-content="['to-do']" />
      <InfoCard info-category="Upozornění" :info-content="['to-do']" />
      <InfoCard info-category="Kontakt" :info-content="['to-do']" />
    </article>
  </main>
</template>

<style lang="scss" scoped>
@use '../mixins.scss' as mixins;

  article{
    width: 50%;

    @include mixins.responsive(smartphone-portrait){
      width: 90%;
    }

    @include mixins.responsive(smartphone-landscape){
      width: 80%;
    }

    @include mixins.responsive(tablet){
      width: 65%;
    }
  }
</style>
