<template>
  <div>
    <p>{{ airport.name }} ({{ airport.abbreviation }})</p>
    <p>Located in {{ airport.city }}, {{ airport.state }}</p>
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import airports from '@/data/airports.js'
export default {
  setup() {
    const route = useRoute()
    const airport = computed(() => {
      return airports.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
    })
    return { airport }
  }
}
</script>