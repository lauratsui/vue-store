<template>
  <div>
    <Navigation />
    <h2 style="text-align: center;">{{ usd }} = {{ sgd }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
  name: 'Secure',
  components: {
    Navigation
  },
  data () {
    return {
      usd: '',
      sgd: ''
    }
  },
  mounted () {
    fetch('https://api.exchangeratesapi.io/latest?symbols=USD,SGD')
      .then(response => response.json())
      .then(data => {
        this.usd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(1.0)
        this.sgd = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'SGD' }).format(data.rates.SGD / data.rates.USD)
      })
  }
}
</script>