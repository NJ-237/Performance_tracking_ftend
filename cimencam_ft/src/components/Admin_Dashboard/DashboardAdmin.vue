<template>

    <div class="sidebar-overlay" id="sidebarOverlay"></div>

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
          <router-link class="nav-link" to="/DashboardAdmin">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
         <li>
          <router-link class="nav-link" to="/ReportPerform" active-class="active">
            <i class="fas fa-sliders-h"></i>
            <span>CRO</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/ReportPerform"> 
            <i class="fas fa-shield-alt"></i>
            <span>Patroller</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/ReportPerform" active-class="active">
            <i class="fas fa-user-tie"></i>
            <span>Chef de quart</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/FeedbackAdmin">
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
        <div class="dashboard-header">
            <div class="dashboard-title">Operator Performance Dashboard</div>
            <div class="user-info">
                <div class="user-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div>Admin User</div>
                <i class="fas fa-bell"></i>
            </div>
        </div>
        
        <div class="dashboard-content">
            <!-- Best Operator Section -->
            <div class="dashboard-section">
                <h2 class="section-title">Top Performer</h2>
                <div class="card best-operator-card">
                    <div class="card-header">
                        <div><i class="fas fa-trophy"></i> Best Operator of the Month</div>
                        <div><i class="fas fa-calendar-alt"></i> July 2025</div>
                    </div>
                    <div class="card-body">
                        <div class="operator-content">
                            <div class="operator-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="operator-info">
                                <div class="operator-name">Alex Johnson</div>
                                <div>Production Line 3 | Shift B</div>
                                <div class="operator-stats">
                                    <div class="stat-item">
                                        <div class="stat-value">98.7%</div>
                                        <div class="stat-label">Efficiency</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-value">0.2%</div>
                                        <div class="stat-label">Error Rate</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-value">15</div>
                                        <div class="stat-label">Days Active</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Performance Stats Section -->
            <div class="dashboard-section">
                <h2 class="section-title">Performance Metrics</h2>
                <div class="dashboard-grid">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="card-icon bg-primary-light">
                                    <i class="fas fa-bolt"></i>
                                </div>
                                <div class="ms-3">
                                    <div class="card-title">Quality</div>
                                    <div class="card-value">94.3%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="card-icon bg-primary-light">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="ms-3">
                                    <div class="card-title">Production</div>
                                    <div class="card-value">875 T/h</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="card-icon bg-primary-light">
                                    <i class="fas fa-times-circle"></i>
                                </div>
                                <div class="ms-3">
                                    <div class="card-title">Optimisation</div>
                                    <div class="card-value">1.4%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="card-icon bg-primary-light">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="ms-3">
                                    <div class="card-title">Overall Output</div>
                                    <div class="card-value">99.1%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- KPI Histogram Section -->
            <div class="dashboard-section">
                <h2 class="section-title">Operator KPI Comparison</h2>
                <div class="card">
                    <div class="card-header">
                        <div>Key Performance Indicators by Operator</div>
                        <div>
                            <select class="form-select form-select-sm">
                                <option>July 2025</option>
                                <option>June 2025</option>
                                <option>May 2025</option>
                            </select>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="chart-container">
                            <canvas id="kpiChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Performance Table Section -->
            <div class="dashboard-section">
                <h2 class="section-title">Operator Performance Details</h2>
                <div class="card">
                    <div class="card-header">
                        <div>Operator Performance Metrics</div>
                        <div>
                            <button class="btn btn-sm btn-primary">
                                <i class="fas fa-download"></i> Export
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="performance-table">
                                <thead>
                                    <tr>
                                        <th>Operator</th>
                                        <th>Shift</th>
                                        <th colspan="2" >Optimisation</th>
                                        <th colspan="2" >Production</th>
                                        <th colspan="2">Quality</th>
                                        <th>Overall KPI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border: 2px solid black;">
                                        <td><i class="fas fa-user me-2"></i> Alima</td>
                                        <td>B</td>
                                        <td>98.7%</td>
                                        <td>98.7%</td>
                                        <td>920</td>
                                        <td>920</td>
                                        <td>0.2%</td>
                                        <td>0.2%</td>
                                        <td><span class="kpi-badge kpi-excellent">98.7</span></td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-user me-2"></i> Yembe Jules</td>
                                        <td>A</td>
                                        <td>95.2%</td>
                                        <td>890</td>
                                        <td>0.8%</td>
                                        <td>95.2%</td>
                                        <td>890</td>
                                        <td>0.8%</td>
                                        <td><span class="kpi-badge kpi-good">92.4</span></td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-user me-2"></i> Ngyah </td>
                                        <td>C</td>
                                        <td>92.8%</td>
                                        <td>870</td>
                                        <td>1.2%</td>
                                        <td>92.8%</td>
                                        <td>870</td>
                                        <td>1.2%</td>
                                        <td><span class="kpi-badge kpi-good">89.6</span></td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-user me-2"></i> Ombe Moise</td>
                                        <td>A</td>
                                        <td>89.4%</td>
                                        <td>840</td>
                                        <td>1.8%</td>
                                        <td>89.4%</td>
                                        <td>840</td>
                                        <td>1.8%</td>
                                        <td><span class="kpi-badge kpi-fair">85.2</span></td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-user me-2"></i> Bindjeme Hermine</td>
                                        <td>B</td>
                                        <td>86.3%</td>
                                        <td>810</td>
                                        <td>2.5%</td>
                                        <td>86.3%</td>
                                        <td>810</td>
                                        <td>2.5%</td>
                                        <td><span class="kpi-badge kpi-fair">80.8</span></td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-user me-2"></i> Total Outputs</td>
                                        <td></td>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><span class="kpi-badge kpi-poor"></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth';


