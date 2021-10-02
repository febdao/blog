<template>
  <div class="flex flex-wrap justify-center">
    <nuxt-link :to="doc.path" class="article-link group">
      <div class="flex flex-col justify-center items-center max-w-sm mx-auto">
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
          :style="'background-image:url(/images/' + doc.img + ')'">
          </div>
        </div>
        <div class="article-display transform transition-transform duration-300 z-10 w-11/12 bg-gray-900 -mt-10 shadow-lg p-5 rounded-lg overflow-hidden text-gray-200 group-hover:scale-105">
          <div class="title-post text-lg font-bold mt-2">
            {{ doc.title }}
          </div>
          <div class="summary-post text-sm text-justify">
            {{ doc.desc }}
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