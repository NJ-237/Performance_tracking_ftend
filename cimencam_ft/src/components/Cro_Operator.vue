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
          <router-link class="nav-link" to="/logout">
            <i class="fas fa-sign-out-alt"></i>
            <span>LogOut</span>
          </router-link>
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
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ userName }}</span>
                                <img class="user-avatar" :src="userAvatar" alt="User Avatar">
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- Filters -->
            <div class="container-fluid">
                <div class="row mb-4">
                    <div class="col-md-3">
                        <label class="form-label">Start Date</label>
                        <input type="date" class="form-control date-control" v-model="startDate">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">End Date</label>
                        <input type="date" class="form-control date-control" v-model="endDate">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">Report Type</label>
                        <select class="form-select date-control" v-model="reportType">
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>
                    <div class="col-md-3 d-flex align-items-end">
                        <button class="btn apply-btn w-100" @click="fetchData">Apply Filters</button>
                    </div>
                </div>

                <!-- KPI Cards -->
                <div class="row">
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-primary">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL OPTIMISATION</div>
                                <div class="kpi-value">{{ kpiData.incidents }}</div>
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
                                <div class="kpi-title">TOTAL PERFORMANCE</div>
                                <div class="kpi-value">{{ kpiData.performance }}%</div>
                                <div class="kpi-subtitle">This month</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 mb-4">
                        <div class="card kpi-card kpi-info">
                            <div class="card-body">
                                <div class="kpi-title">TOTAL PRODUCTION</div>
                                <div class="kpi-value">{{ kpiData.errors }}</div>
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
                    <!-- Revenue Chart -->
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
                                <div class="chart-container">
                                    <canvas ref="revenueChart"></canvas>
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


    <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
    
<script setup>
            import { ref } from 'vue'
            // import { useAuthStore } from '../store/auth'
            // import { useRouter } from 'vue-router'

            // const auth = useAuthStore()
            // const router = useRouter()

            // const logout = () => {
            // auth.logout()
            // router.push('/login')
            // }

            // Initialize kpiData with default values
            const kpiData = ref({
            incidents: 0,
            incidentsTrend: 0,
            performance: 0,
            errors: 0,
            errorsTrend: 0,
            })

            // Initialize other data similarly (e.g. userName, userAvatar, notifications, trafficSources)
            // Example:
            const userName = ref('User')
            const userAvatar = ref('path_to_avatar.jpg')
            const notifications = ref([])
            const trafficSources = ref([])

            // Your fetchData function should update kpiData.value when data is received
            async function fetchData() {
            // Fetch your data here, e.g. via axios
            // Then update kpiData.value = { ...newData }
            }

            // pop pop form script

           

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
