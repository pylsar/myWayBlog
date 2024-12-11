<script setup>
    import { ref, onMounted, computed } from "vue";
    import { useProjectStore } from "../stores/projects";


    const store = useProjectStore();
    const msg = ref("Подтягиваем раздел");


    const getProjects = computed(() => {
      return store.getProjects;
    });
    const projects = computed(() => {
      return store.projects;
    });
    onMounted(() => {
      store.fetchProjects();
    });
</script>

<template>
  <main>
    HomeView
    <div>
      {{ msg }}
    </div>
    <!-- {{ getProjects }} -->
    <div v-for="project in getProjects" :key="project.id">
      {{ project.id }}  - {{ project.slug }}
    </div>
  </main>
</template>
