<template>
  <q-page>
    <q-table
      :loading="loading"
      title="Ontologies"
      :data="ontologies"
      :columns="columns"
      row-key="uri"
      :pagination.sync="pagination"
      :dense="$q.screen.lt.md"
      :grid="$q.screen.lt.md"
      flat
      bordered
    />
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',

    data() {
      return {
        loading: false,
        ontologies: [],

        columns: [
          {
            name: 'uri',
            label: 'IRI',
            align: 'left',
            field: row => row.uri,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'name',
            label: 'Name',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'ownerName',
            label: 'Owner',
            align: 'left',
            field: row => row.ownerName,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'author',
            label: 'Author',
            align: 'left',
            field: row => row.author,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'status',
            label: 'Status',
            align: 'left',
            field: row => row.status,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'visibility',
            label: 'Visibility',
            align: 'left',
            field: row => row.visibility,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'version',
            label: 'Version',
            align: 'left',
            field: row => row.version,
            format: val => `${val}`,
            sortable: true
          },
        ],
        pagination: {
          sortBy: 'version',
          descending: true,
          rowsPerPage: 50,
        },
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
