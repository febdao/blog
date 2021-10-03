<template>
  <article class="pose max-w-screen-lg mx-auto">
    <nuxt-link class="mb-4 flex text-xl items-center ml-auto transition-colors duration-200 hover:text-gray-100" to="/blog">
      <span class="mr-2">←</span>
      <span>Back</span>
    </nuxt-link>
    <h1 class="page-title font-extrabold">{{ doc.title }}</h1>
    <div class="
      text-light-secondary
      dark:text-dark-secondary
      flex
      items-center
      my-3
      ">
      <span>{{ doc.published }} · by Feb Dao</span>
        <div class="responsive-image-container overflow-hidden inline-block 
        w-8
        h-8
        mx-2
        rounded-full
        border-2 border-light-accent
        dark:border-dark-accent
        ">
          <img src="/images/feb.jpg" alt="Profile picture of Marc Backes (very handsome)" class="object-cover h-full responsive-image-placeholder">
          <img alt="Profile picture of Feb Dao(very handsome)" class="object-cover h-full responsive-image-real" style="opacity: 1;" >
        </div>
    </div>
    <p class="blog__desc text-xl mb-10">{{ doc.description }}</p>
    <div class="responsive-image-container overflow-hidden inline-block w-full max-h-screen-1/3 shadow-md rounded-lg mb-4">
      <img alt="Bug, Error, Defect, Failure Explained" class="object-cover w-full h-auto responsive-image-real" style="opacity: 1;" :src="doc.image">
    </div>
    <nuxt-content class="my-10 prose prose-indigo lg:prose-xl" :document="doc" />
    <div class="mt-16 flex leading-6 font-medium">
      <nuxt-link v-if="prev" :to="prev.slug" class="flex mr-8 transition-colors duration-200 hover:text-gray-200">
        <span aria-hidden="true" class="mr-2">←</span>
        {{ prev.title }}
      </nuxt-link>
      <nuxt-link v-if="next" :to="next.slug" class="flex text-right ml-auto transition-colors duration-200 hover:text-gray-200">
        {{ next.title }}
        <span aria-hidden="true" class="ml-2">→</span>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import global from '@/utils/global';
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.doc.title,
        description: this.doc.description,
        url: `${global.siteUrl}/blog/${this.$route.params.slug}`,
        mainImage: this.doc.image,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.doc.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.doc.updatedAt,
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: global.author || '' },
        { name: 'twitter:label2', content: 'Filed under' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${global.siteUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
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