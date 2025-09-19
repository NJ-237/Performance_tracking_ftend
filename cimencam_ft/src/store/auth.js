import { defineStore } from 'pinia'
import axios from 'axios'
import routes from '@/router/routes';
// import api from '../services/Api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
        user: null, 
        lastShiftId: parseInt(String)// New state property to hold the last created shift I;

    }),
  actions: {


    //       // In your auth store, add a method to clean corrupted tokens
    //   cleanCorruptedToken() {
    //       if (this.token === 'undefined' || this.token === 'null') {
    //           this.token = null;
    //           localStorage.removeItem('token');
    //           delete axios.defaults.headers.common['Authorization'];
    //           console.log('Cleaned corrupted token');
    //       }
    //   },

     // This is the CRITICAL action to call when your app loads
       initializeStore() {
            try {
                const token = localStorage.getItem('token');
                const user = localStorage.getItem('user');
                const lastShiftId = localStorage.getItem('lastShiftId'); // Retrieve the last shift ID
                if (token && user) {
                    this.token = token;
                    this.user = JSON.parse(user);
                    this.isAuthenticated = true;
                    // Set the default header for ALL subsequent Axios requests
                    axios.defaults.headers.common['Authorization'] = `Token ${this.token}`;
                    console.log('Auth store initialized. Token and user loaded.');
                } else {
                    this.token = null;
                    this.user = null;
                    this.isAuthenticated = false;
                    delete axios.defaults.headers.common['Authorization'];
                }

                //  Set the lastShiftId from localStorage if it exists
                if (lastShiftId) {
                    this.lastShiftId = lastShiftId;
                }
            } catch (e) {
                console.error('Failed to initialize auth store:', e);
            }
        },

// using the logic of registration how can i make that when i register a shift , it data is been saved in the database with his id been generated now how can i take that recent shift id and save it on my localStorage
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
//   async login(credentials) {
//     this.loading = true;
//     this.error = null;

    

//     try {
//         const response = await axios.post(
//             'http://127.0.0.1:8000/api/token_auth/', 
//             {
//                 username: credentials.username,
//                 password: credentials.password
//             }
//         );

//         console.log('Login response:', response.data);
        
//         let accessToken;
//         let userData;
        
//         // Handle different response formats
//         if (response.data.access) {
//             // Format: { access: 'token', refresh: 'token' }
//             accessToken = response.data.access;
//             userData = response.data.user || null;
//         } else if (response.data.token) {
//             // Format: { token: 'token', user: {...} }
//             accessToken = response.data.token;
//             userData = response.data.user || null;
//         } else if (response.data) {
//             // Format: just the token string
//             accessToken = response.data;
//             userData = null;
//         } else {
//             throw new Error('Invalid response format from server');
//         }

//         // Validate token
//         if (!accessToken || typeof accessToken !== 'string') {
//             throw new Error('Invalid token received from server');
//         }
     
//         // Save the user and token
//         this.user = userData;
//         this.token = accessToken;
        
//         // Store in localStorage
//         localStorage.setItem('token', accessToken);
        
//         // Set axios header
//         axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

//         return true; 
        
//     } catch (err) {
//         console.error('Login error:', err);
        
//         if (err.response && err.response.data) {
//             this.error = err.response.data;
//         } else {
//             this.error = { detail: err.message || 'An unexpected error occurred.' };
//         }
        
//         return false; 
//     } finally {
//         this.loading = false;
//     }
// },


 // This action handles the user login
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
                
                this.token = response.data.token;
                this.user = response.data.user; // Assuming your API returns user data including the role
                this.isAuthenticated = true;

                // Save the token and user data to local storage
                localStorage.setItem('token', this.token);
                localStorage.setItem('user', JSON.stringify(this.user));
                
                // Set the default header for ALL subsequent Axios requests
                axios.defaults.headers.common['Authorization'] = `Token ${this.token}`;
                
                console.log('Login successful. Token and user saved.');
                // Redirect based on the user's role
                if (this.user?.role === 'admin') {
                    routes.push('/DashboardAdmin');
                } else {
                    routes.push('/Dashboard');
                }
            } catch (error) {
                this.error = error.response?.data || { detail: 'Login failed.' };
                console.error('Login failed:', this.error);
            } finally {
                this.loading = false;
            }
        },


    // LOGOUT ACTION
    logout() {
    this.user = null;
          this.token = null;
          this.error = null;
          localStorage.removeItem('token');
          // localStorage.removeItem('lastShiftId'); // Clear the shift ID on logout
          delete axios.defaults.headers.common['Authorization'];
    },
 
  //handle shift actions part 1
