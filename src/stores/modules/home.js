import { getHotSuggests } from '@/services'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggests: [],
      categories: []
    }
  },
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore