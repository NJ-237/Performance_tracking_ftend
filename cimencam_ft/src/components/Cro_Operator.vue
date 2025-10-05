<template>
<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VueDash Analytics</title>
    <link href="../../../../../../vendor/bootstrap5/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../../../../../../vendor/fontawesome/css/all.min.css">
   
   
</head>
<body>
    <div id="app">
        <!-- Sidebar -->
        <nav class="sidebar" style=" background: #1a2035; color: black;">
        <div class="sidebar-header">
        <div class="logo">
          <img src="C:\projects\cimencam_app\frontend\Performance_tracking_ftend\cimencam_ft\src\assets\img\10_48_34_cimencam_logo.png" alt="Logo">
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
            <button style="color: violet; background: #1a2035;"  @click="handleLogout" class="logout-btn">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>LogOut</span>
            </button>
        </li>
      </ul>
        </nav>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Topbar -->
            <nav class="navbar navbar-expand topbar mb-4 shadow">
                <div class="container-fluid">
                    <div class="d-flex align-items-center">
                        <h1 class="h3 mb-0 text-gray-800">DataBoard</h1>
                    </div>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ username }}</span>
                                <img class="user-avatar" :src="userAvatar" alt="User Avatar">
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Filters -->
            <div class="container-fluid">
                <div class="row mb-4">
                    <!-- <div v-if="userToken"> -->
                    <div class="col-md-3">
                        <label class="form-label">Start Date</label>
                        <input type="date" id="startDate" class="form-control date-control" v-model="startDate">
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">End Date</label>
                        <input type="date" id="endDate" class="form-control date-control" v-model="endDate">
                    </div>
                   
                    <div class="col-md-3 d-flex align-items-end">
                        <button class="btn apply-btn w-100" @click="fetchData" >Apply Filters</button>
                    </div>
                  
                </div>

                <!-- KPI Cards -->
                <div class="row">
                     <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-info">
                            <div class="card-body">
                                <div class="kpi-title">SHIFT NUMBER</div>
                                <div class="kpi-value">{{ Shift__shift_number }}</div>
                                <div class="kpi-subtitle">
                                    <span class="trend-down"><i class="fas fa-arrow-down"></i> {{ kpiData.errorsTrend }}</span>
                                    Active
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-primary">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL OPTIMISATION</div>
                                <div class="kpi-value">{{ kpiData.total_optimisation }}</div>
                                <div class="kpi-subtitle">
                                    <span class="trend-up"><i class="fas fa-arrow-up"></i> {{ kpiData.incidentsTrend }}</span>
                                    Today
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-success">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL ENVIRONMENT</div>
                                <div class="kpi-value">{{ kpiData.performance }}%</div>
                                <div class="kpi-subtitle">This month</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-info">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL PRODUCTION MILL</div>
                                <div class="kpi-value">{{ kpiData.total_production }}%</div>
                                <div class="kpi-subtitle">
                                    <span class="trend-down"><i class="fas fa-arrow-down"></i> {{ kpiData.errorsTrend }}</span>
                                    Active
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-info">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL PRODUCTION SECHEUR</div>
                                <div class="kpi-value">{{ kpiData.errors }}</div>
                                <div class="kpi-subtitle">
                                    <span class="trend-down"><i class="fas fa-arrow-down"></i> {{ kpiData.errorsTrend }}</span>
                                    Active
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-info">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL QUALITY</div>
                                <div class="kpi-value">{{ kpiData.total_qualites }}</div>
                                <div class="kpi-subtitle">
                                    <span class="trend-down"><i class="fas fa-arrow-down"></i> {{ kpiData.errorsTrend }}</span>
                                    Active
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <!-- Charts -->
                <div class="row">
                    <!-- Revenue Chart Histogram -->
                    <div class="col-xl-8">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">KPI Overview</h6>
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-sm btn-outline-primary">Week</button>
                                    <button type="button" class="btn btn-sm btn-primary">Month</button>
                                    <button type="button" class="btn btn-sm btn-outline-primary">Year</button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="histogram-container">
                                    <h2>Performance History for: {{ operatorName || 'Loading...' }}</h2>
                                    
                                    <div v-if="chartData.datasets.length" class="chart-wrapper">
                                    <Bar :data="chartData" :options="chartOptions" />
                                    </div>
                                    <p v-else-if="!loading">No performance data found for this operator.</p>
                                    <p v-else>Loading performance data...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Traffic Sources -->
                    <div class="col-xl-4">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">KPI RESULT</h6>
                            </div>
                            <div class="card-body">
                                <div v-for="(source, index) in trafficSources" :key="index" class="traffic-source">
                                    <div class="traffic-source-name">{{ source.name }}</div>
                                    <div class="progress">
                                        <div class="progress-bar" 
                                            :class="'source-' + source.class"
                                            role="progressbar" 
                                            :style="{ width: source.percentage + '%' }"
                                            :aria-valuenow="source.percentage" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                    <div class="text-end small">{{ source.percentage }}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Notifications -->
                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Notifications</h6>
                            </div>
                            <div class="card-body p-0">
                                <div v-for="(notification, index) in notifications" :key="index" class="notification-item">
                                    <div class="notification-title">{{ notification.title }}</div>
                                    <div class="notification-content">{{ notification.content }}</div>
                                    <div class="notification-time">{{ notification.time }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



     
    <!-- Pop-up Onboarding Form -->
    

    <!-- Message Box -->
    

    </body>
    </html>
   </Template>

<script setup>
// import { onMounted } from 'vue'
import axios from 'axios';
import { useAuthStore } from '../store/auth'
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';

// import Chart from 'chart.js/auto'; // If you're going to render the chart

// Using vue-chartjs wrappers makes this easier
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components globally for the wrapper
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


const loading = ref(true);
const operatorName = ref('');
const chartData = ref({ labels: [], datasets: [] });
const username = ref('User');
const userAvatar = ref('path_to_avatar.jpg');
const authStore = useAuthStore();


//For the calculations 



// Your API endpoint should now point to the custom aggregation view
const API_PRODUCTION_AGGREGATE_URL = 'http://127.0.0.1:8000/api/date_filter/'; 

// Date inputs
const startDate = ref(null);
const endDate = ref(null);

// Initialize kpiData structure to match the backend response keys
const kpiData = ref({
    // Initial data for the KPI cards
    incidents: '0.00', // Mapped to total_optimisation
    incidentsTrend: 0, // Mock trend value
    performance: '0.00', // Mapped to total_performance
    errors: '0.00', // Mock value, e.g., production_bk1 
    errorsTrend: 0, // Mock trend value
    // New fields to map to the other KPI cards
    production_bk1: '0.00',
    production_bk4: '0.00',
    production_bk5: '0.00',
    production_secheur: '0.00',
});

// Mock data for the static components
const notifications = ref([
    { title: 'BK1 Flow Alert', content: 'Flow dropped below threshold.', time: '5 mins ago' },
    // ...
]);
const trafficSources = ref([
    // { name: 'BK1', percentage: 30, class: 'primary' },
    // { name: 'BK4', percentage: 30, class: 'success' },
    // { name: 'BK5', percentage: 20, class: 'info' },
    // { name: 'Secheur', percentage: 20, class: 'warning' },
]);

const fetchData = async () => {
  const params = {};
  if (startDate.value) params.start_date = startDate.value;
  if (endDate.value) params.end_date = endDate.value;

  const token = authStore.token || localStorage.getItem('token');

  try {
    const response = await axios.get(API_PRODUCTION_AGGREGATE_URL, {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = response.data;

    // 🧮 Map backend data to Vue cards
    kpiData.value.arret_par_incident = data.arret_par_incident;
    kpiData.value.PRI = data.PRI;
    kpiData.value.total_production = data.total_production;

    kpiData.value.Ecart_type = data.Ecart_type;
    kpiData.value.HNA = data.HNA;
    kpiData.value.total_optimisation = data.total_optimisation;

    kpiData.value.Blaines = data.Blaines;
    kpiData.value.temp = data.temp;
    kpiData.value.total_qualites = data.total_qualites;

  } catch (error) {
    console.error('Error fetching KPIs:', error);
  }
};


const handleLogout = () => {
    authStore.logout();
    // Use router if available: router.push('/login');
    console.log('User logged out');
}

// ⚠️ IMPORTANT: Update the template bindings to use the new kpiData fields
// For the five production KPI cards, you should use the new fields:
// - TOTAL OPTIMISATION: {{ kpiData.incidents }}
// - TOTAL PERFORMANCE: {{ kpiData.performance }}%
// - TOTAL PRODUCTION BK1: {{ kpiData.production_bk1 }} (or keep {{ kpiData.errors }} if you prefer that naming)
// - TOTAL PRODUCTION BK4: {{ kpiData.production_bk4 }}
// - TOTAL PRODUCTION BK5: {{ kpiData.production_bk5 }}
// - TOTAL PRODUCTION SECHEUR: {{ kpiData.production_secheur }}

onMounted(() => {
    fetchData();
});
</script>



 <style >
        :root {
            --primary: #4e73df;
            --secondary: #858796;
            --success: #1cc88a;
            --info: #36b9cc;
            --warning: #f6c23e;
            --danger: #e74a3b;
            --light: #f8f9fc;
            --dark: #5a5c69;
        }
        
        body {
            background-color: #f8f9fc;
            font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        img{
            width: 100px;
            justify-content: center;
        }
        
        .sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 100;
            padding: 0;
            box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
            background-color: #4e73df;
            background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
            background-size: cover;
            width: 14rem;
        }
        
        .sidebar-brand {
            height: 4.375rem;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 800;
            padding: 1.5rem 1rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            z-index: 1;
            color: #fff;
        }
        
        .sidebar-divider {
            margin: 0 1rem 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .nav-item {
            position: relative;
            justify-content: space-between;
            gap: 10px;
            font-size: larger;
            font-weight: 100px;
            padding-top: 10px;
        }
        
        .nav-link {
            display: block;
            padding: 10px;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: all 0.15s;
        }
        
        .nav-link i {
            margin-right: 0.5rem;
        }
        
        .nav-link:hover {
            color: #fff;
        }
        
        .active {
            color: #fff !important;
        }
        
        .topbar {
            height: 4.375rem;
            position: sticky;
            top: 0;
            z-index: 99;
            box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
        }
        
        .main-content {
            margin-left: 14rem;
            padding-top: 1rem;
        }
        
        .card {
            box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
            border: none;
            border-radius: 0.35rem;
            margin-bottom: 1.5rem;
        }
        
        .card-header {
            background-color: #f8f9fc;
            border-bottom: 1px solid #e3e6f0;
            padding: 0.75rem 1.25rem;
        }
        
        .card-title {
            color: #4e73df;
            font-weight: 700;
            font-size: 1.1rem;
            margin-bottom: 0;
        }
        
        .kpi-card {
            border-left: 0.25rem solid;
            height: 100%;
        }
        
        .kpi-card .card-body {
            padding: 1.25rem;
        }
        
        .kpi-primary {
            border-left-color: var(--primary) !important;
        }
        
        .kpi-success {
            border-left-color: var(--success) !important;
        }
        
        .kpi-info {
            border-left-color: var(--info) !important;
        }
        
        .kpi-title {
            text-transform: uppercase;
            color: var(--secondary);
            font-size: 0.8rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .kpi-value {
            color: var(--dark);
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: 0;
        }
        
        .kpi-subtitle {
            color: var(--secondary);
            font-size: 0.8rem;
        }
        
        .trend-up {
            color: var(--success);
        }
        
        .trend-down {
            color: var(--danger);
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .notification-item {
            padding: 0.75rem 1.25rem;
            border-bottom: 1px solid #e3e6f0;
            transition: background-color 0.3s;
        }
        
        .notification-item:last-child {
            border-bottom: none;
        }
        
        .notification-item:hover {
            background-color: #f8f9fc;
        }
        
        .notification-title {
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 0.25rem;
        }
        
        .notification-content {
            color: var(--secondary);
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
        }
        
        .notification-time {
            color: var(--secondary);
            font-size: 0.8rem;
        }
        
        .traffic-source {
            margin-bottom: 1rem;
        }
        
        .traffic-source-name {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--dark);
            margin-bottom: 0.25rem;
        }
        
        .progress {
            height: 0.8rem;
            border-radius: 0.35rem;
            margin-bottom: 0.25rem;
        }
        
        .source-twitter { background-color: #1DA1F2; }
        .source-direct { background-color: #4e73df; }
        .source-social { background-color: #3b5998; }
        .source-search { background-color: #f6c23e; }
        .source-email { background-color: #e74a3b; }
        .source-brieran { background-color: #36b9cc; }
        
        .date-control {
            background-color: #fff;
            border: 1px solid #d1d3e2;
            border-radius: 0.35rem;
            padding: 0.5rem;
            font-size: 0.9rem;
        }
        
        .apply-btn {
            background-color: var(--primary);
            border: none;
            border-radius: 0.35rem;
            color: white;
            padding: 0.5rem 1rem;
            font-weight: 600;
            transition: background-color 0.3s;
        }
        
        .apply-btn:hover {
            background-color: #2e59d9;
        }
        
        .chart-container {
            position: relative;
            height: 20rem;
        }
    </style>
