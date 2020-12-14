export const state = () => ({
    mainPosts:[]
})

export const mutations = {
    addPost(state, payload){
        state.mainPosts.unshift(payload);
    }
}

export const actions = {
    add({commit}, payload){
        commit('addPost', payload);
    }
}