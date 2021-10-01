<template>
  <div class="home-page">
    <h1 class="text-5xl mb-10">Welcome to my blog</h1>

    <h2 class="text-3xl">Latest posts</h2>
    <ul class="article">
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug} }" class="article-list">
          <h3 class="2xl mb-4">{{ article.title }}</h3>
          <p>{{ article.desc }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'desc', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch();

    return {
      articles
    }
  }
}
</script>
