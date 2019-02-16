import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Signin from './views/SignInFlow/Signin';
import Request from './views/SignInFlow/Request';
import Recover from './views/SignInFlow/Recover';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/request',
            name: 'request',
            component: Request
        },
        {
            path: '/recover',
            name: 'recover',
            component: Recover
        },
    ]
});
