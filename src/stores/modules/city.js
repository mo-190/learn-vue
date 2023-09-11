import { getCityAll } from '@/services'
import { defineStore } from "pinia";

const useCitySore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: { cityName: '广州' }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data;
    }
  }
})

export default useCitySore