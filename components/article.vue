<template>
  <div class="flex flex-wrap justify-center">
    <nuxt-link :to="doc.path" class="article-link group w-full">
      <div class="flex flex-col justify-center items-center max-w-lg mx-auto">
        <div class="responsive-image-container overflow-hidden inline-block 
            article-cover
            transform
            transition-transform
            duration-300
            h-56
            w-full
            rounded-lg
            shadow-md
            bg-cover bg-center
            group-hover:-translate-y-4
          ">
          <div class="h-full bg-cover bg-center bg-no-repeat responsive-image-placeholder"
          :style="'background-image:url(' + doc.image + ')'">
          </div>
        </div>
        <div class="article-display transform transition-transform duration-300 z-10 w-11/12 bg-gray-900 -mt-10 shadow-lg p-5 rounded-lg overflow-hidden text-gray-200 group-hover:scale-105">
          <div class="tags flex flex-wrap">
            <div v-for="tag of doc.tags" :key="tag" class="
              bg-gray-700
              text-sm
              font-medium
              mr-2
              mb-1
              rounded-full
              py-0
              px-2
            ">
              {{ tag }}
            </div>
          </div>
          <div class="title-post text-lg font-bold mt-2">
            {{ doc.title }}
          </div>
          <div class="
            text-light-secondary
            dark:text-dark-secondary
            flex
            items-center
            mb-3
            text-xs
          ">
            {{ doc.published }}
          </div>
          <div class="summary-post text-sm text-justify">
            {{ doc.description }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["doc"]
}
</script>

<style>

</style>