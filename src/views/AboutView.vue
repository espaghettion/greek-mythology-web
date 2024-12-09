<script setup>
import InfoCard from '@/components/InfoCard.vue';
</script>

<template>
  <main>
    <article>
      <InfoCard info-category="O stránce" info-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim vestibulum vestibulum. Curabitur justo magna, blandit in pulvinar vitae, fermentum consectetur erat. Praesent massa eros, hendrerit in turpis at, porttitor tempor diam. Curabitur ut laoreet nisl, vitae pellentesque risus. Quisque purus nisl, consequat ut erat at, volutpat porta mi. Donec augue arcu, aliquam porttitor arcu at, dictum eleifend nisi. Suspendisse vel lobortis turpis. Aliquam laoreet eros sapien, et malesuada sapien condimentum quis. Quisque feugiat non justo ut tempus." />
      <InfoCard info-category="Upozornění" info-content="hi" />
      <InfoCard info-category="Kontakt" info-content="hi" />
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
