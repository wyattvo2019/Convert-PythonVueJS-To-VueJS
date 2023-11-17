<template>
  <div v-if="author">
    <h1>Author ID: {{ author.id }}</h1>
    <h1>Author Name: {{ author.name }}</h1>
    <h2> List of Articles:</h2>
    <ul>
      <li v-for="(article, i) in articles" :key="i">
        <router-link
          :key="article.id"
          :to="{ name: 'Article', params: { slug: article.slug } }"
        >
          {{ article.name }}: {{ article.content }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import allData from "../data/data"
import router from '@/router'
export default {
  setup() {
    const route = useRoute()
    const author = computed(() => {
      return allData.author.filter(a => a.slug === route.params.slug)[0]
    })
    const articles = computed(() => {
      return allData.article.filter(a => a.author_id === author.value.id)
    })
    onMounted(() => {
   	if (!author.value) {
   		// Navigate to 404 page here
       router.push({ name: 'PageNotFound' })
   	}
   })
    return { author, articles }
  }
}
</script>