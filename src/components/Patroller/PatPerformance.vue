<template>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar" style=" background: #1a2035;
  color: black;">
      <div class="sidebar-header">
        <div class="logo">
          <img src="../assets/img/10_48_34_cimencam_logo.png" alt="Logo">
          <span>Dashboard</span>
        </div>
      </div>
      <ul class="nav-links">
        <li>
          <router-link class="nav-link" to="/dashboard">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/performance" active-class="active">
            <i class="fas fa-chart-line"></i>
            <span>Performance</span>
          </router-link>
        </li>
         <li>
          <router-link class="nav-link" to="/report"> 
            <i class="fas fa-newspaper"></i>
            <span>Report</span>
          </router-link>
        </li>

           <li>
                <router-link class="nav-link" to="/Feedback">
                    <i class="fas fa-comment-alt"></i>
                    <span>Feedback</span>
                </router-link>
                
            </li>
            <li>
                <router-link class="nav-link" to="/Report">
                    <i class="fas fa-cog"></i>
                   <span>Setup</span>
                </router-link>
                
            </li>
            <li>
                <router-link class="nav-link" to="/Report">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>LogOut</span>
                </router-link>
                
            </li>
        <!-- Other menu items -->
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container-fluid py-4">
        <h1 class="mb-4"><i class="fas fa-chart-line"></i> Equipment Performance Tracking</h1>
        
        <!-- Equipment Selection -->
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fas fa-cogs"></i> Select Equipment</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 mb-3">
                <div class="form-check equipment-card" :class="{ 'selected': selectedEquipment === 'BK1' }" @click="selectEquipment('BK1')">
                  <input class="form-check-input" type="radio" v-model="selectedEquipment" value="BK1" id="bk1">
                  <label class="form-check-label" for="bk1">
                    <i class="fas fa-cog"></i> BROYEUR-1 (BK1)
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-check equipment-card" :class="{ 'selected': selectedEquipment === 'BK4' }" @click="selectEquipment('BK4')">
                  <input class="form-check-input" type="radio" v-model="selectedEquipment" value="BK4" id="bk4">
                  <label class="form-check-label" for="bk4">
                    <i class="fas fa-cog"></i> BROYEUR-4 (BK4)
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-check equipment-card" :class="{ 'selected': selectedEquipment === 'BK5' }" @click="selectEquipment('BK5')">
                  <input class="form-check-input" type="radio" v-model="selectedEquipment" value="BK5" id="bk5">
                  <label class="form-check-label" for="bk5">
                    <i class="fas fa-cog"></i> BROYEUR-5 (BK5)
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-check equipment-card" :class="{ 'selected': selectedEquipment === 'Secheur' }" @click="selectEquipment('Secheur')">
                  <input class="form-check-input" type="radio" v-model="selectedEquipment" value="Secheur" id="secheur">
                  <label class="form-check-label" for="secheur">
                    <i class="fas fa-wind"></i> SECHEUR
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-check equipment-card" :class="{ 'selected': selectedEquipment === 'Port' }" @click="selectEquipment('Port')">
                  <input class="form-check-input" type="radio" v-model="selectedEquipment" value="Port" id="port">
                  <label class="form-check-label" for="port">
                    <i class="fas fa-ship"></i> PORT
                  </label>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="form-check equipment-card" :class="{ 'selected': selectedEquipment === 'Expedition' }" @click="selectEquipment('Expedition')">
                  <input class="form-check-input" type="radio" v-model="selectedEquipment" value="Expedition" id="expedition">
                  <label class="form-check-label" for="expedition">
                    <i class="fas fa-truck"></i> EXPEDITION
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Performance Data Table -->
        <div class="card">
          <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <h5 class="mb-0"><i class="fas fa-table"></i> Performance Data for {{ selectedEquipment }}</h5>
            <button class="btn btn-light btn-sm" @click="showAddModal = true">
              <i class="fas fa-plus"></i> Add New Data
            </button>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Shift</th>
                    <th v-if="selectedEquipment !== 'Expedition'">Production (tons)</th>
                    <th v-if="selectedEquipment === 'Expedition'">Shipments</th>
                    <th>Downtime (mins)</th>
                    <th>Issues</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in filteredData" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.shift }}</td>
                    <td v-if="selectedEquipment !== 'Expedition'">{{ item.production }}</td>
                    <td v-if="selectedEquipment === 'Expedition'">{{ item.shipments }}</td>
                    <td>{{ item.downtime }}</td>
                    <td>{{ item.issues }}</td>
                    <td>
                      <button class="btn btn-sm btn-primary me-2" @click="editItem(index)">
                        <i class="fas fa-edit"></i> Edit
                      </button>
                      <button class="btn btn-sm btn-danger" @click="deleteItem(index)">
                        <i class="fas fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                  <tr v-if="filteredData.length === 0">
                    <td colspan="7" class="text-center text-muted">No data available for {{ selectedEquipment }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal fade" id="dataModal" tabindex="-1" aria-hidden="true" ref="dataModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">{{ isEditing ? 'Edit' : 'Add' }} Performance Data</h5>
            <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveData">
              <div class="mb-3">
                <label class="form-label">Date</label>
                <input type="date" class="form-control" v-model="formData.date" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Shift</label>
                <select class="form-select" v-model="formData.shift" required>
                  <option value="Shift 1 (6:00 AM - 2:00 PM)">Shift 1 (6:00 AM - 2:00 PM)</option>
                  <option value="Shift 2 (2:00 PM - 10:00 PM)">Shift 2 (2:00 PM - 10:00 PM)</option>
                  <option value="Shift 3 (10:00 PM - 6:00 AM)">Shift 3 (10:00 PM - 6:00 AM)</option>
                </select>
              </div>
              <div class="mb-3" v-if="selectedEquipment !== 'Expedition'">
                <label class="form-label">Production (tons)</label>
                <input type="number" class="form-control" v-model="formData.production" step="0.01" required>
              </div>
              <div class="mb-3" v-if="selectedEquipment === 'Expedition'">
                <label class="form-label">Shipments</label>
                <input type="number" class="form-control" v-model="formData.shipments" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Downtime (minutes)</label>
                <input type="number" class="form-control" v-model="formData.downtime" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Issues</label>
                <textarea class="form-control" v-model="formData.issues" rows="2"></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary me-2" @click="closeModal">Cancel</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default {
  setup() {
    // Equipment selection
    const selectedEquipment = ref('BK1');
    
    // Sample data - in a real app, this would come from an API
    const performanceData = ref([
      { id: 1, equipment: 'BK1', date: '2023-06-01', shift: 'Shift 1 (6:00 AM - 2:00 PM)', production: 1250, downtime: 45, issues: 'Conveyor belt maintenance' },
      { id: 2, equipment: 'BK1', date: '2023-06-01', shift: 'Shift 2 (2:00 PM - 10:00 PM)', production: 1320, downtime: 28, issues: 'No issues' },
      { id: 3, equipment: 'BK4', date: '2023-06-01', shift: 'Shift 1 (6:00 AM - 2:00 PM)', production: 1180, downtime: 65, issues: 'Kiln temperature fluctuation' },
      { id: 4, equipment: 'BK5', date: '2023-06-01', shift: 'Shift 3 (10:00 PM - 6:00 AM)', production: 1420, downtime: 15, issues: 'Regular operation' },
      { id: 5, equipment: 'Secheur', date: '2023-06-01', shift: 'Shift 2 (2:00 PM - 10:00 PM)', production: 980, downtime: 32, issues: 'Moisture sensor calibration' },
      { id: 6, equipment: 'Port', date: '2023-06-01', shift: 'Shift 1 (6:00 AM - 2:00 PM)', production: 850, downtime: 75, issues: 'Loading delay due to weather' },
      { id: 7, equipment: 'Expedition', date: '2023-06-01', shift: 'Shift 2 (2:00 PM - 10:00 PM)', shipments: 18, downtime: 0, issues: 'All shipments on time' }
    ]);

    // Form data
    const formData = ref({
      id: null,
      equipment: '',
      date: '',
      shift: '',
      production: '',
      shipments: '',
      downtime: '',
      issues: ''
    });

    // Modal state
    const isEditing = ref(false);
    const currentIndex = ref(null);
    const dataModal = ref(null);
    let modalInstance = null;

    // Computed property to filter data by selected equipment
    const filteredData = computed(() => {
      return performanceData.value.filter(item => item.equipment === selectedEquipment.value);
    });

    // Initialize modal
    onMounted(() => {
      modalInstance = new Modal(dataModal.value);
    });

    // Select equipment
    const selectEquipment = (equipment) => {
      selectedEquipment.value = equipment;
    };

    // Open modal for adding new data
    const openAddModal = () => {
      resetForm();
      isEditing.value = false;
      formData.value.equipment = selectedEquipment.value;
      modalInstance.show();
    };

    // Open modal for editing
    const editItem = (index) => {
      const item = filteredData.value[index];
      formData.value = { ...item };
      isEditing.value = true;
      currentIndex.value = performanceData.value.findIndex(i => i.id === item.id);
      modalInstance.show();
    };

    // Delete item
    const deleteItem = (index) => {
      if (confirm('Are you sure you want to delete this record?')) {
        const item = filteredData.value[index];
        performanceData.value = performanceData.value.filter(i => i.id !== item.id);
      }
    };

    // Save data (add or update)
    const saveData = () => {
      if (isEditing.value) {
        // Update existing item
        performanceData.value[currentIndex.value] = { ...formData.value };
      } else {
        // Add new item
        const newId = performanceData.value.length > 0 
          ? Math.max(...performanceData.value.map(i => i.id)) + 1 
          : 1;
        performanceData.value.push({ 
          ...formData.value, 
          id: newId 
        });
      }
      closeModal();
    };

    // Close modal
    const closeModal = () => {
      modalInstance.hide();
    };

    // Reset form
    const resetForm = () => {
      formData.value = {
        id: null,
        equipment: selectedEquipment.value,
        date: '',
        shift: '',
        production: '',
        shipments: '',
        downtime: '',
        issues: ''
      };
    };

    return {
      selectedEquipment,
      performanceData,
      filteredData,
      formData,
      isEditing,
      dataModal,
      selectEquipment,
      openAddModal,
      editItem,
      deleteItem,
      saveData,
      closeModal
    };
  }
};
</script>

