import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([{name: "Bohové", id: "gods", 
                          characters: 
                          [{name: "Zeus", id: "zeus"}, {name: "Poseidón", id: "poseidon"}, {name: "Héra", id: "hera"}, {name: "Árés", id: "ares"},
                          {name: "Athéna", id: "athena"}, {name: "Appolón", id: "appolon"}, {name: "Afrodita", id: "afrodita"}, {name: "Hermés", id: "hermes"},
                          {name: "Artemis", id: "artemis"}, {name: "Hefaistós", id: "hefaistos"}, {name: "Démétér", id: "demeter"}, {name: "Hádés", id: "hades"},
                          {name: "Hestia", id: "hestia"}, {name: "Dionýsos", id: "dionysos"}]}, 
                          {name: "Titáni", id: "titans", 
                          characters: 
                          [{name: "Kronos", id: "kronos"}]}, 
                          {name: "Hrdinové", id: "heroes", characters: []}, 
                          {name: "Nadlidské stvoření", id: "creatures", characters: []}]);
                          
  return { categories }
})
