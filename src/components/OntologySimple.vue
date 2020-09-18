<template>
  <q-markup-table
    flat
    dense
    separator="none"
  >
    <tbody>
      <tr>
        <th style="text-align:right">IRI:</th>
        <td>
          <router-link
            style="text-decoration:none"
            :to="`/ont/${ontology.uri.replace('#', '%23')}`"
          >
            {{ ontology.uri }}
          </router-link>
        </td>
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
</template>

<script>
export default {
  name: 'ont-simple',

  props: {
    ontology: {
      type: Object,
      required: true
    },
  },
}
</script>
