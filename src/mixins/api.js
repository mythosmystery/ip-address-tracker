import axios from 'axios'

export default {
  methods: {
    async getIPData() {
      const { data } = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.VUE_APP_APIKEY}&ipAddress=${this.$store.state.searchText}&domain=${this.$store.state.searchText}`
      )
      this.$store.dispatch('data/setData', { data })
    }
  },
  mounted() {
    this.getIPData()
  }
}
