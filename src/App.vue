<template>
  <layout-secure v-if="token" />
  <layout-public v-else />
</template>

<script>
import layoutPublic from './layouts/Public.vue'
import layoutSecure from './layouts/Secure.vue'
export default {
  name: 'App',
  components: {
    layoutPublic,
    layoutSecure
  },
  //const store = useStore()
  // const storeToken = computed(() => store.state.token)
  computed: {
    token() {
      return this.$store.state.token
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  button {
    font: inherit;
    padding: 0.25rem 0.5rem;
    background: #35495e;
    color: white;
    border-color: #35495e;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  button:hover,
  button:active {
    color: #35495e;
    border-color: currentColor;
    background-color: white;
  }
</style>