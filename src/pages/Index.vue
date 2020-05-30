<template>
  <q-page>
    <div v-if="loading">Loading ...</div>
    <pre v-else>{{ ontologies }}</pre>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',

    data() {
      return {
        loading: false,
        ontologies: [],
      }
    },

    mounted() {
      this.getOntologies()
    },

    methods: {
      async getOntologies() {
        this.loading = true
        const method = 'GET'
        const url = '/ont'
        let params = {}
        try {
          const result = await this.$axios({method, url, params})
          this.loading = false
          this.ontologies = result.data
        }
        catch (error) {
          this.loading = false
          console.error('getOntologies', error)
        }
      }
    }
  }
</script>
