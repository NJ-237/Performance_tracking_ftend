import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null
    }),
     actions: {
    async register(userData) {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/authentication/register/',
          {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            phone_number: userData.phone_number,
            service_location: userData.service_location,
            position: userData.position,
            employee_id: userData.employee_id,
            gender: userData.gender
          }
        )
        console.log('Registration successful:', response.data)
      } catch (error) {
        console.error('Registration failed:', error.response?.data || error.message)
      }
    },

    // LOGIN ACTION
    async login(credentials) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/authentication/login/',
          credentials
        );

        // Save user and token
        this.user = response.data.user;
        this.token = response.data.token;

        // Store token in localStorage for persistence
        localStorage.setItem('token', this.token);

        return true; // Success
      } catch (err) {
        if (err.response && err.response.data) {
          this.error = err.response.data;
        } else {
          this.error = { detail: 'An error occurred while logging in.' };
        }
        return false; // Failure
      } finally {
        this.loading = false;
      }
    },

    // LOGOUT ACTION
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    }
  }
});

  