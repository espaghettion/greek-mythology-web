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
@use '../mixins.scss' as mixins;

    .info-card{
      background-color: #FDF6E8;
      border-radius: 5px;
      box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
      width: 100%;
      margin: 10px;

      h3{
        background: linear-gradient(0deg, rgba(14,26,143,1) 0%, rgba(8,12,49,1) 100%);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        color: white;

        @include mixins.responsive(smartphone-portrait){
          font-size: 2em;
        }

        @include mixins.responsive(smartphone-landscape){
          font-size: 2em;
        }
      }

      p{
        padding: 10px;

        @include mixins.responsive(smartphone-portrait){
          font-size: 0.9em;
        }

        @include mixins.responsive(smartphone-landscape){
          font-size: 0.9em;
        }
      }
    }
</style>