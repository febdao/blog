<template>
  <div class="blog-page">
    <h1 class="text-5xl">My blogs</h1>
    <article-list :docs="docs" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content('blog', params.slug)
      .only(['title', 'desc', 'img'])
      .sortBy('createdAt', 'asc')
      .fetch();
    return {
      docs
    }
  }
}
</script>

<style>

</style>