<template>
  <div id="app">
    <navigation />
        <router-view />
    <the-footer />
  </div>
</template>

<script>
import theFooter from './components/base/Footer.vue'
import Navigation from './components/base/Navigation.vue'
import { mapActions, mapGetters } from "vuex"

export default {
  components: {
    Navigation,
    theFooter
  },
  methods: {
    ...mapActions(['requestUserLocation'])
  },
  mounted() {
    this.requestUserLocation()
  },
  computed:{
    ...mapGetters(['locationData', 'cityStateLocation'])
  }
}
</script>
