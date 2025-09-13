<template>
      <form action="" @submit.prevent="handleshift()">       
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">
                            <i class="fas fa-edit me-2"></i> 
                            {{ modalTitle }} - Shift Report
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="report-header">
                            <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                        </div>
                                    
                        <div class="report-body">
                            <h3 class="section-title"><i class="fas fa-user me-2"></i>Shift Report</h3>
                            <button class="btn btn-add" @click="addRow('cro')">
                                <i class="fas fa-plus me-1"></i> Add New CRO Row
                            </button>
                        
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>CRO 1</th>
                                        <th>CRO 2</th>
                                        <th>CDQ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                          <select id="cro1" v-model="CRO1"  class="form-select" required>
                                            <option value="" disabled>Select a CRO</option>
                                             <option v-for="cro in cros" :key="cro.user__id" :value="cro.user__username">
                                                {{ cro.user__username }}
                                            </option>
                                          </select>
                                          
                                        </td>
                                        <td>
                                          <select id="cro1" v-model="CRO2"  class="form-select" required>
                                            <option value="" disabled>Select CRO</option>
                                            <option v-for="cro in cros" :key="cro.user__id" :value="cro.user__username">

                                               {{ cro.user__username }}
                                               
                                            </option>
                                          </select>
                                          
                                        </td>
                                        <td>
                                        <select id="cdq" v-model="shiftData.CDQ" class="form-select" required>
                                            <option value="" disabled selected>Select a CDQ</option>
                                            <option v-for="cdq in cdqs" :key="cdq.user__id" :value="cdq.user__username">
                                               {{ cdq.user__username }}
                                            </option>
                                        </select>
                                          
                                        </td>
                                        <!-- <td><input type="text" class="form-control" v-model="CRO2" ></td> -->
                                        <!-- <td><input type="text" class="form-control" v-model="CDQ" ></td> -->
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Patroller 1</th>
                                        <th>Patroller 2</th>
                                        <th>APP ElEC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <!-- <td><input type="text" class="form-control" v-model="Patroller1" ></td>
                                        <td><input type="text" class="form-control" v-model="Patroller2" ></td>
                                        <td><input type="text" class="form-control" v-model="APP_ELEC" ></td> -->
                                        <td>
                                        <select id="patroller1" v-model="shiftData.Patroller1" class="form-select" required>
                                            <option value="" disabled selected>Select a Patroller</option>
                                            <option v-for="patroller in patrollers" :key="patroller.user__id" :value="patroller.user__username">
                                               {{ patroller.user__username }}
                                            </option>
                                        </select>
                                          
                                        </td>
                                        <td>
                                        <select id="patroller2" v-model="shiftData.Patroller1" class="form-select" required>
                                            <option value="" disabled selected>Select a Patroller</option>
                                           <option v-for="patroller in patrollers" :key="patroller.user__id" :value="patroller.user__username">
                                               {{ patroller.user__username }}
                                            </option>
                                        </select>
                                          
                                        </td>
                                        <td><input type="text" class="form-control" v-model="APP_ELEC" ></td> 

                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>APP MECA</th>
                                        <th>Laboratin-1</th>
                                        <th>Laboratin-2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="APP_MECA" ></td>
                                        <td><input type="text" class="form-control" v-model="Laboratin1" ></td>
                                        <td><input type="text" class="form-control" v-model="Laboratin2" ></td>
                                    </tr>
                                </tbody>
                            </table>
                             
                            </div>
                    </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                                <i class="fas fa-save me-1"></i> Save Shift Data
                            </button>
                        </div>
                       
                    </form> 
</template>




<script setup>
import { ref } from "vue";
// import api from '../services/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthStore } from '../store/auth';
import routes from '@/router/routes';

// import { computed } from 'vue';

// import axios from 'axios'; // Or use fetch API

const authStore = useAuthStore();

const successMessage = ref('');
const errorMessage = ref('');

const CRO1 = ref('');
const CRO2 = ref('');
const Patroller1 = ref('');
const Patroller2 = ref('');
const CDQ = ref('');
const APP_ELEC = ref('');
const APP_MECA = ref('');
const Laboratin1 = ref('');
const Laboratin2 = ref('');


async function handleshift() {
  successMessage.value = '';
  errorMessage.value = '';
   try {
    await authStore.register({
    CRO1: CRO1.value,
    CRO2: CRO2.value, 
    Patroller1: Patroller1.value,
    Patroller2: Patroller2.value,
    CDQ: CDQ.value,
    APP_ELEC: APP_ELEC.value,
    APP_MECA: APP_MECA.value,
    Laboratin1: Laboratin1.value,   
    Laboratin2: Laboratin2.value,   
  })
  
    successMessage.value = 'Registration successful!'
    // redirect after short delay so user can see message
    setTimeout(() => {
        // close the modal 
      routes.push('/report')
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


/* Modal styles */
.modal-content {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.modal-header {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-weight: 600;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
}

.modal-body {
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
}

.modal-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
}

/* Report header */
.report-header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
}

.report-header h1 {
  font-size: 1.5rem;
  margin-bottom: 0;
  font-weight: 600;
}



/* Tables */
.table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: separate;
  border-spacing: 0;
}

.table th {
  background-color: var(--primary);
  color: white;
  font-weight: 500;
  padding: 12px 15px;
  text-align: left;
}

.table td {
  padding: 12px 15px;
  border-bottom: 1px solid #dee2e6;
  vertical-align: middle;
}

.table tr:last-child td {
  border-bottom: none;
}

.table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.table tr:hover {
  background-color: rgba(67, 97, 238, 0.05);
}

/* Form controls */
.form-control {
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  transition: all 0.3s;
}

.form-control:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 0.25rem rgba(67, 97, 238, 0.25);
}

/* Buttons */
.btn {
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background-color: var(--primary);
  border-color: var(--primary);
}

.btn-primary:hover {
  background-color: var(--secondary);
  border-color: var(--secondary);
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-add {
  background-color: var(--success);
  color: white;
  margin-bottom: 15px;
}

.btn-add:hover {
  background-color: #3aa8d8;
  color: white;
}

/* Date badge */
.date-badge {
  display: inline-block;
  background-color: var(--light);
  color: var(--dark);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Checkbox groups */
.form-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-section {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 4px;
  transition: all 0.2s;
}

.checkbox-group label:hover {
  background-color: rgba(67, 97, 238, 0.1);
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
}

/* Carousel controls */
.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.8;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
}

.carousel-indicators {
  bottom: -30px;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
}

.carousel-indicators .active {
  background-color: var(--primary);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal-dialog {
    margin: 10px;
  }
  
  .checkbox-group {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .report-header h1 {
    font-size: 1.3rem;
  }
  
  .table th, .table td {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
}
</style>