<script >
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <h1>My Way</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

