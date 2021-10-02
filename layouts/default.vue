<template>
  <div class="imfeb-blog bg-gray-800 transition-colors duration-300 ease-in-out min-h-screen">
    <div class="container mx-auto py-10">
      <Header />
      <div class="py-16">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  body {
    @apply text-gray-200;
  }
  
  a {
    @apply text-yellow-400;
  }
</style>