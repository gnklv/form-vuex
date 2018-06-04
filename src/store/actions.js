export const SUBMIT_INFO_BASE = 'SUBMIT_INFO_BASE';

export default {
  [SUBMIT_INFO_BASE]: ({ commit }, data) => {
    commit('SET_INFO_BASE', data)
  }
}
