<template>
    <form action="" @submit.prevent="handleProfile()" class="mt-3 mx-auto w-50 bg-white p-3 rounded">
        <div v-if="isVisible" class="popup-overlay">
            <div class="popup-content">
                <h1 class="mt-3">Verify your Profile informations for more confirmations</h1>
                    <div class="form-group mt-2">
                        <label for="">Role:</label>
                        <input type="text" name="role" class="form-control" v-model="role" placeholder="Enter your role" required>
                    </div>

                    <div class="form-group mt-2">
                        <label for="">Service_location</label>
                        <input type="text" name="service_location" v-model="service_location" class="form-control" placeholder="Enter your service" required>
                    </div>

                    <div class="form-group mt-2">
                        <label for="">Employee_id</label>
                        <input type="number" name="employee_id" v-model="employee_id" class="form-control" placeholder="Enter your ID" required>
                    </div>

                     <div class="popup-actions">
                        <button @click="confirmAction">Proceed to Dashboard</button>
                        <button @click="cancelAction">Cancel</button>
                     </div>
                    <!-- <button id="btn" class="btn btn-dark mt-3">submit</button> -->

                <!-- <P> Already have an account ? <router-link to="/Dashboard">Login Here</router-link></P> -->
            </div>     
        </div>
    </form>                 
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import { defineProps, defineEmits } from 'vue';

// import routes from '@/router/routes'

// // export default {
//     props: ['isVisible'],
//     emits: ['proceed', 'close'],
// // };

// / Define props for the pop-up
defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
//   message: {
//     type: String,
//     required: true,
//   },
});



// Function to emit the 'close' event
const emit = defineEmits(['confirmed', 'cancelled']);

const confirmAction = () => {
  emit('confirmed');
};

const cancelAction = () => {
  emit('cancelled');
};

const routes = useRouter();  
const authStore = useAuthStore();

const service_location = ref('');
const role = ref('');
const employee_id = ref('');



const successMessage = ref('');
const errorMessage = ref('');

async function handleProfile() {
  successMessage.value = '';
  errorMessage.value = '';
  try {
    await authStore.register({
    service_location: service_location.value,
    role: role.value,
    employee_id: employee_id.value,   
  })
    successMessage.value = 'Registration successful! Redirecting to Dashboard...'
    // redirect after short delay so user can see message
    setTimeout(() => {
      routes.push('/Dashboard')
    }, 1500)
  } catch (err) {
     console.error('Registration failed:', err);
      // Handle specific backend errors
      if (err.response && err.response.data) {
      errorMessage.value = JSON.stringify(err.response.data);
    } else {
      errorMessage.value = 'Registration failed. Please try again.';
    }
  }
}
</script>




<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>