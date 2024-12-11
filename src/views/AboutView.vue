<script setup>

    import { ref, onMounted, computed } from "vue";
    import { useTransportStore } from "../stores/transports";


    const store = useTransportStore();

    const getTransports = computed(() => {
      return store.getTransports;
    });
    const transports = computed(() => {
      return store.transports;
    });
    onMounted(() => {
      store.fetchTransports();
    });
</script>

<template>
  <div class="about">
    About page

    <div v-for="transport in getTransports" :key="transport.id">
      <div>{{ transport.id }}</div>
      <div>{{ transport.title.rendered }}</div>
      <div>{{ transport.acf.subtitle }}</div>
      <div>{{ transport.acf.year_starts }}</div>
      <div>
        <img :src="transport.acf.main_photo" :alt="transport.title.rendered">
      </div>
     
      
    </div>
  </div>
</template>


