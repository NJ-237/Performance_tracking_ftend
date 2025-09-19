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

// import ShiftData from './components/ShiftData.vue'
// import { useAuthStore } from '../src/store/auth.js';
// Make Chart.js available globally
window.Chart = Chart;

//    // Initialize the auth store here
//     const authStore = useAuthStore();
//     authStore.initializeStore();

import App from './App.vue'
import { useAuthStore } from '../src/store/auth.js';

const app = createApp(App)
const pinia = createPinia()// new


// Initialize auth store after pinia is mounted
// const authStore = useAuthStore()
// authStore.initialize()

app.use(pinia)  // ✅ This line is essential , new
app.use(routes);

const authStore = useAuthStore();
authStore.initializeStore();
app.mount('#app')
// app.component('Shift-Data', ShiftData)


// async function handleExp() {

//     // Check if user is authenticated
//     if (!authStore.token) {
//         alert('Please login first!');
//         router.push('/login');
//         return;
//     }
//   successMessage.value = '';
//   errorMessage.value = '';
  
//   try {
//     await authStore.registerExp(expeditionData.value)
//     successMessage.value = 'Registration successful! Redirecting to report...'
//     // alert('Expedition data submitted successfully!');
//     // redirect after short delay so user can see message
//     setTimeout(() => {
//     //   router.push('/report')
//       modalInstance6.hide();
//     }, 1500)
//   } catch (err) {
//      console.error('Registration failed:', err);
//       // Handle specific backend errors
//       if (err.response && err.response.data) {
//       errorMessage.value = JSON.stringify(err.response.data);
//     } else {
//       errorMessage.value = 'Registration failed. Please try again.';
//     }
//   }
// }

// async function handleBroyeur(broyeurData, equipement_id, modalInstance) {
//   if (!authStore.token) {
//     errorMessage.value = 'Please login first!';
//     setTimeout(() => {
//       router.push('/login');
//     }, 1500);
//     return;
//   }

//   const payload = {
//     ...broyeurData,
//     shift: shiftData.value.shiftNumber,
//     date: selectedDate.value,
//     equipement_id: equipement_id,
//     extraction_silo: {
//       silo1: broyeurData.extraction_silo1,
//       silo2: broyeurData.extraction_silo2,
//       silo3: broyeurData.extraction_silo3,
//       silo4: broyeurData.extraction_silo4,
//       silo5: broyeurData.extraction_silo5,
//       silo6: broyeurData.extraction_silo6,
//       silo7: broyeurData.extraction_silo7,
//     },
//     ensilage_silo: {
//       silo1: broyeurData.ensilage_silo1,
//       silo2: broyeurData.ensilage_silo2,
//       silo3: broyeurData.ensilage_silo3,
//       silo4: broyeurData.ensilage_silo4,
//       silo5: broyeurData.ensilage_silo5,
//       silo6: broyeurData.ensilage_silo6,
//       silo7: broyeurData.ensilage_silo7,
//       silo8: broyeurData.ensilage_silo8,
//       silo9: broyeurData.ensilage_silo9,
//       silo10: broyeurData.ensilage_silo10,
//       silo11: broyeurData.ensilage_silo11,
//     }
//   };

//   try {
//     await authStore.registerBroyeur(payload);
//     successMessage.value = `BROYEUR-${equipement_id} data submitted successfully!`;
//     setTimeout(() => {
//       modalInstance.hide();
//     }, 1500);
//   } catch (err) {
//     console.error(`BROYEUR-${equipement_id} submission failed:`, err);
//     if (err.response && err.response.data) {
//       errorMessage.value = JSON.stringify(err.response.data);
//     } else {
//       errorMessage.value = `BROYEUR-${equipement_id} submission failed. Please try again.`;
//     }
//   }
// }

// async function handleBK1() {
//   handleBroyeur(broyeur1Data.value, 1, modalInstance1);
// }

// async function handleBK4() {
//   handleBroyeur(broyeur4Data.value, 4, modalInstance2);
// }

// async function handleBK5() {
//   handleBroyeur(broyeur5Data.value, 5, modalInstance3);
// }

// async function handleSecheur() {
//   if (!authStore.token) {
//     errorMessage.value = 'Please login first!';
//     setTimeout(() => {
//       router.push('/login');
//     }, 1500);
//     return;
//   }

//   const payload = {
//     ...dryerData.value,
//     shift: shiftData.value.shiftNumber,
//     date: selectedDate.value,
//   };

//   try {
//     await authStore.registerDryer(payload);
//     successMessage.value = 'SECHEUR data submitted successfully!';
//     setTimeout(() => {
//       modalInstance4.hide();
//     }, 1500);
//   } catch (err) {
//     console.error('SECHEUR submission failed:', err);
//     if (err.response && err.response.data) {
//       errorMessage.value = JSON.stringify(err.response.data);
//     } else {
//       errorMessage.value = 'SECHEUR submission failed. Please try again.';
//     }
//   }
// }

// async function handlePort() {
//   if (!authStore.token) {
//     errorMessage.value = 'Please login first!';
//     setTimeout(() => {
//       router.push('/login');
//     }, 1500);
//     return;
//   }

//   const payload = {
//     ...portData.value,
//     shift: shiftData.value.shiftNumber,
//     date: selectedDate.value,
//     ensilage_silo: {
//         silo1: portData.value.ensilage_silo1,
//         silo2: portData.value.ensilage_silo2,
//         silo3: portData.value.ensilage_silo3,
//         silo4: portData.value.ensilage_silo4,
//         silo5: portData.value.ensilage_silo5,
//         silo6: portData.value.ensilage_silo6,
//         silo7: portData.value.ensilage_silo7,
//         silo8: portData.value.ensilage_silo8,
//         silo9: portData.value.ensilage_silo9,
//         silo10: portData.value.ensilage_silo10,
//         silo11: portData.value.ensilage_silo11,
//     }
//   };

//   try {
//     await authStore.registerPort(payload);
//     successMessage.value = 'PORT data submitted successfully!';
//     setTimeout(() => {
//       modalInstance5.hide();
//     }, 1500);
//   } catch (err) {
//     console.error('PORT submission failed:', err);
//     if (err.response && err.response.data) {
//       errorMessage.value = JSON.stringify(err.response.data);
//     } else {
//       errorMessage.value = 'PORT submission failed. Please try again.';
//     }
//   }
// }