const authStore = useAuthStore();
// authStore.initializeStore();
const router = useRouter();

const handleLogout = async () => {
  // Call the logout action from the Pinia store
  await authStore.logout();

  // Also clear the lastShiftId from localStorage and the store
  localStorage.removeItem('lastShiftId');
  authStore.lastShiftId = null;

  // Redirect the user to the login page after they successfully log out
  router.push('/login');
};

  // Initialize the KPI chart
        document.addEventListener('DOMContentLoaded', function() {
            // const ctx = document.getElementById('kpiChart').getContext('2d');
            
            // Sample data for the chart
            // const operators = ['Alima', 'Yembe Jules', 'Ngyah', 'Ombe Moise', 'Bindjeme Hermine'];
            // const efficiency = [98.7, 95.2, 92.8, 89.4, 86.3];
            // const output = [920, 890, 870, 840, 810];
            // const errorRate = [0.2, 0.8, 1.2, 1.8, 2.5];
            
            // const chart = new Chart(ctx, {
            //     type: 'bar',
            //     data: {
            //         labels: operators,
            //         datasets: [
            //             {
            //                 label: 'Efficiency (%)',
            //                 // data: efficiency, // if you comment it can remove the blue bar on the histogram 
            //                 backgroundColor: '#4361ee',
            //                 borderColor: '#3f37c9',
            //                 borderWidth: 1
            //             },
            //             {
            //                 label: 'Output (T/h)',
            //                 data: output,
            //                 backgroundColor: '#4cc9f0',
            //                 borderColor: '#3a9db9',
            //                 borderWidth: 1
            //             },
            //             {
            //                 label: 'Error Rate (%)',
            //                 data: errorRate,
            //                 backgroundColor: '#f72585',
            //                 borderColor: '#c01d6a',
            //                 borderWidth: 1
            //             }
            //         ]
            //     },
            //     options: {
            //         responsive: true,
            //         maintainAspectRatio: false,
            //         scales: {
            //             y: {
            //                 beginAtZero: true,
            //                 title: {
            //                     display: true,
            //                     text: 'Performance Metrics'
            //                 }
            //             }
            //         },
            //         plugins: {
            //             legend: {
            //                 position: 'top',
            //             },
            //             title: {
            //                 display: true,
            //                 text: 'Operator Performance Comparison'
            //             }
            //         }
            //     }
            // });
            
            // Add interactivity to table rows
            const tableRows = document.querySelectorAll('.performance-table tbody tr');
            tableRows.forEach(row => {
                row.addEventListener('click', function() {
                    // Remove active class from all rows
                    tableRows.forEach(r => r.classList.remove('table-active'));
                    
                    // Add active class to clicked row
                    this.classList.add('table-active');
                    
                    // In a real app, you might show details for this operator
                });
            });
        });
