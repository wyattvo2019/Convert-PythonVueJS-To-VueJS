# Convert-PythonVueJS-To-VueJS

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# Convert-PythonVueJS-To-VueJS

## Create AppHeaer
```sh
touch src/components/AppHeader.vue
```
## Write content for AppHeader
```
<!-- # src/components/AppHeader.vue -->
<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.svg" height="50">
    <p>My Vue.js Application</p>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: .5rem 1rem;
  p {
    margin-left: 1rem;
  }
}
nav {
  margin-left: auto;
  ul {
    list-style: none;
  }
  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }
}
</style>
```
## Update App.vue to use AppHeader
```
#src/App.vue
import AppHeader from '@/components/AppHeader.vue'
<template>
....
  <app-header />
....
</template>
```
## Create AppFooter
```sh
touch src/components/AppFooter.vue
```
```
<!-- src/components/AppFooter.vue -->
<template>
  <footer>
    <p>Copyright &copy;{{ year }} </p>
  </footer>
</template>

<script>
import { computed } from 'vue'
export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>
```

## Create Home vue
```
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrapper">
    <div v-for="airport in airports" 
      :key="airport.abbreviation"
      class="airport">
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import allAirports from '@/data/airports.js'

export default {
  setup() {
    const airports = ref(allAirports)
		return { airports }
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
```

## Set up Vue Router
```
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
```

## Add data airport
```
// src/data/airports.js
export default [
  {
    name: 'Cincinnati/Northern Kentucky International Airport',
    abbreviation: 'CVG',
    city: 'Hebron',
    state: 'KY',
	  destinations: {
      passenger: [ 'Toronto', 'Seattle/Tacoma', 'Austin', 'Charleston', 'Denver', 'Fort Lauderdale', 'Jacksonville', 'Las Vegas', 'Los Angeles', 'Baltimore', 'Chicago', 'Detroit', 'Dallas', 'Tampa' ],
	    cargo: [ 'Anchorage', 'Baltimore', ' Chicago' , 'Indianapolis', 'Phoenix', 'San Francisco', 'Seattle', 'Louisville', 'Memphis' ]
	  }
  },
  {
    name: 'Seattle-Tacoma International Airport',
    abbreviation: 'SEA',
    city: 'Seattle',
    state: 'WA',
	  destinations: {
      passenger: [ 'Dublin', 'Mexico City', 'Vancouver', 'Albuquerque', 'Atlanta', 'Frankfurt', 'Amsterdam', 'Salt Lake City', 'Tokyo', 'Honolulu' ],
	    cargo: [ 'Spokane', 'Chicago', 'Dallas', ' Shanghai', 'Cincinnati', 'Luxenbourg', 'Anchorage', 'Juneau', 'Calgary', 'Ontario' ]
	  }
  },
  {
    name: 'Minneapolis-Saint Paul International Airport',
    abbreviation: 'MSP',
    city: 'Bloomington',
    state: 'MN',
	  destinations: {
      passenger: [ 'Dublin', 'Paris', 'Punta Cana', 'Winnipeg', 'Tokyo', 'Denver', 'Tulsa', 'Washington DC', 'Orlando', 'Mexico City' ],
	    cargo: [ 'Cincinnati', 'Omaha', 'Winnipeg', 'Chicago', 'St. Louis', 'Portland', 'Philadelphia', 'Milwaukee', 'Ontario' ]
	  }
  }
]
```

## Create AriportDetail
```
// src/views/AirportDetail.vue
<template>
  <div>
    <p>{{ airport.name }} ({{ airport.abbreviation }})</p>
    <p>Located in {{ airport.city }}, {{ airport.state }}</p>
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
```
Update Router
```
const routes = [
  ...
    {
    path: '/airport/:code',
    name: "AirportDetail",
    component: AirportDetail,
  },
  ...
] 
```
* localhost:8080/airport/scg
* localhost:8080/airport/sea
* localhost:8080/airport/msp
## Airport Destination
```
<!-- src/views/AirportDestinations.vue -->
<template>
  <h1>Destinations for {{ airport.name }} ({{ airport.abbreviation }}</h1>
  <h2>Passenger</h2>
  <ul>
    <li v-for="(destination, i) in airport.destinations.passenger" :key="i">
      {{ destination }}
    </li>
  </ul>
  <h2>Cargo</h2>
  <ul>
    <li v-for="(destination, i) in airport.destinations.cargo" :key="i">
      {{ destination }}
    </li>
  </ul>
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
```

## Update chil route 
```
<!-- src/router/index.js -->
const routes = [
...
  {
    path: '/airport/:code',
    name: "AirportDetail",
    component: AirportDetail,
    children: [
			{
			  path: 'destinations',
				name: 'AirportDestinations',
				component: AirportDestinations
			}
		]
  },
...
]
```


