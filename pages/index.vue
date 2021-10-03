<template>
  <div class="home-page max-w-screen-lg mx-auto">
    <h1 class="page-title">Hi, I'm <span class="text-gray-100">Feb</span>
    <br>
    Who <span class="text-gray-100">loves</span>
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
    <banner />
    <h2 class="text-2xl font-bold text-light-accent dark:text-dark-accent mb-2 mt-8">
      Articles
      <lord-icon
        src="https://cdn.lordicon.com/ribdawhq.json"
        trigger="hover"
        colors="primary:#ffffff,secondary:#fbbf24"
        style="width:60px;height:60px">
      </lord-icon>
    </h2>
    <ArticleList :docs="docs" :total="docs.length" />
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
import global from '@/utils/global';
import getSiteMeta from '@/utils/getSiteMeta';

export default {
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: global.title,
        description: global.description,
        url: global.siteUrl,
        mainImage: global.image,
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: global.title,
      meta: [
        ...this.meta,
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: global.siteUrl,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const docs = await $content('blog', params.slug)
      .only(['slug', 'title', 'description', 'image', 'tags', 'path'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch();
    return {
      docs
    }
  }
}
</script>
