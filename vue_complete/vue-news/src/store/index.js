import Vuex from 'vuex';
import Vue from 'vue';
// import { fetchNewsList } from '../api/index';
// import { fetchJobsList} from '../api/index';
// import { fetchAskList } from '../api/index';
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
        userInfo: {},
        itemInfo: [],
        list: []
    },
    getters: {
        asks(state){
            return state.asks;
        }
    },
    mutations: {
        SET_NEWS(state, payload){
            state.news = payload;
        },
        SET_JOBS(state, payload){
            state.jobs = payload;
        },
        SET_ASKS(state, payload){
            state.asks = payload;
        },
        SET_USER(state, payload){
            state.userInfo = payload
        },
        SET_ITEM(state, payload){
            state.itemInfo = payload;
        },
        SET_LIST(state, payload){
            state.list = payload;
        }
    },
    actions: {
        FETCH_NEWS(context ){
            fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
        },
        //destructuring
        FETCH_JOBS({commit}){
            fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch(error => console.log(error))
        },
        FETCH_ASKS(context){
            fetchAskList()
            .then(response => {
                context.commit('SET_ASKS', response.data);
            })
            .catch(error => console.log(error))
        },
        FETCH_USER({commit}, payload){
            fetchUserInfo(payload)
            .then(({data}) => {
              commit('SET_USER', data);
            })
            .catch((error) => {
              console.log(error);
            })
        },
        FETCH_ITEM({commit}, payload){
            fetchItemInfo(payload)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        FETCH_LIST({commit}, pageName){
            fetchList(pageName)
            .then(({data}) => {
                commit('SET_LIST', data)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
})
