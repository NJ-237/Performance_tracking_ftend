<template>
  <div id="app">
        <div class="container my-5">
            <!-- Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h1><i class="fas fa-comment-dots me-2"></i>Feedback Management System</h1>
                        <p class="mb-0">Send feedback to team members and track responses</p>
                    </div>
                    <div class="col-md-4 text-end">
                        <div class="d-flex align-items-center justify-content-end">
                            <img src="https://ui-avatars.com/api/?name=Manager&background=random" class="rounded-circle me-2" width="40" height="40" alt="Manager">
                            <div>
                                <h5 class="mb-0">Manager</h5>
                                <small>Feedback Dashboard</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Sidebar with Role Selection -->
                <div class="col-md-3">
                    <div class="card mb-4">
                        <div class="card-header bg-white">
                            <h5 class="card-title mb-0"><i class="fas fa-users me-2"></i>Select Role</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-grid gap-2">
                                <button 
                                    v-for="role in roles" 
                                    :key="role.id"
                                    @click="selectRole(role)"
                                    :class="['btn', selectedRole.id === role.id ? 'btn-primary' : 'btn-outline-primary']"
                                >
                                    <i :class="role.icon" class="me-2"></i>{{ role.name }}
                                    <span v-if="role.notifications > 0" class="badge bg-danger ms-2">{{ role.notifications }}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Statistics Card -->
                    <div class="card">
                        <div class="card-header bg-white">
                            <h5 class="card-title mb-0"><i class="fas fa-chart-bar me-2"></i>Feedback Stats</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <small class="text-muted">Total Feedback</small>
                                <h4>{{ totalFeedback }}</h4>
                            </div>
                            <div class="mb-3">
                                <small class="text-muted">Pending</small>
                                <div class="progress mb-1">
                                    <div class="progress-bar bg-warning" role="progressbar" :style="{ width: pendingPercentage + '%' }"></div>
                                </div>
                                <span class="small">{{ pendingCount }} feedbacks</span>
                            </div>
                            <div class="mb-3">
                                <small class="text-muted">Acknowledged</small>
                                <div class="progress mb-1">
                                    <div class="progress-bar bg-info" role="progressbar" :style="{ width: acknowledgedPercentage + '%' }"></div>
                                </div>
                                <span class="small">{{ acknowledgedCount }} feedbacks</span>
                            </div>
                            <div>
                                <small class="text-muted">Resolved</small>
                                <div class="progress mb-1">
                                    <div class="progress-bar bg-success" role="progressbar" :style="{ width: resolvedPercentage + '%' }"></div>
                                </div>
                                <span class="small">{{ resolvedCount }} feedbacks</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="col-md-9">
                    <!-- Feedback Form -->
                    <div class="card mb-4">
                        <div class="card-header bg-white">
                            <h5 class="card-title mb-0">
                                <i class="fas fa-paper-plane me-2"></i>
                                Send Feedback to {{ selectedRole.name }}
                            </h5>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="submitFeedback" class="feedback-form">
                                <div class="mb-3">
                                    <label for="feedbackTitle" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="feedbackTitle" v-model="newFeedback.title" required>
                                </div>
                                <div class="mb-3">
                                    <label for="feedbackMessage" class="form-label">Message</label>
                                    <textarea class="form-control" id="feedbackMessage" rows="4" v-model="newFeedback.message" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="feedbackPriority" class="form-label">Priority</label>
                                    <select class="form-select" id="feedbackPriority" v-model="newFeedback.priority">
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fas fa-paper-plane me-2"></i>Send Feedback
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Feedback Table -->
                    <div class="card">
                        <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">
                                <i class="fas fa-list me-2"></i>
                                {{ selectedRole.name }} Feedback History
                            </h5>
                            <div class="btn-group">
                                <button 
                                    v-for="status in statusFilters" 
                                    :key="status"
                                    @click="setStatusFilter(status)"
                                    :class="['btn btn-sm', statusFilter === status ? 'btn-primary' : 'btn-outline-primary']"
                                >
                                    {{ status.charAt(0).toUpperCase() + status.slice(1) }}
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover feedback-table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Priority</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="feedback in filteredFeedback" :key="feedback.id">
                                            <td>
                                                <strong>{{ feedback.title }}</strong>
                                                <br>
                                                <small class="text-muted">{{ feedback.message.substring(0, 50) }}...</small>
                                            </td>
                                            <td>{{ formatDate(feedback.created_at) }}</td>
                                            <td>
                                                <span :class="['badge', 
                                                    feedback.priority === 'high' ? 'bg-danger' : 
                                                    feedback.priority === 'medium' ? 'bg-warning' : 'bg-secondary']">
                                                    {{ feedback.priority }}
                                                </span>
                                            </td>
                                            <td>
                                                <span :class="['status-badge', 
                                                    feedback.status === 'pending' ? 'status-pending' : 
                                                    feedback.status === 'acknowledged' ? 'status-acknowledged' : 'status-resolved']">
                                                    {{ feedback.status }}
                                                </span>
                                            </td>
                                            <td>
                                                <button class="btn btn-sm btn-outline-primary me-1" @click="viewFeedback(feedback)">
                                                    <i class="fas fa-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-outline-danger" @click="deleteFeedback(feedback.id)">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr v-if="filteredFeedback.length === 0">
                                            <td colspan="5" class="text-center py-4">
                                                <i class="fas fa-inbox fa-2x text-muted mb-2"></i>
                                                <p class="text-muted">No feedback found for {{ selectedRole.name }}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feedback Detail Modal -->
        <div class="modal fade" id="feedbackModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Feedback Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-if="selectedFeedback">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <strong>Title:</strong>
                                <p>{{ selectedFeedback.title }}</p>
                            </div>
                            <div class="col-md-6">
                                <strong>Date:</strong>
                                <p>{{ formatDate(selectedFeedback.created_at) }}</p>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <strong>Priority:</strong>
                                <span :class="['badge', 
                                    selectedFeedback.priority === 'high' ? 'bg-danger' : 
                                    selectedFeedback.priority === 'medium' ? 'bg-warning' : 'bg-secondary']">
                                    {{ selectedFeedback.priority }}
                                </span>
                            </div>
                            <div class="col-md-6">
                                <strong>Status:</strong>
                                <span :class="['status-badge', 
                                    selectedFeedback.status === 'pending' ? 'status-pending' : 
                                    selectedFeedback.status === 'acknowledged' ? 'status-acknowledged' : 'status-resolved']">
                                    {{ selectedFeedback.status }}
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <strong>Message:</strong>
                            <p class="p-3 bg-light rounded">{{ selectedFeedback.message }}</p>
                        </div>
                        <div v-if="selectedFeedback.response" class="mb-3">
                            <strong>Response:</strong>
                            <p class="p-3 bg-light rounded">{{ selectedFeedback.response }}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {createApp, ref, computed, onMounted} from 'vue'
