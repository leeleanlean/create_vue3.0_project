export default {
  state: {
    collapse: false
  },
  mutations: {
    'COMMON-CHANGE-COLLAPSE' (state: { collapse: boolean }) {
      state.collapse = !state.collapse
    }
  },
  actions: {
    'common-change-collapse' ({ commit }) {
      commit('COMMON-CHANGE-COLLAPSE')
    }
  }
}
