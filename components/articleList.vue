<template>
  <div class="artile-list my-10">
    <section class="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8 mb-8">
      <article class="article" v-for="doc of docs" :key="doc.slug">
        <Article :doc="doc" />
      </article>
    </section>
    <nuxt-link class="flex text-xl justify-end items-center ml-auto transition-colors duration-200 hover:text-gray-100" to="/blog">
      <span>View all</span>
      <lord-icon
        src="https://cdn.lordicon.com/fyhanzjw.json"
        trigger="loop-on-hover"
        colors="primary:#ffffff,secondary:#fbbf24"
        style="width:60px;height:60px">
      </lord-icon>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['docs']
}
</script>

<style>

</style>