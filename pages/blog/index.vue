<template>
  <div class="blog-page max-w-screen-lg mx-auto">
    <article-list :docs="docs" :total="allDocs.length" />
  </div>
</template>

<script>
import getContent from '@/utils/getContent';

export default {
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error);
    return {
      allDocs: content.allArticles,
      docs: content.paginatedArticles,
    };
  }
}
</script>

<style>

</style>