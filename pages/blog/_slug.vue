<template>
  <article class="pose">
    <nuxt-content :document="doc" />
    <h4 v-if="prev">
      <nuxt-link :to="prev.slug">Previous post</nuxt-link>
    </h4>
    <h4 v-if="next">
      <nuxt-link :to="next.slug">Next post</nuxt-link>
    </h4>
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