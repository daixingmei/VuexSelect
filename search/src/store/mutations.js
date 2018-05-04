import getters from './getters'

const state = {
    indexs: 0,

};
const mutations = {
    ShowIndex(state, index) {
        state.indexs = index
    },

};

export default {
    state,
    mutations,
    getters,
}