//  const { createApp, ref, computed, onMounted } = Vue;
        
         createApp({
            setup() {
                // Reactive data
                const roles = ref([
                    { id: 1, name: 'CRO', icon: 'fas fa-headset', notifications: 2 },
                    { id: 2, name: 'CDQ', icon: 'fas fa-chart-line', notifications: 1 },
                    { id: 3, name: 'Patroller', icon: 'fas fa-shield-alt', notifications: 3 },
                    { id: 4, name: 'Dispatch', icon: 'fas fa-truck', notifications: 0 }
                ]);
                
                const selectedRole = ref(roles.value[0]);
                const statusFilter = ref('all');
                const statusFilters = ref(['all', 'pending', 'acknowledged', 'resolved']);
                const selectedFeedback = ref(null);
                const showModal = ref(false);
                
                const newFeedback = ref({
                    title: '',
                    message: '',
                    priority: 'medium'
                });
                
                // Mock data - in a real app, this would come from the Django API
                const allFeedback = ref([
                    { id: 1, role_id: 1, title: 'Customer Service Improvement', message: 'Need to improve response time for customer queries.', priority: 'high', status: 'pending', created_at: '2023-04-15T10:30:00Z' },
                    { id: 2, role_id: 1, title: 'Phone Etiquette', message: 'Please remember to use the customer name during calls.', priority: 'medium', status: 'acknowledged', created_at: '2023-04-10T14:22:00Z', response: 'Noted. Will implement in next training session.' },
                    { id: 3, role_id: 2, title: 'Data Accuracy', message: 'Ensure all data entries are double-checked before submission.', priority: 'high', status: 'resolved', created_at: '2023-04-05T09:15:00Z', response: 'Implemented new verification process.' },
                    { id: 4, role_id: 3, title: 'Patrol Routes', message: 'Consider adjusting patrol routes to cover blind spots.', priority: 'low', status: 'pending', created_at: '2023-04-02T16:45:00Z' },
                    { id: 5, role_id: 4, title: 'Dispatch Timing', message: 'Some dispatches are running behind schedule.', priority: 'medium', status: 'acknowledged', created_at: '2023-03-28T11:20:00Z', response: 'Investigating the cause of delays.' },
                    { id: 6, role_id: 1, title: 'Product Knowledge', message: 'Team needs refresher on new product features.', priority: 'medium', status: 'pending', created_at: '2023-03-25T13:10:00Z' }
                ]);
                
                // Computed properties
                const roleFeedback = computed(() => {
                    return allFeedback.value.filter(f => f.role_id === selectedRole.value.id);
                });
                
                const filteredFeedback = computed(() => {
                    if (statusFilter.value === 'all') {
                        return roleFeedback.value;
                    }
                    return roleFeedback.value.filter(f => f.status === statusFilter.value);
                });
                
                const totalFeedback = computed(() => allFeedback.value.length);
                
                const pendingCount = computed(() => 
                    allFeedback.value.filter(f => f.status === 'pending').length
                );
                
                const acknowledgedCount = computed(() => 
                    allFeedback.value.filter(f => f.status === 'acknowledged').length
                );
                
                const resolvedCount = computed(() => 
                    allFeedback.value.filter(f => f.status === 'resolved').length
                );
                
                const pendingPercentage = computed(() => 
                    Math.round((pendingCount.value / totalFeedback.value) * 100)
                );
                
                const acknowledgedPercentage = computed(() => 
                    Math.round((acknowledgedCount.value / totalFeedback.value) * 100)
                );
                
                const resolvedPercentage = computed(() => 
                    Math.round((resolvedCount.value / totalFeedback.value) * 100)
                );
                
                // Methods
                const selectRole = (role) => {
                    selectedRole.value = role;
                    statusFilter.value = 'all';
                };
                
                const setStatusFilter = (status) => {
                    statusFilter.value = status;
                };
                
                const submitFeedback = () => {
                    if (newFeedback.value.title && newFeedback.value.message) {
                        const feedback = {
                            id: allFeedback.value.length + 1,
                            role_id: selectedRole.value.id,
                            title: newFeedback.value.title,
                            message: newFeedback.value.message,
                            priority: newFeedback.value.priority,
                            status: 'pending',
                            created_at: new Date().toISOString()
                        };
                        
                        allFeedback.value.unshift(feedback);
                        
                        // In a real app, send to Django API
                        console.log('Sending feedback to API:', feedback);
                        
                        // Reset form
                        newFeedback.value = {
                            title: '',
                            message: '',
                            priority: 'medium'
                        };
                        
                        // Show success message
                        alert('Feedback sent successfully!');
                    }
                };
                
                const viewFeedback = (feedback) => {
                    selectedFeedback.value = feedback;
                    showModal.value = true;
                };
                
                const closeModal = () => {
                    showModal.value = false;
                    selectedFeedback.value = null;
                };
                
                const deleteFeedback = (id) => {
                    if (confirm('Are you sure you want to delete this feedback?')) {
                        allFeedback.value = allFeedback.value.filter(f => f.id !== id);
                    }
                };
                
                const formatDate = (dateString) => {
                    const options = { year: 'numeric', month: 'short', day: 'numeric' };
                    return new Date(dateString).toLocaleDateString(undefined, options);
                };
                
                // Lifecycle
                onMounted(() => {
                    // In a real app, fetch initial data from Django API
                    console.log('Component mounted, fetching data from API...');
                });
                
                return {
                    roles,
                    selectedRole,
                    statusFilter,
                    statusFilters,
                    selectedFeedback,
                    showModal,
                    newFeedback,
                    roleFeedback,
                    filteredFeedback,
                    totalFeedback,
                    pendingCount,
                    acknowledgedCount,
                    resolvedCount,
                    pendingPercentage,
                    acknowledgedPercentage,
                    resolvedPercentage,
                    selectRole,
                    setStatusFilter,
                    submitFeedback,
                    viewFeedback,
                    closeModal,
                    deleteFeedback,
                    formatDate
                };
            }
        }).mount('#app');
