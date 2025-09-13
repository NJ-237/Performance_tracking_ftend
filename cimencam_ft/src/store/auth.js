import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => {
    const tokenFromStorage = localStorage.getItem('token');
    const userIdFromStorage = localStorage.getItem('userId');
    console.log('Initializing store with token from localStorage:', tokenFromStorage);
    
    return {
        user: null,
        userId: userIdFromStorage, // Add this
        token: tokenFromStorage,
        access: null,
        loading: false,
        error: null
    }
},

// Add this getter // new
    getters: {
         isAuthenticated: (state) => {
        const token = state.token;
        return !!token && token !== 'undefined' && token !== 'null' && typeof token === 'string';
    }
    },
  actions: {


          // In your auth store, add a method to clean corrupted tokens
      cleanCorruptedToken() {
          if (this.token === 'undefined' || this.token === 'null') {
              this.token = null;
              localStorage.removeItem('token');
              delete axios.defaults.headers.common['Authorization'];
              console.log('Cleaned corrupted token');
          }
      },

    // This action initializes the store by checking for a token
        initializeStore() {
          // this.token = localStorage.getItem('token');
            if (this.token) {
                // If a token exists, set the Authorization header for all future requests
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            } else {
                // If no token exists, remove the header just in case
                delete axios.defaults.headers.common['Authorization'];
            }
        },


    async register(userData) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/register/',
          {
            username: userData.username,
            email: userData.email,
            password: userData.password,
 
          }
        );
        console.log('Registration successful:', response.data, response.status);
        console.log(response.data['id'])
          if (response.status === 201) {
        // if (String(response.status) === 201 ){
          try {
        const response_profile = await axios.put(
          `http://127.0.0.1:8000/api/profile/${response.data.id}`,
          // `http://127.0.0.1:8000/api/profile/${response.data['id']}`,
          {
            user: response.data.user,
            service_location: userData.service_location,
            role: userData.role,
            employee_id: userData.employee_id,
            phone_number:userData.phone_number,
            gender: userData.gender,
          }
        );
         // If we reach this point, both API calls were successful.
            console.log('Profile creation successful:', response_profile.data);
            return true; // Signal a full success
        
       

      } catch (profileError) {

         // If the profile creation fails
            this.error = profileError.response?.data || { detail: 'Profile creation failed.' };
            console.error('Profile creation failed:', this.error);
            return false; // Signal failure
          }
        } else {
          // If the user registration itself did not return a 201 status
          this.error = response.data || { detail: 'User registration failed with an unexpected status.' };
          return false;
        }
        // console.error('Registration failed:', error.response_profile?.data || error.message)
      } catch (error) {
        // Catch any errors from the initial user registration API call
        this.error = error.response?.data || { detail: 'User registration failed. Please check your information and try again.' };
        console.error('User registration failed:', this.error);
        return false; // Signal failure
      } finally {
        this.loading = false;
      }
    
    },
  


  

    // LOGIN ACTION
  async login(credentials) {
    this.loading = true;
    this.error = null;

    

    try {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/token_auth/', 
            {
                username: credentials.username,
                password: credentials.password
            }
        );

        console.log('Login response:', response.data);
        
        let accessToken;
        let userData;
        
        // Handle different response formats
        if (response.data.access) {
            // Format: { access: 'token', refresh: 'token' }
            accessToken = response.data.access;
            userData = response.data.user || null;
        } else if (response.data.token) {
            // Format: { token: 'token', user: {...} }
            accessToken = response.data.token;
            userData = response.data.user || null;
        } else if (response.data) {
            // Format: just the token string
            accessToken = response.data;
            userData = null;
        } else {
            throw new Error('Invalid response format from server');
        }

        // Validate token
        if (!accessToken || typeof accessToken !== 'string') {
            throw new Error('Invalid token received from server');
        }
     
        // Save the user and token
        this.user = userData;
        this.token = accessToken;
        
        // Store in localStorage
        localStorage.setItem('token', accessToken);
        
        // Set axios header
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        return true; 
        
    } catch (err) {
        console.error('Login error:', err);
        
        if (err.response && err.response.data) {
            this.error = err.response.data;
        } else {
            this.error = { detail: err.message || 'An unexpected error occurred.' };
        }
        
        return false; 
    } finally {
        this.loading = false;
    }
},


    // LOGOUT ACTION
    logout() {
      this.user = null;
      this.token = null;
      this.error = null
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    },
 
  //handle shift actions part 1
async registerShift(shiftData) {
      this.loading = true;
      this.error = null;
        
     // A simpler token check, as Pinia state is a single source of truth
    if (!this.token) {
        this.error = { detail: 'Not authenticated. Please log in first.' };
        this.loading = false;
        return false;
    }
     
      try {
        // Send the data to the backend
        const response_shifts = await axios.post(
            'http://127.0.0.1:8000/api/shifts/',
            shiftData
        );
        
        console.log('Shift registration successful!', response_shifts.data);
        
        return true;
    } catch (error) {
        console.error('Shift registration failed:', error.response?.data || error);
        this.error = error.response?.data || { detail: 'Shift registration failed.' };
        return false;
    } finally {
        this.loading = false;
    }
    },


     async registerExp(expData) {
      this.loading = true;
      this.error = null;

       // Clean any corrupted token first
    this.cleanCorruptedToken();
    
    // Get token with proper validation
    let token = this.token;
    
    // If token is corrupted, try localStorage
    if (!token || token === 'undefined' || token === 'null') {
        token = localStorage.getItem('token');
        // If localStorage also has corrupted token, clean it
        if (token === 'undefined' || token === 'null') {
            localStorage.removeItem('token');
            token = null;
        }
    }
    
    console.log('Validated token for expedition:', token);


            if (!this.token) {
                this.error = { detail: 'Not authenticated. Please log in first.' };
                this.loading = false;
                return false;
            }
      
      try {
         const response = await axios.post(
                    'http://127.0.0.1:8000/api/expedition/',
                    expData, // The data is passed directly without unwrapping .value
               
                      {
                // timeout: 10000, // 10 second timeout
               headers: {
                    'Authorization': `Bearer ${token}`, // Use the validated token variable
                    // 'Content-Type': 'application/json',
                }
            }
                  );
          console.log('Expedition registration successful:', response.data, response.status);
                return true;
            } catch (error) {
                 // More robust error handling
        if (error.response) {
            // Server responded with error status
            this.error = error.response.data || { 
                detail: 'Expedition registration failed. Please check your information and try again.' 
            };
        } else if (error.request) {
            // Request made but no response received
            this.error = { detail: 'Network error: Unable to connect to the server. Please check your connection.' };
        } else {
            // Something else went wrong
            this.error = { detail: 'An unexpected error occurred: ' + error.message };
        }
        
        console.error('Expedition registration failed:', this.error, error);
        return false;
    } finally {
        this.loading = false;
    }
  },

 }
});

  