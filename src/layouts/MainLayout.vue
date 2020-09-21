<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link
            to="/"
            style="color:white;text-decoration:none"
            color="white"
          >
            orrui
          </router-link>
        </q-toolbar-title>

        <a href="https://github.com/ESIPFed/orrui"
           style="text-decoration:none"
           class="text-white row items-center q-gutter-x-md q-mr-md"
        >
          <div>v{{ version }}</div>
          <q-icon name="fab fa-github" size="20px"/>
        </a>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          COR Links
        </q-item-label>
        <EssentialLink
          v-for="link in corLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-separator class="q-mt-lg" />

      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <span class="text-bold">orrui</span>
          is a prototype based on Vue and Quasar.
          <br/><br/>
          Here are some links:
        </q-item-label>
        <EssentialLink
          v-for="link in quasarLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {version} from '../../package.json'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink: () => import('components/EssentialLink')
  },

  data () {
    return {
      version,

      leftDrawerOpen: false,
      corLinks: [
        {
          title: 'Official COR',
          caption: 'cor.esipfed.org/ont/',
          img: 'http://cor.esipfed.org/esip_cor_logo.png',
          link: 'http://cor.esipfed.org/ont/'
        },
        {
          title: 'ESIP SemTech',
          caption: 'wiki.esipfed.org/Semantic_Technologies',
          icon: 'people',
          link: 'https://wiki.esipfed.org/Semantic_Technologies'
        },
      ],

      quasarLinks: [
        {
          title: 'orrui Github',
          caption: 'ESIPFed/orrui',
          icon: 'fab fa-github',
          link: 'https://github.com/ESIPFed/orrui'
        },
        {
          title: 'Quasar Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Quasar Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Vue Docs',
          caption: 'vuejs.org/v2/guide',
          icon: 'school',
          link: 'https://vuejs.org/v2/guide/'
        },
      ]
    }
  }
}
</script>
