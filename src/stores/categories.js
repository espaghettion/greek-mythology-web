import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([
                          // Gods
                          {name: "Bohové", id: "gods", image: "https://cdn.pixabay.com/photo/2024/04/02/08/47/zeus-8670349_960_720.jpg",
                          description:
                          "Řecká mytologie je plná bohů. Patří k nim samozřejmě 12 Olympanů, ale také prvotní božstva, které spíše reprezentují obecné koncepty. Také existuje mnoho dalších bohů, ke kterým se vážou více specifické věci.", 
                          characters: 
                          [{name: "Zeus", id: "zeus"}, {name: "Poseidón", id: "poseidon"}, {name: "Héra", id: "hera"}, {name: "Árés", id: "ares"},
                          {name: "Athéna", id: "athena"}, {name: "Appolón", id: "appolon"}, {name: "Afrodita", id: "afrodita"}, {name: "Hermés", id: "hermes"},
                          {name: "Artemis", id: "artemis"}, {name: "Hefaistós", id: "hefaistos"}, {name: "Démétér", id: "demeter"}, {name: "Hádés", id: "hades"},
                          {name: "Hestia", id: "hestia"}, {name: "Dionýsos", id: "dionysos"}, {name: "Chaos", id: "chaos"}, {name: "Erebos", id: "erebos"}, {name: "Gaia", id: "gaia"},
                          {name: "Uranos", id: "uranos"}, {name: "Nyx", id: "nyx"}, {name: "Pontos", id: "pontos"}, {name: "Tartarus", id: "tartarus"},
                          {name: "Múzy", id: "muzy"}, {name: "Pan", id: "pan"}, {name: "Grácie", id: "gracie"}, {name: "Sudičky", id: "sudicky"}, {name: "Adónis", id: "adonis"},
                          {name: "Charón", id: "charon"}, {name: "Seléné", id: "selene"}, {name: "Thanatos", id: "thanatos"}]}, 

                          // Titans
                          {name: "Titáni", id: "titans", image: "",
                          description:
                          "ssss",
                          characters: 
                          [{name: "Kronos", id: "kronos"}, {name: "Okeanos", id: "okeanos"}, {name: "Atlas", id: "atlas"}, {name: "Prometheus", id: "prometheus"},
                          {name: "Hyperión", id: "hyperion"}, {name: "Rhea", id: "rhea"}, {name: "Styx", id: "styx"}, {name: "Létó", id: "leto"}, {name: "Iapetos", id: "iapetos"},
                          {name: "Koios", id: "koios"}, {name: "Krios", id: "krios"}, {name: "Mnémosyné", id: "mnemosyne"}, {name: "Foibé", id: "foibe"}, 
                          {name: "Téthys", id: "tethys"}, {name: "Theia", id: "theia"}, {name: "Themis", id: "themis"}]}, 

                          // Heroes
                          {name: "Hrdinové", id: "heroes", image: "",
                          description:
                          "wewewew",
                          characters: 
                          [{name: "Perseus", id: "Perseus"}, {name: "Odysseus", id: "odysseus"}, {name: "Achilles", id: "achilles"}, 
                          {name: "Orfeus", id: "orfeus"}, {name: "Héraklés", id: "herakles"}, {name: "Théseus", id: "theseus"}]}, 

                          // Creatures
                          {name: "Nadlidské stvoření", id: "creatures", image: "",
                          description:
                          "",
                          characters: 
                          [{name: "Kentauři", id: "kentauri"}, {name: "Dryády", id: "dryady"}, {name: "Najády", id: "najady"}, {name: "Nymfy", id: "nymfy"},
                          {name: "Satyrové", id: "satyrove"}, {name: "Sirény", id: "sireny"}, {name: "Sfinx", id: "sfinx"}, {name: "Obři", id: "obri"},
                          {name: "Gorgony", id: "gorgony"}, {name: "Harpyje", id: "harpyje"}]}]);
                          
  return { categories }
})
