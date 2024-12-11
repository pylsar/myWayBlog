
import { defineStore } from 'pinia'
import axios from "axios"

export const useTransportStore = defineStore("transport", {
    state: () => ({
      transports: [],
    }),
    getters: {
      getTransports(state){
          return state.transports
        }
    },
    actions: {
      async fetchTransports() {
        try {
          const data = await axios.get("http://headlessmyway/wp-json/wp/v2/transports")
            this.transports = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})