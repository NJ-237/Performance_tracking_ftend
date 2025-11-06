<template>
  <div class="app-container">
    <!-- Sidebar -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <img src="../../assets/img/10_48_34_cimencam_logo.png" alt="Logo">
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
          <router-link class="nav-link" to="/feedback" active-class="active">
            <i class="fas fa-comment-alt"></i>
            <span>Feedback</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/setup">
            <i class="fas fa-cog"></i>
            <span>Setup</span>
          </router-link>
        </li>
        <li>
            <button @click="handleLogout" class="logout-btn">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>LogOut</span>
            </button>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="feedback-container">
        <div class="header">
          <h1><i class="fas fa-comment-alt me-2"></i> Operator Feedback System</h1>
          <p>Provide and view feedback for different operators</p>
        </div>

        <!-- Operator Selection Cards -->
        <div class="operator-selection">
          <h2 class="section-title">Select Operator Type</h2>
          <div class="row">
            <div class="col-md-3 col-sm-6 mb-4" v-for="operator in operators" :key="operator.id">
              <div class="card operator-card" @click="selectOperator(operator)">
                <div class="card-body text-center">
                  <div class="operator-icon" :class="operator.class">
                    <i :class="operator.icon"></i>
                  </div>
                  <h5 class="card-title mt-3">{{ operator.name }}</h5>
                  <p class="text-muted">{{ operator.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feedback Table -->
        <div class="feedback-table mt-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="section-title">Recent Feedback</h2>
            <button class="btn btn-primary" @click="showAllFeedback = !showAllFeedback">
              {{ showAllFeedback ? 'Show Less' : 'Show All' }}
            </button>
          </div>
          
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="table-dark">
                <tr>
                  <th>Date</th>
                  <th>Operator</th>
                  <th>Feedback Type</th>
                  <th>Rating</th>
                  <th>Comments</th>
                  <th>Submitted By</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(feedback, index) in displayedFeedback" :key="index">
                  <td>{{ formatDate(feedback.date) }}</td>
                  <td>
                    <span class="badge" :class="getOperatorClass(feedback.operatorType)">
                      {{ feedback.operatorType }}
                    </span>
                  </td>
                  <td>{{ feedback.type }}</td>
                  <td>
                    <div class="rating">
                      <i v-for="star in 5" :key="star" 
                         class="fas fa-star" 
                         :class="{ 'filled': star <= feedback.rating }"></i>
                    </div>
                  </td>
                  <td>{{ feedback.comments }}</td>
                  <td>{{ feedback.submittedBy }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Feedback Modal -->
    <div class="modal fade" id="feedbackModal" tabindex="-1" aria-hidden="true" ref="feedbackModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">
              <i class="fas fa-comment-dots me-2"></i>
              Provide Feedback for {{ selectedOperator.name }}
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitFeedback">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">Feedback Type</label>
                  <select class="form-select" v-model="newFeedback.type" required>
                    <option value="">Select type</option>
                    <option value="Performance">Performance</option>
                    <option value="Behavior">Behavior</option>
                    <option value="Safety">Safety</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Rating (1-5)</label>
                  <div class="rating-input">
                    <i v-for="star in 5" :key="star" 
                       class="fas fa-star" 
                       :class="{ 'filled': star <= newFeedback.rating }"
                       @click="newFeedback.rating = star"></i>
                  </div>
                </div>
              </div>
              
              <div class="mb-3">
                <label class="form-label">Comments</label>
                <textarea class="form-control" rows="4" 
                          v-model="newFeedback.comments" required></textarea>
              </div>
              
              <div class="mb-3">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-control" 
                       v-model="newFeedback.submittedBy" required>
              </div>
              
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit Feedback</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import { format } from 'date-fns';
import { useAuthStore } from '../../store/auth'
import axios from 'axios'; // <-- Uncomment this
// import { useRouter } from 'vue-router';


// Modal reference
const feedbackModal = ref(null);
let modalInstance = null;

// Operators data (Keep as is)
const operators = ref([
  { id: 1, name: 'CRO', description: 'Control Room Operator', icon: 'fas fa-desktop', class: 'cro' },
  { id: 2, name: 'Dispatcher', description: 'Dispatch Operator', icon: 'fas fa-truck', class: 'dispatch' },
  { id: 3, name: 'Patroller', description: 'Field Patroller', icon: 'fas fa-walking', class: 'patroller' },
  { id: 4, name: 'CDQ', description: 'Shift Manager', icon: 'fas fa-snowflake', class: 'cdq' }
]);

// Feedback data - This will now be populated from the backend
const feedbacks = ref([]); // Initialize as an empty array

// New feedback form
const newFeedback = ref({
  operatorType: '',
  type: '',
  rating: 0,
  comments: '',
  submittedBy: '',
  // Note: The 'date' field will typically be set by the backend upon creation, 
  // but we keep it here if the backend needs it or for immediate client-side display.
  date: new Date() 
});

// Selected operator
const selectedOperator = ref({});
const showAllFeedback = ref(false);

const errorMessage = ref(null);
const loading = ref(false);
const authStore = useAuthStore(); // Assuming this is needed for user context or tokens


// Computed properties (Keep as is)
const displayedFeedback = computed(() => {
  // Ensure feedbacks.value is an array and sort by date descending for "recent"
  const sortedFeedback = feedbacks.value
    .slice() // create a shallow copy to avoid mutating original
    .sort((a, b) => new Date(b.date) - new Date(a.date)); 
    
  return showAllFeedback.value ? sortedFeedback : sortedFeedback.slice(0, 3);
});

// --- Methods for Data Handling ---

/**
 * Fetches all feedback entries from the backend API.
 */
const fetchFeedback = async () => {
    loading.value = true;
    errorMessage.value = null;
    try {
        
        const response = await axios.get('http://127.0.0.1:8000/api/feedback/', {
            // Example of adding an Authorization header (adjust as per your auth store)
            headers: {
                // 'Authorization': `Bearer ${authStore.token}` 
            }
        });
        
        // Assuming the backend returns an array of feedback objects directly
        feedbacks.value = response.data; 
        console.log('Feedback fetched successfully:', feedbacks.value);

    } catch (err) {
        console.error('Failed to fetch feedback:', err);
        errorMessage.value = 'Failed to load feedback data from the server.';
    } finally {
        loading.value = false;
    }
}

/**
 * Handles the submission of the new feedback form.
 */
const submitFeedback = async () => {
  loading.value = true;
  errorMessage.value = null;

  try {
    

 console.log("Submitting Feedback data:", newFeedback.value);
    const success = await authStore.registerShift(newFeedback.value);
    if (success) {
 

      // Close the modal on success
      if (modalInstance) modalInstance.hide();
    } else {
      // Display the specific error from the backend
      errorMessage.value = authStore.error?.non_field_errors?.[0] || authStore.error?.detail || 'An unknown error occurred.';
    }
  } catch (err) {
    console.error('Submission failed:', err);
    errorMessage.value = 'An error occurred during submission. Please try again.';
  } finally {
    loading.value = false;
  }
};


// --- Lifecycle and UI Methods (Keep as is/Minor adjustment) ---

// Initialize modal AND fetch data when component mounts
onMounted(() => {
  modalInstance = new Modal(feedbackModal.value);
  fetchFeedback(); // <-- Fetch initial data here
});

const selectOperator = (operator) => {
  selectedOperator.value = operator;
  // Reset other fields when a new operator is selected
  newFeedback.value = {
    operatorType: operator.name,
    type: '',
    rating: 0,
    comments: '',
    submittedBy: newFeedback.value.submittedBy || '', // Keep submittedBy if already entered
    date: new Date()
  };
  modalInstance.show();
};

const formatDate = (date) => {
  // Ensure the date object is created if the backend sends a string
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  return format(dateObject, 'MMM dd, yyyy');
};

const getOperatorClass = (operatorType) => {
  const operator = operators.value.find(op => op.name === operatorType);
  return operator ? operator.class : '';
};


const handleLogout = () => {
    // Assuming useAuthStore has a logout method
    authStore.logout(); 
    // You would typically redirect the user to the login page here
    // e.g., router.push('/login');
}
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

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
  border-radius: 50%;
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
  padding: 30px;
  flex: 1;
  background-color: #f5f7fb;
}

/* Feedback Page Styles */
.feedback-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
}

.header {
  margin-bottom: 30px;
  text-align: center;
}

.header h1 {
  color: #2c3e50;
  font-weight: 700;
}

.header p {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.section-title {
  color: #2c3e50;
  border-left: 4px solid #4361ee;
  padding-left: 10px;
  margin: 25px 0 20px;
  font-weight: 600;
}

/* Operator Cards */
.operator-card {
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  border: none;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.operator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.operator-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 1.8rem;
  color: white;
}

.operator-icon.cro {
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
}

.operator-icon.dispatch {
  background: linear-gradient(135deg, #f72585, #b5179e);
}

.operator-icon.patroller {
  background: linear-gradient(135deg, #4cc9f0, #4895ef);
}

.operator-icon.cdq {
  background: linear-gradient(135deg, #7209b7, #560bad);
}

/* Feedback Table */
.table {
  margin-top: 20px;
}

.table th {
  font-weight: 600;
}

.badge {
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.badge.cro {
  background-color: #e0e7ff;
  color: #4338ca;
}

.badge.dispatch {
  background-color: #fce7f3;
  color: #be185d;
}

.badge.patroller {
  background-color: #e0f2fe;
  color: #0369a1;
}

.badge.cdq {
  background-color: #f3e8ff;
  color: #7e22ce;
}

/* Rating Stars */
.rating, .rating-input {
  color: #e2e8f0;
}

.rating .filled, .rating-input .filled {
  color: #f59e0b;
}

.rating-input i {
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 5px;
  transition: all 0.2s;
}

.rating-input i:hover {
  transform: scale(1.2);
}

/* Modal Styles */
.modal-header {
  padding: 15px 20px;
}

.modal-body {
  padding: 25px;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .sidebar {
    transform: translateX(-250px);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
    display: none;
  }
  
  .sidebar-overlay.open {
    display: block;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px 15px;
  }
  
  .feedback-container {
    padding: 20px;
  }
  
  .operator-card {
    margin-bottom: 20px;
  }
}
</style>