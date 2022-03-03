const state = () => ({
  coords: [],
  ip: '',
  location: '',
  timezone: '',
  isp: '',
  showMarker: false
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
  }
}

const getLocationString = location => {
  return location.postalCode
    ? `${location.city}, ${location.region}, ${location.postalCode}`
    : `${location.city}, ${location.region}`
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
