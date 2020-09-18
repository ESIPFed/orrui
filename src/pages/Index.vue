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
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            key="uri"
            :props="props"
          >
            <router-link
              style="text-decoration:none"
              :to="`/ont/${props.row.uri.replace('#', '%23')}`"
            >
              {{ props.row.uri }}
            </router-link>
          </q-td>

          <q-td
            key="name"
            :props="props"
          >
            {{ props.row.name }}
          </q-td>

          <q-td
            key="ownerName"
            :props="props"
          >
            {{ props.row.ownerName }}
          </q-td>

          <q-td
            key="author"
            :props="props"
          >
            {{ props.row.author }}
          </q-td>

          <q-td
            key="status"
            :props="props"
          >
            {{ props.row.status }}
          </q-td>

          <q-td
            key="visibility"
            :props="props"
          >
            {{ props.row.visibility }}
          </q-td>

          <q-td
            key="version"
            :props="props"
          >
            {{ props.row.version }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:item="props">
        <q-card class="q-ma-sm">
          <ontology-simple :ontology="props.row" />
        </q-card>
      </template>

    </q-table>
  </q-page>
</template>

<script>
import OntologySimple from 'components/OntologySimple'

export default {
  name: 'PageIndex',

  components: {
    OntologySimple,
  },

  data () {
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

  mounted () {
    this.getOntologies()
  },

  methods: {
    async getOntologies () {
      this.loading = true
      const method = 'GET'
      const url = '/ont'
      let params = {}
      try {
        const result = await this.$axios({ method, url, params })
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
