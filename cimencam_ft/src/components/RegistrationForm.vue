<template>
   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../../../../../../vendor/bootstrap5/js/bootstrap.bundle.min.js">
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                <!-- Card Container -->
                <div class="card shadow-lg border-0 rounded-4">
                    <div class="card-body p-5">
                        <!-- Logo and Title -->
                        <div class="text-center mb-4">
                            <div class=" rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 110px; height: 100px; ">
                            <!-- <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;"> -->
                                <!-- <i class="fas fa-industry fa-2x text-white"></i> -->
                                <img src="../assets/img/10_48_34_cimencam_logo.png">
                            </div>
                            <h2 class="card-title fw-bold text-primary">Create Your Account</h2>
                            <p class="text-muted">Join Cimencam's production tracking system</p>
                        </div>

                        <!-- Registration Form -->
                        <form @submit.prevent="handleReg()">
                            <!-- {% csrf_token %} -->
                            <div class="row">
                                <!-- Name Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="username" class="form-label">Name</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-user text-primary"></i>
                                        </span>
                                        <input type="text" id="username" class="form-control border-start-0" v-model="username" placeholder="Enter your username" required>
                                    </div>
                                </div>
                                
                                <!-- Password Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-lock text-primary"></i>
                                        </span>
                                        <input type="password" id="password" class="form-control border-start-0" v-model.trim="password" placeholder="Enter your password" required>
                                    </div>
                                </div>
                                
                                <!-- Phone Number Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="phone_number" class="form-label">Phone Number</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-phone text-primary"></i>
                                        </span>
                                        <input type="number" id="phone_number" class="form-control border-start-0" v-model="phone_number" placeholder="Enter your phone number" required>
                                    </div>
                                </div>
                                
                                <!-- Email Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-envelope text-primary"></i>
                                        </span>
                                        <input type="email" id="email" class="form-control border-start-0" v-model="email" placeholder="Enter your email" required>
                                    </div>
                                </div>
                                
                                <!-- Employee ID Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="employee_id" class="form-label">Employee ID</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-id-card text-primary"></i>
                                        </span>
                                        <input type="number" id="employee_id" class="form-control border-start-0" v-model="employee_id" placeholder="Enter your employee ID" required>
                                    </div>
                                </div>
                                
                                <!-- Service Location Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="Service" class="form-label">Service Location</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-map-marker-alt text-primary"></i>
                                        </span>
                                        <input type="text" id="Service" class="form-control border-start-0" v-model="service_location" placeholder="Enter your service location" required>
                                    </div>
                                </div>
                                
                                <!-- Gender Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="gender" class="form-label">Gender</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-venus-mars text-primary"></i>
                                        </span>
                                        <select id="gender" class="form-select border-start-0" v-model="gender" required>
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <!-- Position Field -->
                                <div class="col-md-6 mb-3">
                                    <label for="myOptions" class="form-label">Position</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0">
                                            <i class="fas fa-briefcase text-primary"></i>
                                        </span>
                                        <select id="myOptions" class="form-select border-start-0" v-model="role" required>
                                            <option value="">--Select Position--</option>
                                            <option value="cro">CRO</option>
                                            <option value="patroller">Patroller</option>
                                            <option value="dispatch">Dispatch</option>
                                            <option value="chef">Chef de Quart</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Messages -->
                            <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
                                <i class="fas fa-check-circle me-2"></i>{{ successMessage }}
                            </div>
                            <div v-if="errorMessage" class="alert alert-danger mt-3" role="alert">
                                <i class="fas fa-exclamation-circle me-2"></i>{{ errorMessage }}
                            </div>
                            
                            <!-- Submit Button -->
                            <div class="d-grid gap-2 mt-4">
                                <button type="submit" class="btn btn-primary btn-lg rounded-pill">
                                    <i class="fas fa-user-plus me-2"></i> Create Account
                                </button>
                            </div>
                            
                            <!-- Login Link -->
                            <div class="text-center mt-4">
                                <p class="mb-0">Already have an account? 
                                   <router-link class="nav-link text-decoration-none fw-semibold" to="/login">Sign in</router-link>
                                </p> 
                            </div>
                        </form>
                        
                        <!-- Footer -->
                        <div class="text-center mt-4 pt-3 border-top">
                            <small class="text-muted">
                                By registering, you agree to our <a href="#" class="text-decoration-none">Terms of Service</a> and <a href="#" class="text-decoration-none">Privacy Policy</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>


<script setup>

import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import routes from '@/router/routes'

// const routes = useRouter();  
const authStore = useAuthStore();

const username = ref('');
const email = ref('');
const password = ref('');
const phone_number = ref('');
const service_location = ref('');
const gender = ref('');
const role = ref('');
const employee_id = ref('');



const successMessage = ref('');
const errorMessage = ref('');

async function handleReg() {
  successMessage.value = '';
  errorMessage.value = '';
  try {
    await authStore.register({
    username: username.value,
    email: email.value, 
    password: password.value,
    phone_number: phone_number.value,
    service_location: service_location.value,
    gender: gender.value,
    role: role.value,
    employee_id: employee_id.value,   
  })
    successMessage.value = 'Registration successful! Redirecting to login...'
    // redirect after short delay so user can see message
    setTimeout(() => {
      routes.push('/login')
    }, 1500)
  } catch (err) {
     console.error('Registration failed:', err);
      // Handle specific backend errors
      if (err.response && err.response.data) {
      errorMessage.value = JSON.stringify(err.response.data);
    } else {
      errorMessage.value = 'Registration failed. Please try again.';
    }
    // errorMessage.value = 'Registration failed: ' + (err.response?.data || err.message || err)
  }
}


</script>   
  
<style>
.container {
   padding: 1px;
   }
</style>
