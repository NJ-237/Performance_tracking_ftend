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


// Make Chart.js available globally
window.Chart = Chart;


import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()// new

app.use(pinia)  // ✅ This line is essential , new
app.use(routes);
app.mount('#app')
