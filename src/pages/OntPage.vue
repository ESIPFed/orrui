<template>
  <q-page>
    <div
      v-if="ontology"
      class="q-ma-md"
    >
      <q-markup-table
        flat dense
        separator="none"
      >
        <tbody>
        <tr>
          <th style="text-align:right">IRI:</th>
          <td>{{ ontology.uri }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Name:</th>
          <td>{{ ontology.name }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Version:</th>
          <td>{{ ontology.version }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Author:</th>
          <td>{{ ontology.author }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Owner:</th>
          <td>{{ ontology.ownerName }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Status:</th>
          <td>{{ ontology.status }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Visibility:</th>
          <td>{{ ontology.visibility }}</td>
        </tr>
        <tr>
          <th style="text-align:right">Format:</th>
          <td>{{ ontology.format }}</td>
        </tr>
        </tbody>
      </q-markup-table>

      <q-markup-table
        class="q-mt-md"
        dense
        wrap-cells
      >
        <tbody>
        <tr v-for="(values, prop) in ontology.metadata" :key="prop">
          <td style="vertical-align:top">{{ prop }}</td>
          <td style="vertical-align:top">
            <ul>
              <li v-for="(value, index) in values" :key="index">
                {{ value }}
              </li>
            </ul>
          </td>
        </tr>
        </tbody>
      </q-markup-table>
    </div>

    <div
      v-else-if="!loading"
      class="q-mt-lg column q-gutter-sm flex-center"
    >
      <div>IRI: {{ $route.params.iri }}</div>
      <div>Ontology not found</div>
      <img
        src="~assets/sad.svg"
        style="max-width:50px;"
      >
    </div>

<!--    <pre>{{ ontology }}</pre>-->
  </q-page>
</template>

<script>
  export default {
    name: 'OntPage',

    data() {
      return {
        loading: false,
        ontology: null,
      }
    },

    mounted() {
      this.getOntology()
    },

    methods: {
      async getOntology() {
        this.ontology = null
        this.loading = true
        const method = 'GET'
        const url = '/ont'
        let params = {
          oiri: this.$route.params.iri,
          format: '!md',
        }
        try {
          const result = await this.$axios({method, url, params})
          this.loading = false
          this.ontology = result.data
        }
        catch (error) {
          this.loading = false
          console.error('getOntology', error)
        }
      }
    },

    watch: {
      '$route.params' () {
        this.getOntology()
      },
    },
  }
</script>