</script>

<style scoped>
        :root {
            --primary-color: #4361ee;
            --secondary-color: #3f37c9;
            --success-color: #4cc9f0;
            --light-color: #f8f9fa;
            --dark-color: #212529;
        }
        
        body {
            background-color: #f5f7fb;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card {
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: none;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .nav-pills .nav-link {
            border-radius: 8px;
            margin: 5px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .nav-pills .nav-link.active {
            background-color: var(--primary-color);
            box-shadow: 0 2px 5px rgba(67, 97, 238, 0.3);
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
        }
        
        .btn-primary:hover {
            background-color: var(--secondary-color);
            border-color: var(--secondary-color);
        }
        
        .feedback-table {
            border-radius: 10px;
            overflow: hidden;
        }
        
        .feedback-table thead {
            background-color: var(--primary-color);
            color: white;
        }
        
        .status-badge {
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .status-pending {
            background-color: #fff3cd;
            color: #856404;
        }
        
        .status-acknowledged {
            background-color: #d1ecf1;
            color: #0c5460;
        }
        
        .status-resolved {
            background-color: #d4edda;
            color: #155724;
        }
        
        .role-card {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .role-card:hover {
            transform: scale(1.03);
        }
        
        .role-card.active {
            border: 2px solid var(--primary-color);
        }
        
        .notification-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #e63946;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .feedback-form {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 12px;
            padding: 25px;
        }
        
        .page-header {
            background: linear-gradient(90deg, var(--primary-color), var(--success-color));
            color: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 25px;
        }

</style>