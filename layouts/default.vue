<template>
  <div class="imfeb-blog bg-gray-800 transition-colors duration-300 ease-in-out min-h-screen">
    <Header />
    <div class="p-4 md:p-6 lg:p-8">
      <Nuxt />
    </div>
    <Footer />
    <BackToTop text="Back to top" visibleoffset="200" />
  </div>
</template>

<script>
</script>

<style>
  body {
    @apply text-gray-100;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    @apply text-yellow-400;
  }

  .page-title {
    @apply text-3xl md:text-5xl mb-4 md:mb-8;
  }
</style>