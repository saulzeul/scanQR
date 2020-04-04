import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resultQR: '',
    inputScanQR: false,
    modalScanQR: false
  },
  mutations: {
    showInputScanQR (state) {
      state.inputScanQR = true
    },
    showModalScanQR (state) {
      state.modalScanQR = true
    },
    closeInputScanQR (state) {
      state.inputScanQR = false
    },
    closeModalScanQR (state) {
      state.modalScanQR = false
    }    
  },
  actions: {
    showInputScanQR ({ commit }) {
      commit('showInputScanQR')
    },
    showModalScanQR ({commit}) {
      commit('showModalScanQR')
    },
    closeInputScanQR ({ commit }) {
      commit('closeInputScanQR')
    },
    closeModalScanQR ({commit}) {
      commit('closeModalScanQR')
    }    
  },
  modules: {
  }
})