</script>

<style scoped>
      :root {
            --primary: #4361ee;
            --secondary: #3f37c9;
            --accent: #4895ef;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4cc9f0;
            --warning: #f72585;
            --sidebar-bg: #1a2035;
            --card-bg: #ffffff;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f7fb;
            min-height: 100vh;
            overflow-x: hidden;
            display: flex;
        }
        
        /* Sidebar Styles */
        .sidebar {
            width: 250px;
            background: var(--sidebar-bg);
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
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .logo i {
            margin-right: 10px;
            color: var(--accent);
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
            font-size: 1.2rem;
        }
        
        /* Main Content */
        .main-content {
            margin-left: 250px;
            padding: 0;
            flex: 1;
        }
        
        .dashboard-header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 20px 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .dashboard-title {
            font-size: 1.5rem;
            font-weight: 600;
        }
        
        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .dashboard-content {
            padding: 30px;
        }
        
        .card {
            background: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 24px;
            border: none;
            overflow: hidden;
            height: 100%;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        
        .card-header {
            background-color: white;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            font-weight: 600;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .card-body {
            padding: 20px;
        }
        
        /* Best Operator Card */
        .best-operator-card {
            background: linear-gradient(135deg, #ffd700, #ffa500);
            color: #333;
            border: none;
        }
        
        .best-operator-card .card-header {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .operator-content {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .operator-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #ffa500;
        }
        
        .operator-info {
            flex: 1;
        }
        
        .operator-name {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .operator-stats {
            display: flex;
            gap: 20px;
            margin-top: 15px;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        /* Chart Styles */
        .chart-container {
            position: relative;
            height: 300px;
            width: 100%;
        }
        
        /* Table Styles */
        .performance-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
        }
        
        .performance-table thead th {
            background-color: var(--primary);
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }
        
        .performance-table tbody td {
            padding: 15px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .performance-table tbody tr:nth-child(even) {
            background-color: rgba(0,0,0,0.02);
        }
        
        .performance-table tbody tr:hover {
            background-color: rgba(67, 97, 238, 0.05);
        }
        
        .kpi-badge {
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            display: inline-block;
        }
        
        .kpi-excellent { background-color: #28a745; color: white; }
        .kpi-good { background-color: #ffc107; color: #333; }
        .kpi-fair { background-color: #fd7e14; color: white; }
        .kpi-poor { background-color: #dc3545; color: white; }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .card-title {
            font-size: 1rem;
            font-weight: 600;
            color: #6c757d;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .card-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }
        
        .bg-primary-light {
            background: rgba(67, 97, 238, 0.1);
            color: var(--primary);
        }
        
        .card-value {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--dark);
            margin: 10px 0;
        }
        
        .dashboard-section {
            margin-bottom: 40px;
        }
        
        .section-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: var(--dark);
            font-weight: 600;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--primary);
        }
        
        img {
            width: 70px;
            padding-right: 20px;
        }
        
        /* Responsive adjustments */
        /* @media (max-width: 992px) {
            .sidebar {
                transform: translateX(-250px);
            }
            .main-content {
                margin-left: 0;
            }
            .operator-content {
                flex-direction: column;
                text-align: center;
            }
        }
        
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
        } */
</style>