async registerShift(shiftFormData) {
    this.loading = true;
    this.error = null;

  //  if (!this.isAuthenticated) {
  //               this.error = { detail: 'Not authenticated. Please log in first.' };
  //               this.loading = false;
  //               return false;
  //           }

  //           return axios.post('http://127.0.0.1:8000/api/shifts/', shiftFormData)
  //               .then(response => {
  //                   console.log('Shift registration successful!', response.data);
  //                   if (response.data && response.data.id) {
  //                       localStorage.setItem('shiftId', response.data.id);
  //                       console.log('Shift ID saved to localStorage:', response.data.id);
  //                   }
  //                   this.lastShiftId = response.data.id;
  //                   return true;
  //               })
  //               .catch(error => {
  //                   console.error('Shift registration failed:', error.response?.data || error);
  //                   this.error = error.response?.data || { detail: 'Shift registration failed.' };
  //                   return false;
  //               })
  //               .finally(() => {
  //                   this.loading = false;
  //               });


  // try {
          // Await the POST request
          
          const response = await axios.post('http://127.0.0.1:8000/api/shifts/', shiftFormData);

           //Assuming a successful response returns the created object with an ID
        if (response.status === 201) {
          const shiftId = response.data.id; // Get the ID from the response data

        // Save the ID to the store's state
        this.lastShiftId = shiftId;

        // Save the ID to localStorage
      localStorage.setItem('lastShiftId', shiftId);

        console.log('Shift registration successful!', response.data);
        console.log('Saved new shift ID to localStorage:', shiftId);
        return true;
     }
     else {
          // Handle non-201 status codes
          this.error = response.data || { detail: 'Shift registration failed with an unexpected status.' };
          return false;
     }
        // } catch (error) {

        // // Handle network or API errors

        // this.error = error.response?.data || { detail: 'Shift registration failed.' };
        // console.error('Shift registration failed:', this.error);
        // // return false;
        // return Promise.reject(this.error);

        // } finally {

        // this.loading = false;
        // }

},

  //handle Expedition actions part 1
async registerExpedition(expeditionData) {
    this.loading = true;
    this.error = null;
 
            const lastShiftId = localStorage.getItem('lastShiftId'); // Or any key you saved earlier

           const response = await axios.post('http://127.0.0.1:8000/api/expedition/',  expeditionData, lastShiftId )
                if (response.status === 201) {

            console.log('Expedition registration successful!', response.data);
            
            return true;
        }
        else {
              // Handle non-201 status codes
              this.error = response.data || { detail: 'Expedition registration failed with an unexpected status.' };
              return false;
        }


},

  //handle Expedition actions part 1
async registerDryer(dryerData) {
    this.loading = true;
    this.error = null;
 
            const lastShiftId = localStorage.getItem('lastShiftId'); // Or any key you saved earlier
             if (!lastShiftId) {
            this.error = { detail: 'No shift ID found. Please register a shift first.' };
            this.loading = false;
            return false;
        }

  
          dryerData['shift']=parseInt(localStorage.getItem('lastShiftId'))
          alert(dryerData['shift'], typeof dryerData['shift'])
           const response = await axios.post("http://127.0.0.1:8000/api/dryer/",  dryerData)
              if (response.status === 201) {

                console.log('Dryer registration successful!', response.data);
                
                return true;
              }
              else {
                // Handle non-201 status codes
                this.error = response.data || { detail: 'Dryer registration failed with an unexpected status.' };
                return false;
              }
}


}
});
