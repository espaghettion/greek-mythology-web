import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([
    // Gods
    {
        name: "Bohové",
        id: "gods",
        image: "https://cdn.pixabay.com/photo/2024/04/02/08/47/zeus-8670349_960_720.jpg",
        description: "Řecká mytologie je plná bohů. Patří k nim samozřejmě 12 Olympanů, ale také prvotní božstva, které spíše reprezentují obecné koncepty. Také existuje mnoho dalších bohů, ke kterým se vážou více specifické věci.",
        characters: [
          { name: "Zeus", id: "zeus", image: "/zeus.jpg" },
          { name: "Poseidón", id: "poseidon", image: "/poseidon.jpg" },
          { name: "Héra", id: "hera", image: "/hera.jpg" },
          { name: "Árés", id: "ares", image: "/ares.jpg" },
          { name: "Athéna", id: "athena", image: "/athena.jpg" },
          { name: "Appolón", id: "appolon", image: "/apollon.jpg" },
          { name: "Afrodita", id: "afrodita", image: "/afrodita.jpg" },
          { name: "Hermés", id: "hermes", image: "/hermes.jpg" },
          { name: "Artemis", id: "artemis", image: "/artemis.jpg" },
          { name: "Hefaistós", id: "hefaistos", image: "/hefaistos.jpg" },
          { name: "Démétér", id: "demeter", image: "/demeter.jpg" },
          { name: "Hádés", id: "hades", image: "/hades.jpg" },
          { name: "Hestia", id: "hestia", image: "/hestia.jpg" },
          { name: "Dionýsos", id: "dionysos", image: "/dionysos.jpg" },
          { name: "Chaos", id: "chaos", image: "/chaos.jpg" },
          { name: "Erebos", id: "erebos", image: "/erebos.jpg" },
          { name: "Gaia", id: "gaia", image: "/gaia.jpg" },
          { name: "Uranos", id: "uranos", image: "/uranos.jpg" },
          { name: "Nyx", id: "nyx", image: "/nyx.jpg" },
          { name: "Pontos", id: "pontos", image: "/pontos.jpg" },
          { name: "Tartarus", id: "tartarus", image: "/tartarus.jpg" },
          { name: "Múzy", id: "muzy", image: "/muzy.jpg" },
          { name: "Pan", id: "pan", image: "/pan.jpg" },
          { name: "Grácie", id: "gracie", image: "/gracie.jpg" },
          { name: "Sudičky", id: "sudicky", image: "/sudicky.jpg" },
          { name: "Adónis", id: "adonis", image: "/adonis.jpg" },
          { name: "Charón", id: "charon", image: "/charon.jpg" },
          { name: "Seléné", id: "selene", image: "/selene.jpg" },
          { name: "Thanatos", id: "thanatos", image: "/thanatos.jpg" },
        ],
    },
    // Titans
    {
        name: "Titáni",
        id: "titans",
        image: "https://cdn.pixabay.com/photo/2024/04/02/08/47/titan-8670350_960_720.jpg",
        description: "ssss",
        characters: [
          { name: "Kronos", id: "kronos", image: "/kronos.jpg" },
          { name: "Okeanos", id: "okeanos", image: "/okeanos.jpg" },
          { name: "Atlas", id: "atlas", image: "/atlas.jpg" },
          { name: "Prometheus", id: "prometheus", image: "/prometheus.jpg" },
          { name: "Hyperión", id: "hyperion", image: "/hyperion.jpg" },
          { name: "Rhea", id: "rhea", image: "/rhea.jpg" },
          { name: "Styx", id: "styx", image: "/styx.jpg" },
          { name: "Létó", id: "leto", image: "/leto.jpg" },
          { name: "Iapetos", id: "iapetos", image: "/iapetos.jpg" },
          { name: "Koios", id: "koios", image: "/koios.jpg" },
          { name: "Krios", id: "krios", image: "/krios.jpg" },
          { name: "Mnémosyné", id: "mnemosyne", image: "/mnemosyne.jpg" },
          { name: "Foibé", id: "foibe", image: "/foibe.jpg" },
          { name: "Téthys", id: "tethys", image: "/tethys.jpg" },
          { name: "Theia", id: "theia", image: "/theia.jpg" },
          { name: "Themis", id: "themis", image: "/themis.jpg" },
        ],
    },
    // Heroes
    {
        name: "Hrdinové",
        id: "heroes",
        image: "https://cdn.pixabay.com/photo/2024/04/02/08/47/hero-8670351_960_720.jpg",
        description: "wewewew",
        characters: [
          { name: "Perseus", id: "perseus", image: "/perseus.jpg" },
          { name: "Odysseus", id: "odysseus", image: "/odysseus.jpg" },
          { name: "Achilles", id: "achilles", image: "/achilles.jpg" },
          { name: "Orfeus", id: "orfeus", image: "/orfeus.jpg" },
          { name: "Héraklés", id: "herakles", image: "/herakles.jpg" },
          { name: "Théseus", id: "theseus", image: "/theseus.jpg" },
        ],
    },
    // Creatures
    {
        name: "Nadlidské stvoření",
        id: "creatures",
        image: "https://cdn.pixabay.com/photo/2024/04/02/08/47/creature-8670352_960_720.jpg",
        description: "",
        characters: [
          { name: "Kentauři", id: "kentauri", image: "/kentauri.jpg" },
          { name: "Dryády", id: "dryady", image: "/dryady.jpg" },
          { name: "Najády", id: "najady", image: "/najady.jpg" },
          { name: "Nymfy", id: "nymfy", image: "/nymfy.jpg" },
          { name: "Satyrové", id: "satyrove", image: "/satyrove.jpg" },
          { name: "Sirény", id: "sireny", image: "/sireny.jpg" },
          { name: "Sfinx", id: "sfinx", image: "/sfinx.jpg" },
          { name: "Obři", id: "obri", image: "/obri.jpg" },
          { name: "Gorgony", id: "gorgony", image: "/gorgony.jpg" },
          { name: "Harpyje", id: "harpyje", image: "/harpyje.jpg" },
        ],
    },
  ]);
                          
  return { categories }
})
