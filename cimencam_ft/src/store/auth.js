import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        access:null,
        loading: false,
        error: null
    }),
  actions: {

    // This action initializes the store by checking for a token
        initializeStore() {
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
        // Send the login request to your Django backend
        const response = await axios.post(
            'http://127.0.0.1:8000/api/token/', 
           
            // Make sure you send the username field
             {
        // username: credentials.username, // or credentials.email, depending on your backend
        username: credentials.username,// or credentials.email, depending on your backend
        password: credentials.password
      }

        );
   console.log('Login successful:', response.data);
        // Assuming your backend returns a token and user data on successful login
        const { user, access } = response.data;

        // Save the user and token to the Pinia store's state
        this.user = user;
        this.token = access;
    console.log(access)

        // Store the token in localStorage for persistent login sessions
        localStorage.setItem('token',this.token);
         // Inside login after saving token
        // axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
           axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        // Return a success indicator
        return true; 
    } catch (err) {
        // Handle login failure
        if (err.response && err.response.data) {
            // Log the specific error from the server
            // console.error('Login failed:', err.response.data);
            this.error = err.response.data;
        } else {
            console.error('Login failed:', 'An unexpected error occurred.');
            this.error = { detail: 'An error occurred while logging in.' };
        }
        // Return a failure indicator
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
    }
  },
 

  //handle shift actions part 1
    async registershift(shiftData) {
      this.loading = true;
      this.error = null;
      try {
        const response_shifts  = await axios.post(
          'http://127.0.0.1:8000/api/shifts/',
          {
            CRO1 : shiftData.CRO1,
            CRO2: shiftData.CRO2,
            Patroller1: shiftData.Patroller1,
            Patroller2: shiftData.Patroller2,
            CDQ: shiftData.CDQ,
            APP_ELEC: shiftData.APP_ELEC,
            APP_MECA: shiftData.APP_MECA,
            Laboratin1: shiftData.Laboratin1,
            Laboratin2: shiftData.Laboratin2,
 
          }
        );
        console.log('Registration successful:', response_shifts.data, response_shifts.status);
        console.log(response_shifts.data['id'])
         return true;
      
      } catch (error) {
                this.error = error.response?.data || { detail: 'Shift registration failed.' };
                console.error('Shift registration failed:', this.error);
                return false;     
               }
               finally {
                this.loading = false;
            }
    },




});

  