<style >
/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: #1a2035;
  color: white;
  height: 100vh;
  position: fixed;
  padding: 20px 0;
  transition: all 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar-header {
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 20px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.nav-links {
  list-style: none;
  padding: 0 15px;
}

.nav-links li {
  margin-bottom: 5px;
}

.nav-links a {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s;
}

.nav-links a:hover, .nav-links a.active {
  background: rgba(67, 97, 238, 0.2);
  color: white;
}

.nav-links a i {
  margin-right: 10px;
  width: 20px;
  text-align: center;
  font-size: 1.1rem;
}

/* Main Content */
.main-content {
  margin-left: 250px;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f7fb;
}

/* Equipment Cards */
.equipment-card {
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #dee2e6;
}

.equipment-card:hover {
  background-color: #f8f9fa;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.equipment-card.selected {
  background-color: #e7f1ff;
  border-color: #0d6efd;
}

.equipment-card .form-check-label {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.equipment-card .form-check-label i {
  margin-right: 8px;
  color: #0d6efd;
}

/* Table Styles */
.table-responsive {
  overflow-x: auto;
}

.table {
  font-size: 0.9rem;
}

.table th {
  white-space: nowrap;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .sidebar {
    transform: translateX(-250px);
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .equipment-card {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .table th, .table td {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
  
  .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .equipment-card {
    margin-bottom: 10px;
  }
  
  .modal-dialog {
    margin: 0.5rem;
  }
}
</style>