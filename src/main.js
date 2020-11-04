import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import SocialIcon from './components/Shared/SocialIcon'

const app = createApp(App);

app.component('social-icon', SocialIcon);

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        component: Portfolio
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contact',
        component: Contact
    }
    ],
    linkActiveClass: 'active'
  });
  
  app.use(router);

app.mount('#app')
