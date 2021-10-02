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
    <h2 class="text-2xl font-bold text-light-accent dark:text-dark-accent mb-2 mt-8">
      Articles
      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="feather" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="inline-block fa-feather w-6"><path fill="currentColor" d="M467.1 44.9C438.24 16.04 401.59 0 361.59 0c-46.7 0-97.98 21.85-146.78 70.66l-85.75 85.76C54 231.47 56.69 352.92 72.69 405.37L7.03 471.03c-9.37 9.37-9.37 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0l65.6-65.6c17.44 5.3 42.43 9.15 70.88 9.15 57.19 0 128.04-15.48 178.13-65.57l85.76-85.75c90.61-90.62 88.32-189.75 25.76-252.3zM147.37 398.57L193.94 352h124.12c-44.62 41.83-106.87 48.46-140.61 48.46-11.41.01-21.29-.81-30.08-1.89zM350.58 320H225.94l64-64h123.81c-2.23 2.4-4.01 4.83-6.39 7.21L350.58 320zm88.31-96H321.94l22.51-22.51c9.37-9.37 9.37-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0l-197 197c-5.27-45.97-.29-124.34 49.52-174.15 0 0 18.71-18.71 85.75-85.76 37.02-37.02 76.03-56.58 112.8-56.58 26.63 0 51.37 10.66 71.53 30.82 39.17 39.16 40.02 92.25 5.78 145.12z" class=""></path></svg>
    </h2>
    <article-list :docs="docs" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content('blog', params.slug)
      .only(['slug', 'title', 'desc', 'img', 'tags', 'path'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch();
    console.log('docs');
    console.log(docs);
    return {
      docs
    }
  }
}
</script>
