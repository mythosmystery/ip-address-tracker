import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'

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
  },
  modules: {
    data
  }
})

export default store
