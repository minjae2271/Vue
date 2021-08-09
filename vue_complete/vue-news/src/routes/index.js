import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import CreateListView from '../views/CreateListView';

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
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: CreateListView('JobsView')
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            // component: CreateListView('NewsView')
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