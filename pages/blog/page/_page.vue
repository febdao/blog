<template>
  <div>
    <div class="blog-list max-w-screen-lg mx-auto">
      <ArticleList :docs="docs" :total="allDocs.length" />
    </div>
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
};
</script>