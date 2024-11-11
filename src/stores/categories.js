import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([
                          // Gods
                          {name: "Bohové", id: "gods",
                          description:
                          "Řecká mytologie je plná bohů. Patří k nim samozřejmě 12 Olympanů, ale také prvotní božstva, které spíše reprezentují obecné koncepty. Také existuje mnoho dalších bohů, ke kterým se vážou více specifické věci.", 
                          characters: 
                          [{name: "Zeus", id: "zeus"}, {name: "Poseidón", id: "poseidon"}, {name: "Héra", id: "hera"}, {name: "Árés", id: "ares"},
                          {name: "Athéna", id: "athena"}, {name: "Appolón", id: "appolon"}, {name: "Afrodita", id: "afrodita"}, {name: "Hermés", id: "hermes"},
                          {name: "Artemis", id: "artemis"}, {name: "Hefaistós", id: "hefaistos"}, {name: "Démétér", id: "demeter"}, {name: "Hádés", id: "hades"},
                          {name: "Hestia", id: "hestia"}, {name: "Dionýsos", id: "dionysos"}]}, 

                          // Titans
                          {name: "Titáni", id: "titans", 
                          description:
                          "ssss",
                          characters: 
                          [{name: "Kronos", id: "kronos"}]}, 

                          // Heroes
                          {name: "Hrdinové", id: "heroes", 
                          description:
                          "wewewew",
                          characters: 
                          []}, 

                          // Creatures
                          {name: "Nadlidské stvoření", id: "creatures", 
                          description:
                          "",
                          characters: 
                          []}]);
                          
  return { categories }
})
