import { getHotSuggests, getHomeCategories, getHouseListData } from '@/services'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggests: [],
      categories: [],
      currentPage: 1,
      houselist: []
    }
  },
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data
    },
    async fetchHomeCategories() {
      const res = await getHomeCategories();
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHouseListData(this.currentPage);
      this.houselist.push(...res.data);
      this.currentPage++;
    }
  }
})

export default useHomeStore