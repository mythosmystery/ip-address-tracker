import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    searchText: ''
  },
  mutations: {
    setSearch(state, { text }) {
      state.searchText = text
    }
  },
  actions: {
    setSearch({ commit }, { text }) {
      commit({ type: 'setSearch', text })
    }
  }
})

export default store
