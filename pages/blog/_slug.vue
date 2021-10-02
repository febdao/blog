<template>
  <article class="pose">
    <h1 class="text-5xl mb-10">{{ doc.title }}</h1>
    <nuxt-content class="my-10 prose prose-indigo lg:prose-xl" :document="doc" />
    <div class="mt-16 flex leading-6 font-medium">
      <nuxt-link v-if="prev" :to="prev.slug" class="flex mr-8 transition-colors duration-200 hover:text-gray-200">
        <span aria-hidden="true" class="mr-2">←</span>
        Previous post
      </nuxt-link>
      <nuxt-link v-if="next" :to="next.slug" class="flex text-right ml-auto transition-colors duration-200 hover:text-gray-200">
        Next post
        <span aria-hidden="true" class="ml-2">→</span>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const doc = await $content('blog', params.slug).fetch();
    const [prev, next] = await $content("blog")
    .only(["title", "slug"])
    .sortBy("createdAt", "asc")
    .surround(params.slug, {before: 1, after: 1})
    .fetch();
    return {doc, prev, next};
  }
}
</script>

<style>

</style>