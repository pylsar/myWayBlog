<script >
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      fetch("http://headlessmyway/wp-json/wp/v2/projects")
        .then((response) => response.json())
        .then((data) => {

          console.log('data', data)
          this.posts = data;
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getPosts();
  },
}

</script>

<template>
  <header>
      <h1>sdfsdfdsf</h1>
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.slug }}</h2>
        {{ post.content.rendered }}
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

