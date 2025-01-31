<script setup>
import InfoCard from '@/components/InfoCard.vue';
</script>

<template>
  <main>
    <article>
      <InfoCard info-category="O stránce" :info-content="['Tato webová stránka vznikla jako maturitní práce s cílem zpřístupnit fascinující svět řecké mytologie široké veřejnosti. Najdete zde příběhy bohů, hrdinů a bájných stvoření, které po staletí inspirovaly umělce, spisovatele a filozofy. Stránka si klade za cíl nabídnout přehledné a zajímavé informace o tomto mytologickém světě.']" />
      <InfoCard info-category="Upozornění" :info-content="['Obsah této stránky je určen především pro studijní a informační účely. Přestože je sestaven na základě dostupných zdrojů a historických textů, některé informace mohou být interpretovány různými způsoby. Pokud hledáte odborné nebo akademicky ověřené informace, doporučujeme konzultovat primární zdroje či odbornou literaturu.', 'Informace byly primárně čerpány z webové stránky greekmythology.com. Další informace a příběhy jednotlivých mýtů mohou být nalezeny v knize Řecká mytologie pro začátečníky (ISBN: 978-80-7252-581-2).', 'Veškeré obrázky na této stránce jsou generované pomocí AI.']" />
      <InfoCard info-category="Kontakt" :info-content="['Máte dotazy, připomínky nebo návrhy na vylepšení? Neváhejte nás kontaktovat:', `E-mail: <a href='mailto:recka.mytologie@gmail.com'>recka.mytologie@gmail.com</a>`]" />
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
