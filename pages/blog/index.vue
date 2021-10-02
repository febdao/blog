<template>
  <div class="blog-page max-w-screen-lg mx-auto">
    <h1 class="page-title">My blogs</h1>
    <article-list :docs="docs" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content('blog', params.slug)
      .only(['slug', 'title', 'desc', 'img', 'tags', 'path'])
      .sortBy('createdAt', 'desc')
      .fetch();
    return {
      docs
    }
  }
}
</script>

<style>

</style>