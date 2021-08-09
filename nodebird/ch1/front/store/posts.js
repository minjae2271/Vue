export const state = () => ({
    mainPosts:[],
    hasMorePost: true,
    imagePaths: [],
})

let totalPosts = 30;
let limit = 10;

export const mutations = {
    addPost(state, payload){
        state.mainPosts.unshift(payload);
        state.imagePaths = [];
    },
    removePost(state, payload){
        const index = state.mainPosts.findIndex((element) => element.id === payload.postId)
        state.mainPosts.splice(index,1)
    },
    addComment(state, payload){
        const index = state.mainPosts.findIndex((element) => element.id === payload.postId)
        state.mainPosts[index].comments.unshift(payload)
    },
    loadComments(state, payload){
        const index = state.mainPosts.findIndex((element) => element.id === payload.postId)
        state.mainPosts[index].comments=payload;
    },
    loadPosts(state, payload){
        // const diff = totalPosts - state.mainPosts.length; //아직 안불러온 게시글 수
        // const fakePosts = Array(diff > limit ? limit : diff).fill().map(v => ({
        //     id: Math.random().toString(),
        //     User: {
        //         id:1,
        //         nickname: "키드모"
        //     },
        //     content: `hello infinite scroll ${Math.random()}`,
        //     images: [],
        //     comments: [],
        //     createdAt: Date.now()
        // }));
        state.mainPosts = state.mainPosts.concat(payload);
        state.hasMorePost = payload.length === limit;
    },
    concatImagePaths(state, payload){
        state.imagePaths = state.imagePaths.concat(payload);
    },
    removeImagePath(state, payload){
        state.imagePaths.splice(payload, 1);
    },
    likePost(state, payload){
        console.log(payload);
        const index = state.mainPosts.findIndex((element) => element.id === payload.postId);
        state.mainPosts[index].Likers.push({
            id: payload.userId
        })
    },
    unlikePost(state, payload){
        const index = state.mainPosts.findIndex((element) => element.id === payload.postId);
        const userIndex = state.mainPosts[index].Likers.findIndex((element) => element.id === payload.userId);
        state.mainPosts[index].Likers.splice(userIndex, 1);
    }
}

export const actions = {
    add({commit, state}, payload){
        this.$axios.post('/post', {
            content: payload.content,
            image: state.imagePaths,
        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            commit('addPost', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    remove({commit}, payload){
        this.$axios.delete(`/post/${payload.postId}`, {
            withCredentials: true,
        })
        .then(() => {
            commit('removePost', payload);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    addComment({commit}, payload){
        this.$axios.post(`/post/${payload.postId}/comment`, {
            content: payload.content
        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('addComment', res.data);
        })
        .catch((err) => {
            //숙제 -> 사용자 입장에서 작성해보기.
            console.error(err);
        })
    },
    loadComments({commit, state}){
        this.$axios.get(`/post/${payload.postId}/comments`)
        .then((res) => {
            commit('loadComments', res.data);
        })
        .catch((err) => {
            //숙제 -> 사용자 입장에서 작성해보기.
            console.error(err);
        })
    },
    loadPosts({commit, state}){
        if(state.hasMorePost){
            this.$axios.get(`/posts/?offset=${state.mainPosts.length}&limit=10`)
            .then((res) => {
                commit('loadPosts', res.data)
            })
            .catch((err) => {
                //숙제 -> 사용자 입장에서 작성해보기.
                console.error(err);
            })
        }
    },
    uploadImages({commit}, payload){
        this.$axios.post('/post/images', payload, {
            withCredentials: true,
        })
        .then((res) => {
            commit('concatImagePaths', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    retweet({commit}, payload){
        this.$axios.post(`post/${payload.postId}/retweet`, {

        }, {
            withCredentials: true,
        })
        .then((res) => {
            commit('addPost', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    likePost({commit}, payload){
        this.$axios.post(`post/${payload.postId}/like`, {

        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            commit('likePost', {
                userId: res.data.UserId,
                postId: payload.postId,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    },
    unlikePost({commit}, payload){
        this.$axios.delete(`post/${payload.postId}/like`, { //delete는 data 부분 없음!!!
            withCredentials: true,
        })
        .then((res) => {
            commit('unlikePost', {
                userId: res.data.UserId,
                postId: payload.postId,
            });
        })
        .catch((err) => {
            console.error(err);
        })
    },
}