import { getCityAll } from '@/services'
import { defineStore } from "pinia";

const useCitySore = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data;
    }
  }
})

export default useCitySore