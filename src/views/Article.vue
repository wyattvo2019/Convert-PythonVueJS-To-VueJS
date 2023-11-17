<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Article Name: {{ article.name }}</h1>
  <h1>Author:
    <router-link
    :to="{ name: 'AuthorDetail', params: { slug: author.slug } }"
    >
      {{ author.name }}
    </router-link>
  </h1>
  <h5>{{ article.content }}</h5>
</template>
<script>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import allData from "../data/data"

  export default {
    setup() {
      const route = useRoute()
      const article = computed(() => {
        return allData.article.filter(a => a.slug === route.params.slug)[0]
      })
      const author = computed(() => {
        return allData.author.filter(a => a.id === article.value.author_id)[0]
      })
    return { article, author }
  }
}
</script>