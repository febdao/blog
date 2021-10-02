<template>
  <div class="artile-list my-10">
    <section class="grid sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-8 mb-8">
      <article class="article" v-for="doc of docs" :key="doc.slug">
        <Article :doc="doc" />
      </article>
    </section>
    <nuxt-link class="flex text-right ml-auto transition-colors duration-200 hover:text-gray-100" to="/blog">View all</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['docs']
}
</script>

<style>

</style>