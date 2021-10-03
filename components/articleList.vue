<template>
  <div class="artile-list my-10">
    <section class="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8 mb-8">
      <article class="article" v-for="doc of docs" :key="doc.slug">
        <Article :doc="doc" />
      </article>
    </section>
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 6" :total="total" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    docs: {
      type: Array,
      default: Array,
    }
  },
}
</script>

<style>

</style>