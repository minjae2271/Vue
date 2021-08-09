export const state = () => ({
    me: null,
    //숙제 => 팔로워, 팔로잉 삭제 구현
    followingList: [{id:1, nickname:"Bo"},{id:2, nickname:"Bu"}],
    followerList: [{id:1, nickname:"Do"},{id:2, nickname:"Du"}],
})

export const mutations = {
    setMe(state,payload) {
        state.me = payload;
    },
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname
    },
    following(state, payload){
        state.me.Followings.push({id: payload.userId})
    },
    addFollower(state, payload){
        state.followerList.push(payload)
    },
    removeFollowing(state, payload){
        const index = state.followingList.findIndex((element) => element.id === payload.userId);
        state.me.Followings.splice(index,1)
    },
    removeFollower(state, payload){
        const index = state.followerList.findIndex((element) => element.id === payload.id);
        state.followerList.splice(index,1)
    },
}

export const actions = {
    //context is an object : { commit, dispatch, state, rootState, getters, rootGetters}
    //console.log(context) 해보기!
    loadUser({commit}, payload){
        this.$axios.get('/user', {
            withCredentials: true
        })
        .then((res) => {
            commit('setMe', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    signUp({commit}, payload) {
        // console.log(this.$axios);
        this.$axios.post("/user", {
            email: payload.email,
            nickname: payload.nickname,
            password: payload.password,
        }, {
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            commit('setMe', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    logIn({commit}, payload) {
        this.$axios.post("/user/login", {
            email: payload.email,  
            password: payload.password,
        }, {
            withCredentials: true
        })
        .then((res) => {
            console.log(res.data);
            commit('setMe', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    logOut({commit}, payload) {
        this.$axios.post("/user/logout", {

        }, {
            withCredentials: true
        })
        .then((data) => {
            console.log(data);
            commit('setMe', null);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    changeNickname({commit}, payload) {
        commit('changeNickname', payload)
    },
    addFollowing({commit}, payload){
        commit('addFollowing', payload)
    },
    addFollower({commit}, payload){
        commit('addFollower', payload)
    },
    removeFollowing({commit}, payload){
        commit('removeFollowing', payload)
    },
    removeFollower({commit}, payload){
        commit('removeFollower', payload)
    },
    follow({commit}, payload){
        this.$axios.post(`/user/${payload.userId}/follow`, {

        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('following', {
                userId: payload.userId
            })
        })
        .catch((err) => {
            console.error(err);
        })
    },
    unfollow({commit}, payload){
        this.$axios.delete(`/user/${payload.userId}/follow`, {
            withCredentials: true,
        })
        .then((res) => {
            commit('removeFollowing', {
                userId: payload.userId
            })
        })
        .catch((err) => {
            console.error(err);
        })
    }
};