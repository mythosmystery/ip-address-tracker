const state = () => ({
  coords: [],
  ip: '',
  location: '',
  timezone: '',
  isp: '',
  showMarker: false,
  isError: false
})

const actions = {
  setData({ commit }, { data }) {
    commit('setData', {
      coords: [data.location.lat, data.location.lng],
      ip: data.ip,
      location: getLocationString(data.location),
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
      showMarker: true
    })
  },
  setError({ commit }) {
    commit('setError')
  }
}

const mutations = {
  setData(state, payload) {
    state.coords = payload.coords
    state.ip = payload.ip
    state.location = payload.location
    state.timezone = payload.timezone
    state.isp = payload.isp
    state.showMarker = payload.showMarker
  },
  setError(state) {
    state.isError = true
    state.showMarker = false
  }
}

const getLocationString = location => {
  if (location.postalCode) {
    return `${location.city}, ${location.region}, ${location.postalCode}`
  } else {
    return location.region ? `${location.city}, ${location.region}` : location.city
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
