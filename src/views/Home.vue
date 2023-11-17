<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrapper">
    <router-link
      v-for="airport in airports" 
      :key="airport.abbreviation"
      class="airport"
      :to="{ name: 'AirportDetail', params: { code: airport.abbreviation } }"
    >
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </router-link>
    <router-link
      v-for="author in allData.author" 
      :key="author.id"
      class="airport"
      :to="{ name: 'AuthorDetail', params: { slug: author.slug } }"
    >
      <p>{{ author.name }}</p>
      <p>{{ author.id }}</p>
      <p>{{ author.slug }}</p>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import allAirports from '@/data/airports.js'
import allDatas from "../data/data"
export default {
  setup() {
    const airports = ref(allAirports)
    const allData = ref(allDatas)
		return { airports, allData }
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}
.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
}
.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}
.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>