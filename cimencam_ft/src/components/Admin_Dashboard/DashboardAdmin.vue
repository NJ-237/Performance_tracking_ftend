<template>
  <div class="auth-container min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
      <!-- Login Section -->
      <div v-if="!isLoggedIn" class="login-form">
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Log In</h1>
        <p class="text-center text-gray-500 mb-8">Enter your credentials to access the app.</p>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-gray-700 font-semibold mb-1">Username</label>
            <input type="text" id="username" v-model="loginForm.username"
                   class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                   placeholder="Enter your username" required />
          </div>
          <div>
            <label for="password" class="block text-gray-700 font-semibold mb-1">Password</label>
            <input type="password" id="password" v-model="loginForm.password"
                   class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                   placeholder="Enter your password" required />
          </div>
          <button type="submit"
                  class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
            Log In
          </button>
        </form>
        <p v-if="loginError" class="text-red-500 text-sm mt-4 text-center">{{ loginError }}</p>
      </div>

      <!-- Dashboard Section -->
      <div v-else class="dashboard">
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-2">Welcome!</h1>
        <p class="text-center text-gray-600 mb-6">You are logged in as a **{{ userRole }}**.</p>
        <div v-if="userRole === 'admin'">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Admin Dashboard</h2>
          <div class="bg-blue-100 p-4 rounded-lg text-blue-800 border-l-4 border-blue-500">
            You have full access to manage shifts and users.
          </div>
        </div>
        <div v-else-if="userRole === 'cro'">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">CRO Dashboard</h2>
          <div class="bg-green-100 p-4 rounded-lg text-green-800 border-l-4 border-green-500 mb-6">
            You can fill in shift data. Use the dropdown below.
          </div>
          
          <div class="space-y-4">
            <div>
              <label for="cro_select" class="block text-gray-700 font-semibold mb-1">
                Select your name
              </label>
              <select id="cro_select" v-model="selectedCro"
                      class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="" disabled>-- Choose a CRO --</option>
                <option v-for="cro in croList" :key="cro.id" :value="cro.username">
                  {{ cro.username }}
                </option>
              </select>
            </div>
            <div class="mt-4 text-center">
              <p v-if="selectedCro" class="text-gray-700 font-semibold">
                Selected CRO: <span class="text-blue-600">{{ selectedCro }}</span>
              </p>
              <button @click="submitShiftData"
                      class="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
                Submit Shift Data
              </button>
            </div>
          </div>
        </div>
        <button @click="handleLogout"
                class="mt-8 w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// --- Data & State Management ---
const router = useRouter();
const loginForm = ref({ username: '', password: '' });
const loginError = ref('');
const isLoggedIn = ref(false);
const userRole = ref('');
const croList = ref([]);
const selectedCro = ref('');

// --- Token and Headers Configuration ---
const API_URL = 'http://your-django-api-url.com/api/'; // Replace with your Django API URL

// Function to set the Authorization header for all future requests
const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// --- Authentication Functions ---
const handleLogin = async () => {
  loginError.value = '';
  try {
    // 1. Send credentials to Django backend
    const response = await axios.post(`${API_URL}login/`, {
      username: loginForm.value.username,
      password: loginForm.value.password,
    });

    const { token, role } = response.data; // Assumes backend sends token and role

    // 2. Store the token and role
    localStorage.setItem('userToken', token);
    localStorage.setItem('userRole', role);

    // 3. Set the Authorization header for future requests
    setAuthHeader(token);

    // 4. Update state to show dashboard
    isLoggedIn.value = true;
    userRole.value = role;

    // 5. Redirect based on role (optional, could be handled by router guards)
    if (role === 'admin') {
      // router.push('/admin-dashboard');
      // For this single-file app, we just show the admin view
    } else if (role === 'cro') {
      // router.push('/cro-dashboard');
      // For this single-file app, we just show the cro view
    }

  } catch (err) {
    console.error("Login failed:", err);
    loginError.value = "Login failed. Please check your username and password.";
  }
};

const handleLogout = () => {
  // Clear token and state
  localStorage.removeItem('userToken');
  localStorage.removeItem('userRole');
  setAuthHeader(null);
  isLoggedIn.value = false;
  userRole.value = '';
  router.push('/login'); // Redirect to login page
};

// --- Shift API Dropdown Logic ---
const fetchCroList = async () => {
  try {
    // Send a GET request to the Django endpoint
    const response = await axios.get(`${API_URL}cros/`);
    croList.value = response.data;
  } catch (err) {
    console.error("Failed to fetch CRO list:", err);
    // Handle error, e.g., show an error message to the user
  }
};

// A simulated function to handle submitting the shift data
const submitShiftData = () => {
  if (selectedCro.value) {
    console.log(`Submitting shift data for CRO: ${selectedCro.value}`);
    // Here you would make a POST request to your Django API
    // axios.post(`${API_URL}shifts/`, { cro: selectedCro.value, /* other shift data */ });
    alert(`Shift data submitted for ${selectedCro.value}! (This is a mock action)`);
  } else {
    alert('Please select a CRO from the dropdown.');
  }
};

// --- Lifecycle Hooks ---
onMounted(() => {
  // On component mount, check if a token and role already exist in localStorage
  const token = localStorage.getItem('userToken');
  const role = localStorage.getItem('userRole');
  if (token && role) {
    isLoggedIn.value = true;
    userRole.value = role;
    setAuthHeader(token);
    // If the user is a CRO, fetch the list of CROs for the dropdown
    if (role === 'cro') {
      fetchCroList();
    }
  }
});
</script>

<style scoped>
/* Scoped styles using Tailwind-like classes for a clean look */
.auth-container {
  font-family: 'Inter', sans-serif;
}
.card {
  border-radius: 1rem;
}
input, select {
  border-radius: 0.5rem;
}
button {
  border-radius: 9999px; /* Rounded-pill effect */
}
</style>
