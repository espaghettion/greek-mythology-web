import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref([{name: "Zeus", id: "zeus"}]);
                          
  return { characters }
})