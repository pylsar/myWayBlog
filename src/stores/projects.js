
import { defineStore } from 'pinia'
import axios from "axios"

export const useProjectStore = defineStore("project", {
    state: () => ({
        projects: [],
    }),
    getters: {
      getProjects(state){
          return state.projects
        }
    },
    actions: {
      async fetchProjects() {
        try {
          const data = await axios.get("http://headlessmyway/wp-json/wp/v2/projects")
            this.projects = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})