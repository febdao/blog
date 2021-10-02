<template>
  <div class="home-page">
    <h1 class="text-4xl mb-10 text-yellow-400">Hello, I'm Feb <span aria-hidden="true" class="wave">👋</span>
    <br>
    and I
    <span>
      <span class="sr-only">love</span>
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-red-600 inline-block svg-inline--fa fa-heart fa-w-16 w-10">
        <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" class=""></path>
      </svg>
    </span>
    web development.
    </h1>

    <h2 class="text-3xl">Latest posts</h2>
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
