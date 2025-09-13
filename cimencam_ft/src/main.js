// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS bundle (optional, needed if you use components like modals, dropdowns, tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import FontAwesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css'


import { createApp } from 'vue' // Not to include the src link of vue.global.js where the components files are , at the level of script 
// import { createRouter, createWebHistory } from 'vue-router' // before adding this command i had to install the router using npm install vue-router@4 and now paste this line
import routes from './router/routes.js'

import Chart from 'chart.js/auto'
import { createPinia } from 'pinia'// new
    // import { useAuthStore } from './store/auth.js';

import ShiftData from './components/ShiftData.vue'
// import { useAuthStore } from '../src/store/auth.js';
// Make Chart.js available globally
window.Chart = Chart;

//    // Initialize the auth store here
//     const authStore = useAuthStore();
//     authStore.initializeStore();

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()// new


// Initialize auth store after pinia is mounted
// const authStore = useAuthStore()
// authStore.initialize()

app.use(pinia)  // ✅ This line is essential , new
app.use(routes);
app.mount('#app')
app.component('Shift-Data', ShiftData)
