<template>
  <header class="header flex justify-between items-center p-4 lg:p-8">
    <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
    <nuxt-link class="text-2xl" to="/">
      <lord-icon
        src="https://cdn.lordicon.com/nobciafz.json"
        trigger="loop-on-hover"
        colors="primary:#ffffff,secondary:#fbbf24"
        style="width:80px;height:80px">
      </lord-icon>
      <span class="relative">Feb
        <span class="absolute text-yellow-400 text-xs top-px whitespace-nowrap">is.me</span>
      </span>
    </nuxt-link>
    <nav>
      <nuxt-link class="px-2" to="/">
        <lord-icon
          src="https://cdn.lordicon.com/gmzxduhd.json"
          trigger="loop-on-hover"
          colors="primary:#fbbf24,secondary:#ffffff"
          style="width:40px;height:40px">
        </lord-icon>
        <span class="hidden sm:inline-block">Home</span>
      </nuxt-link>
      <nuxt-link class="px-2" to="/blog">
        <lord-icon
          src="https://cdn.lordicon.com/puvaffet.json"
          trigger="loop-on-hover"
          colors="primary:#fbbf24,secondary:#ffffff"
          style="width:40px;height:40px">
        </lord-icon>
        <span class="hidden sm:inline-block">Blog</span>
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .nuxt-link-exact-active {
    @apply text-gray-100;
  }
</style>