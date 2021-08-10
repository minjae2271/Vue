import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import CreateListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            //url address
            path: '/ask',
            //name
            name: "ask",
            //component that is shown = page
            component: AskView,
            // component: CreateListView('AskView')
            beforeEnter: (to, from, next) => {
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  bus.$emit('end:spinner');
                  next(); 
                })
                .catch((error) => {
                  console.error(error);
                })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: CreateListView('JobsView')
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  bus.$emit('end:spinner');
                  next(); 
                })
                .catch((error) => {
                  console.error(error);
                })
            }
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            // component: CreateListView('NewsView')
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  next(); 
                })
                .catch((error) => {
                  console.error(error);
                })
            }
        },
        {
            path: '/user',
            name: 'user',
            component: UserView
        },
        {
            path: '/item',
            name: 'item',
            component: ItemView
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
})