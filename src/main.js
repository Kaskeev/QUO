import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
import Contacts from './components/Contacts.vue'
import Home from './components/Home.vue'
import Scenario from './components/Scenario.vue'
import Analytics from './components/Analytics.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
    },
    {
      path: '/scenario',
      name: 'scenario',
      component: Scenario,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics,
    },
  ],
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount('#app')
