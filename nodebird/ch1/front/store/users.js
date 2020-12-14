export const state = () => ({
    me: null
})

export const mutations = {
    setMe(state,payload) {
        state.me = payload;
    }
}

export const actions = {
    //context is an object : { commit, dispatch, state, rootState, getters, rootGetters}
    //console.log(context) 해보기!
    signUp({commit}, payload) {
        commit('setMe', payload);
    },
    logIn({commit}, payload) {
        commit('setMe', payload);
    },
    logOut({commit}, payload) {
        commit('setMe', null);
    }
};