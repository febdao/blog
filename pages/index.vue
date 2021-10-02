<template>
  <div class="home-page">
    <h1 class="text-4xl mb-10 text-yellow-400">Hi,
    <br>
    I love
    <lord-icon
      src="https://cdn.lordicon.com/anihkfxp.json"
      trigger="loop"
      colors="primary:#ffffff,secondary:#fbbf24"
      stroke="58"
      style="width:50px;height:50px">
    </lord-icon>
    and 
    <lord-icon
      src="https://cdn.lordicon.com/vixtkkbk.json"
      trigger="loop"
      colors="primary:#e4e4e4,secondary:#fbbf24"
      style="width:60px;height:60px">
    </lord-icon>
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
