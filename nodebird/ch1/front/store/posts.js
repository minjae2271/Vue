export const state = () => ({
    mainPosts:[]
})

export const mutations = {
    addPost(state, payload){
        state.mainPosts.unshift(payload);
    },
    removePost(state, payload){
        const index = state.mainPosts.findIndex((element) => element.id === payload.id)
        state.mainPosts.splice(index,1)
    }
}

export const actions = {
    add({commit}, payload){
        commit('addPost', payload);
    },
    remove({commit}, payload){
        commit('removePost', payload);
    }
}