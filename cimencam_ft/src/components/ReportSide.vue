<template>
    <div id="app"> 
      <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <div style=" background: #1a2035;
  color: black;" class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="logo">
                <img src="C:\projects\cimencam_app\frontend\Performance_tracking_ftend\cimencam_ft\src\assets\img\10_48_34_cimencam_logo.png" alt="" srcset="">
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
                <router-link class="nav-link" to="/Report"> 
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
                <button @click="handleLogout" class="logout-btn">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>LogOut</span>
                </button>
                
            </li>
        </ul>
    </div>

    <div style="background: white;" class="app-container">
        <!-- Header Section -->
        <div class="header1 mb-4">
            <div class="logo1-container1">
                <div class="logo1">CC</div>
                <div>
                    <h1><i class="fas fa-industry"></i> Cimencam Production Report</h1>
                    <p>Daily production monitoring and KPI analysis</p>
                </div>
            </div>
        </div>

        <!-- Date Selection -->
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="input-group">
                    <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                    <input type="date" class="form-control">
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <button class="btn print-btn">
                    <i class="fas fa-print me-2"></i> Print Report
                </button>
            </div>
        </div>

        <!-- Shift Cards -->
        <h3 class="section-title">Shift Management</h3>
        <div class="row mb-4">
            <div class="col-md-4 mb-3">
                <div class="shift-card">
                    <div class="shift-header shift-1">
                        <i class="fas fa-sun me-2"></i> Shift 1 (6:00 AM - 1:00 PM)
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="card-title">Production Data</h5>
                            <button class="btn btn-sm btn-outline-primary" @click="openShiftModal(1)">
                                <i class="fas fa-edit me-1"></i> Enter Data
                            </button>
                        </div>
                        <div class="data">
                            <button style="border: none;" type="submit" @click="openShiftModal1(1)"><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-1</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal2(1)"><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-4</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal3(1)"><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-5</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal4(1)"><p class="mb-1">
                                <i class="fas fa-wind me-2 text-primary"></i> SECHEUR</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal5(1)"><p class="mb-1">
                                <i class="fas fa-ship me-2 text-primary"></i> PORT</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal6(1)"><p class="mb-1">
                                <i class="fas fa-truck me-2 text-primary"></i> EXPEDITION</p> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 mb-3">
                <div class="shift-card">
                    <div class="shift-header shift-2">
                        <i class="fas fa-cloud-sun me-2"></i> Shift 2 (1:00 PM - 9:00 PM)
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="card-title">Production Data</h5>
                            <button class="btn btn-sm btn-outline-primary" @click="openShiftModal(1)">
                                <i class="fas fa-edit me-1"></i> Enter Data
                            </button>
                        </div>
                        <div class="data">
                            <button style="border: none;" type="submit" @click="openShiftModal1(1)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-1</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal2(1)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-4</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal3(1)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-5</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal4(1)" ><p class="mb-1">
                                <i class="fas fa-wind me-2 text-primary"></i> SECHEUR</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal5(1)" ><p class="mb-1">
                                <i class="fas fa-ship me-2 text-primary"></i> PORT</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal6(1)" ><p class="mb-1">
                                <i class="fas fa-truck me-2 text-primary"></i> EXPEDITION</p> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 mb-3">
                <div class="shift-card">
                    <div class="shift-header shift-3">
                        <i class="fas fa-moon me-2"></i> Shift 3 (9:00 PM - 6:00 AM)
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="card-title">Production Data</h5>
                            <button class="btn btn-sm btn-outline-primary" @click="openShiftModal(1)">
                                <i class="fas fa-edit me-1"></i> Enter Data
                            </button>
                        </div>
                        <div class="data">
                            <button style="border: none;" type="submit" @click="openShiftModal1(1)"><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-1</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal2(1)"><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-4</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal3(1)"><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-5</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal4(1)"><p class="mb-1">
                                <i class="fas fa-wind me-2 text-primary"></i> SECHEUR</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal5(1)"><p class="mb-1">
                                <i class="fas fa-ship me-2 text-primary"></i> PORT</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal6(1)"><p class="mb-1">
                                <i class="fas fa-truck me-2 text-primary"></i> EXPEDITION</p> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- KPI Cards -->
        <h3 class="section-title">Key Performance Indicators</h3>
        <div class="row mb-4">
            <div class="col-md-3 mb-3">
                <div class="kpi-card">
                    <h5><i class="fas fa-tachometer-alt me-2"></i> OPTIMISATION</h5>
                    <div class="kpi-value"></div>
                    <p class="text-muted">(Target: 85%)</p>
                </div>
            </div>
            
            <div class="col-md-3 mb-3">
                <div class="kpi-card">
                    <h5><i class="fas fa-certificate"></i> QUALITY</h5>
                    <div class="kpi-value"></div>
                    <p class="text-muted">(Target: 92%)</p>
                </div>
            </div>
            
            <div class="col-md-3 mb-3">
                <div class="kpi-card">
                    <h5><i class="fas fa-industry"></i> PRODUCTION</h5>
                    <div class="kpi-value"></div>
                    <p class="text-muted">(Target: 2)</p>
                </div>
            </div>
            
            <div class="col-md-3 mb-3">
                <div class="kpi-card">
                    <h5><i class="fas fa-chart-line"></i> Total Production</h5>
                    <div class="kpi-value text-primary"></div>
                    <p class="text-muted">(Target:1 tons)</p>
                </div>
            </div>
        </div>

        <!-- Report Table -->
        <h3 class="section-title">Daily Production Report</h3>
        <div class="table-container">
            <table class="table table-hover report-table">
                <thead>
                    <tr>
                        <th>Shift</th>
                        <th>Cement (tons)</th>
                        <th>Clinker (tons)</th>
                        <th>Gypsum (tons)</th>
                        <th>Additives (kg)</th>
                        <th>Energy (kWh)</th>
                        <th>Downtime (mins)</th>
                        <th>Issues</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="broyeur1Data in broyeur1Datas" v-bind:key="broyeur1Data.url"> -->
                    <tr>
                        <td><strong></strong></td>
                        <td><input type="number" class="form-control form-control-sm"></td>
                        <td><input type="number" class="form-control form-control-sm"></td>
                        <td><input type="number" class="form-control form-control-sm"></td>
                        <td><input type="number" class="form-control form-control-sm"></td>
                        <td><input type="number" class="form-control form-control-sm"></td>
                        <td><input type="number" class="form-control form-control-sm"></td>
                        <td><input type="text" class="form-control form-control-sm" placeholder="Describe issues..."></td>
                        <td>
                            <button class="btn btn-sm btn-success action-btn">
                                <i class="fas fa-save me-1"></i> Save
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td><strong></strong></td>
                        <td colspan="2"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Shift Data Entry Modal -->
        <div class="modal fade" id="shiftModal" ref="shiftModal" tabindex="-1"  >
            <div class="modal-dialog modal-lg modal-dialog-centered">
            <form action="" @submit.prevent="handleshift">       
                {% csrf_token %}           
                <div class="modal-content">
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
                       
                    </div>
                </form> 
            </div>
        </div>
                                        
        <!-- BROYEUR-1 Modal -->
        <div class="modal fade" id="shiftModal1" ref="shiftModal1" tabindex="-1" >
            <div class="modal-dialog modal-lg">
            <form action="" @submit.prevent="handleBK1">   
                 {% csrf_token %}   
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>BROYEUR-1 Report</h3>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Clinker</th>
                                                    <th>POUZZOLANE</th>
                                                    <th>GYPSE</th>
                                                    <th>Fine</th>
                                                    <th>Compteur Horaires</th>
                                                    <th>Ciment produit</th>
                                                    <th>Commentaires</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="fine_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="fine_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model="fine_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Production</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_Production"></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_Production"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_Production"></td>
                                                    <td><input type="text" class="form-control" v-model="fine_Production"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_Production"></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>BROYEUR-1 Report</h3>
                                        
                                        <div class="form-sections">
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Extraction Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="extraction_silo1" > Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="extraction_silo2" > Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="extraction_silo3" > Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="extraction_silo4" > Silo kk 4</label>
                                                    <label><input type="checkbox" v-model="extraction_silo5" > Quai 029</label>
                                                    <label><input type="checkbox" v-model="extraction_silo6" > Hall</label>
                                                    <label><input type="checkbox" v-model="extraction_silo7" > Compteur Marche a vide</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="ensilage_silo1" > Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo2" > Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo3" > Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo4" > Silo kk 4</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo5" > Silo kk 5</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo6" > Silo kk 6</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo7" > Silo kk 7</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo8" > Silo kk 8</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo9" > Silo kk 9</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo10" > Silo kk 10</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo11" > Silo kk 11</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                            <i class="fas fa-save me-1"></i> Save Shift Data
                        </button>
                    </div>
                </div>
            </form> 
            </div>
        </div>


        <!-- BROYEUR-4 Modal -->
        <div class="modal fade" id="shiftModal2" ref="shiftModal2" tabindex="-1">
            <div class="modal-dialog modal-lg">
             <form @submit.prevent="handleBK4">
                 {% csrf_token %}   
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>BROYEUR-4 Report</h3>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Clinker</th>
                                                    <th>POUZZOLANE</th>
                                                    <th>GYPSE</th>
                                                    <th>Fine</th>
                                                    <th>Compteur Horaires</th>
                                                    <th>Ciment produit</th>
                                                    <th>Commentaires</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="text" class="form-contrclinker_debut" ></td>
                                                    <td><input type="text" class="form-contrPZ_debut" ></td>
                                                    <td><input type="text" class="form-contrgypse_debut" ></td>
                                                    <td><input type="text" class="form-contrfine_debut" ></td>
                                                    <td><input type="text" class="form-contrcompteur_horaire_debut" ></td>
                                                    <td><input type="text" class="form-contrciment_produit" ></td>
                                                    <td><input type="text" class="form-contrcommentaires" ></td>
                                                    <td><input type="text" class="form-contrTonnage" ></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="text" class="form-contrclinker_fin" ></td> 
                                                    <td><input type="text" class="form-contrPZ_fin" ></td>
                                                    <td><input type="text" class="form-contrgypse_fin" ></td>
                                                    <td><input type="text" class="form-contrfine_fin" ></td>
                                                    <td><input type="text" class="form-contrcompteur_horaire_fin" ></td>
                                                    <td><input type="text" class="form-contrciment_produit" ></td>
                                                    <td><input type="text" class="form-contrcommentaires" ></td>
                                                    <td><input type="text" class="form-contrTonnage" ></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="text" class="form-contrclinker_Difference" ></td>
                                                    <td><input type="text" class="form-contrPZ_Difference" ></td>
                                                    <td><input type="text" class="form-contrgypse_Difference" ></td>
                                                    <td><input type="text" class="form-contrfine_Difference" ></td>
                                                    <td><input type="text" class="form-contrcompteur_horaire_Difference" ></td>
                                                    <td><input type="text" class="form-contrciment_produit"></td>
                                                    <td><input type="text" class="form-contrcommentaires"></td>
                                                    <td><input type="text" class="form-contrTonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Production</span></td>
                                                    <td><input type="text" class="form-contrclinker_Production" ></td>
                                                    <td><input type="text" class="form-contrPZ_Production" ></td>
                                                    <td><input type="text" class="form-contrgypse_ProPZ_Production" ></td>
                                                    <td><input type="text" class="form-contrfine_ProPZ_Production" ></td>
                                                    <td><input type="text" class="form-contrcompteur_horaire_ProPZ_Production" ></td>
                                                    <td><input type="text" class="form-contrciment_produit"></td>
                                                    <td><input type="text" class="form-contrcommentaires"></td>
                                                    <td><input type="text" class="form-contrTonnage"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>BROYEUR-4 Report</h3>
                                        
                                        <div class="form-sections">
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Extraction Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="extraction_silo1" > Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="extraction_silo2" > Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="extraction_silo3" > Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="extraction_silo4" > Silo kk 4</label>
                                                    <label><input type="checkbox" v-model="extraction_silo5" > Quai 029</label>
                                                    <label><input type="checkbox" v-model="extraction_silo6" > Hall</label>
                                                    <label><input type="checkbox" v-model="extraction_silo7" > Compteur Marche a vide</label>
                                                </div>
                                            </div>
                                            
                                                                                           <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="ensilage_silo1" > Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo2" > Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo3" > Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo4" > Silo kk 4</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo5" > Silo kk 5</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo6" > Silo kk 6</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo7" > Silo kk 7</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo8" > Silo kk 8</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo9" > Silo kk 9</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo10" > Silo kk 10</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo11" > Silo kk 11</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                                    <i class="fas fa-save me-1"></i> Save Shift Data
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>

        <!-- BROYEUR-5 Modal -->
        <div class="modal fade" id="shiftModal3" ref="shiftModal3" tabindex="-1" >
            <div class="modal-dialog modal-lg">
              <form @submit.prevent="handleBK5">
                 {% csrf_token %}   
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>BROYEUR-5 Report</h3>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Clinker</th>
                                                    <th>POUZZOLANE</th>
                                                    <th>GYPSE</th>
                                                    <th>Fine</th>
                                                    <th>Compteur Horaires</th>
                                                    <th>Ciment produit</th>
                                                    <th>Commentaires</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_debut" ></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_debut" ></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_debut" ></td>
                                                    <td><input type="text" class="form-control" v-model="fine_debut" ></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_debut" ></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_fin" ></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_fin" ></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_fin" ></td>
                                                    <td><input type="text" class="form-control" v-model="fine_fin" ></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_fin" ></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_Difference" ></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_Difference" ></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_Difference" ></td>
                                                    <td><input type="text" class="form-control" v-model="fine_Difference" ></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_Difference" ></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Production</span></td>
                                                    <td><input type="text" class="form-control" v-model="clinker_Production" ></td>
                                                    <td><input type="text" class="form-control" v-model="PZ_Production" ></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_Production" ></td>
                                                    <td><input type="text" class="form-control" v-model="fine_Production" ></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_horaire_Production" ></td>
                                                    <td><input type="text" class="form-control" v-model="ciment_produit"></td>
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="Tonnage"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>BROYEUR-5 Report</h3>
                                        
                                        <div class="form-sections">
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Extraction Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="extraction_silo1" > Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="extraction_silo2" > Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="extraction_silo3" > Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="extraction_silo4" > Silo kk 4</label>
                                                    <label><input type="checkbox" v-model="extraction_silo5" > Quai 029</label>
                                                    <label><input type="checkbox" v-model="extraction_silo6" > Hall</label>
                                                    <label><input type="checkbox" v-model="extraction_silo7" > Compteur Marche a vide</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="ensilage_silo1" > Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo2" > Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo3" > Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo4" > Silo kk 4</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo5" > Silo kk 5</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo6" > Silo kk 6</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo7" > Silo kk 7</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo8" > Silo kk 8</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo9" > Silo kk 9</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo10" > Silo kk 10</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo11" > Silo kk 11</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                            <i class="fas fa-save me-1"></i> Save Shift Data
                        </button>
                    </div>
                </div>
            </form>  
            </div>
        </div>

        <!-- SECHEUR Modal -->
        <div class="modal fade" id="shiftModal4" ref="shiftModal4" tabindex="-1" >
            <div class="modal-dialog modal-lg">
              <form @submit.prevent="handleSecheur">
                 {% csrf_token %}   
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div id="carouselExampleIndicators4" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Secheur Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>Consommation Matieres Premieres</h3>
                                        <button class="btn btn-add" @click="addRow('cro')">
                                            <i class="fas fa-plus me-1"></i> Add New CRO Row
                                        </button>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Pouzzolane Humide</th>
                                                    <th>Bande Melange</th>
                                                    <th>Compteur Horaire</th>
                                                    <th>Quality</th>
                                                    <th>Commentaires</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="text" class="form-control" v-model = "PZ_humide_debut"></td>
                                                    <td><input type="text" class="form-control" v-model = "bande_melange_debut"></td>
                                                    <td><input type="text" class="form-control" v-model = "compteur_horaire_debut"></td>
                                                    <td><input type="text" class="form-control" v-model = "quality"></td>
                                                    <td><input type="text" class="form-control" v-model = "commentaires"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="text" class="form-control" v-model = "PZ_humide_fin"></td>
                                                    <td><input type="text" class="form-control" v-model = "bande_melange_fin"></td>
                                                    <td><input type="text" class="form-control" v-model = "compteur_horaire_fin"></td>
                                                    <td><input type="text" class="form-control" v-model = "quality"></td>
                                                    <td><input type="text" class="form-control" v-model = "commentaires"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="text" class="form-control" v-model = "PZ_humide_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model = "bande_melange_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model = "compteur_horaire_Difference"></td>
                                                    <td><input type="text" class="form-control" v-model = "quality"></td>
                                                    <td><input type="text" class="form-control" v-model = "commentaires"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Production</span></td>
                                                    <td><input type="text" class="form-control" v-model = "PZ_humide_Production"></td>
                                                    <td><input type="text" class="form-control" v-model = "bande_melange_Production"></td>
                                                    <td><input type="text" class="form-control" v-model = "compteur_horaire_Production"></td>
                                                    <td><input type="text" class="form-control" v-model = "quality"></td>
                                                    <td><input type="text" class="form-control" v-model = "commentaires"></td>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th>Nbre de godets</th>
                                                    <th>Poids godets</th>
                                                    <th>Debit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="text" class="form-control" v-model = "nbre_godets"></td>
                                                    <td><input type="text" class="form-control" v-model = "poids_godets"></td>
                                                    <td><input type="text" class="form-control" v-model = "debit"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>Secheur Report</h3>
                                        <button class="btn btn-add" @click="addRow('cro')">
                                            <i class="fas fa-plus me-1"></i> Add New CRO Row
                                        </button>
                                        
                                        <div class="form-sections">
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model = "ensilage_silo1"> Silo kk 1</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo2"> Silo kk 2</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo3"> Silo kk 3</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo4"> Silo kk 4</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo5"> Silo kk 5</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo6"> Silo kk 6</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo7"> Silo kk 7</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo8"> Silo kk 8</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo9"> Silo kk 9</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo10"> Silo kk 10</label>
                                                    <label><input type="checkbox" v-model = "ensilage_silo11"> Silo kk 11</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Situation A L'entree Du Quart</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model = "situation_entree_quart1"> En Marche</label>
                                                    <label><input type="checkbox" v-model = "situation_entree_quart2"> En Arret</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                            <i class="fas fa-save me-1"></i> Save Shift Data
                        </button>
                    </div>
                </div>
            </form>  
            </div>
        </div>

        <!-- PORT Modal -->
        <div class="modal fade" id="shiftModal5" ref="shiftModal5" tabindex="-1" >
            <div class="modal-dialog modal-lg">
              <form @submit.prevent="handlePort"> 
                 {% csrf_token %}   
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div id="carouselExampleIndicators5" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>Port Report</h3>
                                        <button class="btn btn-add" @click="addRow('cro')">
                                            <i class="fas fa-plus me-1"></i> Add New CRO Row
                                        </button>
                                        
                                        <div class="form-sections">
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label style="color: black;"><input type="checkbox" v-model= "extraction_silo"> Silo kk 1</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo1"> Silo kk 2</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo2"> Silo kk 3</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo3"> Silo kk 4</label>
                                                     <label><input type="checkbox" v-model="ensilage_silo4" > Silo kk 5</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo5" > Silo kk 6</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo6" > Silo kk 7</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo7" > Silo kk 8</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo8" > Silo kk 9</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo9" > Silo kk 10</label>
                                                    <label><input type="checkbox" v-model="ensilage_silo10" > Silo kk 11</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Situation A L'entree Du Quart</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" v-model="situation_entree_quart1"> En Marche</label>
                                                    <label><input type="checkbox" v-model="situation_entree_quart2"> En Arret</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>Port Report</h3>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Commentaires</th>
                                                    <th>Debut</th>
                                                    <th>Fin</th>
                                                    <th>Duree</th>
                                                    <th colspan="2">Compteur Debut</th>
                                                    <th>Compteur Fin</th>
                                                    <th>Dechargement</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <!-- <td><span class="date-badge">Compteur Debut</span></td> -->
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="debut"></td>
                                                    <td><input type="text" class="form-control" v-model="fin"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="dechargement"></td>
                                                </tr>
                                                <tr>
                                                    <!-- <td><span class="date-badge">Compteur Fin</span></td> -->
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="debut"></td>
                                                    <td><input type="text" class="form-control" v-model="fin"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="dechargement"></td>
                                                </tr>
                                                <tr>
                                                    <!-- <td><span class="date-badge">Difference</span></td> -->
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="debut"></td>
                                                    <td><input type="text" class="form-control" v-model="fin"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="dechargement"></td>
                                                </tr>
                                                <tr>
                                                    <!-- <td><span class="date-badge">Production</span></td> -->
                                                    <td><input type="text" class="form-control" v-model="commentaires"></td>
                                                    <td><input type="text" class="form-control" v-model="debut"></td>
                                                    <td><input type="text" class="form-control" v-model="fin"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_debut"></td>
                                                    <td><input type="text" class="form-control" v-model="compteur_fin"></td>
                                                    <td><input type="text" class="form-control" v-model="dechargement"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                            <i class="fas fa-save me-1"></i> Save Shift Data
                        </button>
                    </div>
                </div>
                </form> 
            </div>
        </div>

        <!-- EXPEDITION Modal -->
        <div class="modal fade" id="shiftModal6" ref="shiftModal6" tabindex="-1" >
            <div class="modal-dialog modal-lg">
              <form @submit.prevent="handleExp">
                 {% csrf_token %}   
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div id="carouselExampleIndicators6" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>Expedition Report</h3>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Expedition</th>
                                                    <th>Extraction kk (lieu)</th>
                                                    <th>Nbre Camion</th>
                                                    <th>Tonnage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">KK Chargee Nomayos</span></td>
                                                    <td><input type="text" class="form-control" v-model="KK_chargee_nomayos"></td>
                                                    <td><input type="text" class="form-control" v-model="KK_chargee_nomayos_NbreCamion"></td>
                                                    <td><input type="text" class="form-control" v-model="KK_chargee_nomayos_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Gypse Chargee Nomayos</span></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_chargee_nomayos_kk"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_chargee_nomayos_NbreCamion"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_chargee_nomayos_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Gypse Figuil = T</span></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_figuil_KK"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_figuil_NbreCamion"></td>
                                                    <td><input type="text" class="form-control" v-model="gypse_figuil_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Petcoke figuil = T</span></td>
                                                    <td><input type="text" class="form-control" v-model="petcoke_figuil_kk"></td>
                                                    <td><input type="text" class="form-control" v-model="petcoke_figuil_NbreCamion"></td>
                                                    <td><input type="text" class="form-control" v-model="petcoke_figuil_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">KK Cimaf</span></td>
                                                    <td><input type="text" class="form-control" v-model="kk_cimaf_kk" ></td>
                                                    <td><input type="text" class="form-control" v-model="kk_cimaf_NbreCamion" ></td>
                                                    <td><input type="text" class="form-control" v-model="kk_cimaf_Tonnage" ></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">KK Dangote</span></td>
                                                    <td><input type="text" class="form-control" v-model="kk_dangote_kk" ></td>
                                                    <td><input type="text" class="form-control" v-model="kk_dangote_NbreCamion" ></td>
                                                    <td><input type="text" class="form-control" v-model="kk_dangote_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">KK Miraco</span></td>
                                                    <td><input type="text" class="form-control" v-model="kk_miraco_kk" ></td>
                                                    <td><input type="text" class="form-control" v-model="kk_miraco_NbreCamion" ></td>
                                                    <td><input type="text" class="form-control" v-model="kk_miraco_Tonnage" ></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-cow me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-user me-2"></i>Expedition Report</h3>
                                        
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Reception Camion Des Rejets</th>
                                                    <th>Provenance (Lieu)</th>
                                                    <th>Nbre Camion</th>
                                                    <th>Tonnage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="text" class="form-control" v-model="reception_camions_rejets" ></td>
                                                    <td><input type="text" class="form-control" v-model="provenance_lieu" ></td>
                                                    <td><input type="text" class="form-control" v-model="nbre_camion" ></td>
                                                    <td><input type="text" class="form-control" v-model="tonnage" ></td>
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th colspan="2">Stock de la biomasse</th>
                                                    <th colspan="2">Receptions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span>No Godets CIM</span></td>
                                                    <td><span>Godets Geoycle</span></td>
                                                    <td><input type="text" class="form-control" v-model="no_godets_cim_biomasse" ></td>
                                                    <td><input type="text" class="form-control" v-model="godets_geocycle_biomasse" ></td>
                                                </tr>
                                                <tr>
                                                    <td><span>No Godets</span></td>
                                                    <td><span>Tonnage</span></td>
                                                    <td><input type="text" class="form-control" v-model="no_godets_receptions"></td>
                                                    <td><input type="text" class="form-control" v-model="tonnage_stock_receptions"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveShiftData">
                            <i class="fas fa-save me-1"></i> Save Shift Data
                        </button>
                    </div>
                </div>
             </form>     
            </div>
        </div>
    </div>
<!-- </div> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
// import api from '../services/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthStore } from '../store/auth';
import routes from '@/router/routes';
import axios from 'axios';
// import { computed } from 'vue';

// import axios from 'axios'; // Or use fetch API

// const routes = useRouter();  
const authStore = useAuthStore();
const successMessage = ref('');
const errorMessage = ref('');
// const routes = useRouter();


const tonnage_stock_receptions = ref(''); // Or whatever initial value makes sense

// Add these data properties
const shiftData = ref({
  date: new Date().toISOString().split('T')[0],
  shiftNumber: 1
});


const CRO1 = ref('');
const CRO2 = ref('');
const Patroller1 = ref('');
const Patroller2 = ref('');
const CDQ = ref('');
const APP_ELEC = ref('');
const APP_MECA = ref('');
const Laboratin1 = ref('');
const Laboratin2 = ref('');

// This code is used to call the dfferent operators registered in the backend so that 
// when the user wants to fill in the form , it should display the name of those present 
// in the backend as a dropdown with their names as a list
let cros=[]
let patrollers=[]
let cdqs=[]

const loading = ref(false);
// const error = ref(null);

// Function to fetch all roles at once
const fetchAllRoles = async () => {
  loading.value = true;
  errorMessage.value = null;

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/role_drop/');
    
    // Assign the data from the API response to the correct reactive variables
    cros= response.data["CRO"];
    patrollers= response.data["Patroller"];
    cdqs = response.data["CDQ"];

    console.log("CRO profiles fetched:", cros);
    //  alert(cros)
    console.log("Patroller profiles fetched:", patrollers);
    console.log("CDQ profiles fetched:", cdqs);
    
  } catch (err) {
    console.error("API call failed:", err);
    errorMessage.value = 'Failed to load user roles. Please check the network.';
  } finally {
    loading.value = false;
  }
};

// Lifecycle hook to call the function when the component is mounted
onMounted(() => {
  fetchAllRoles();
});



// handle logout 
// Use a computed property to reactively get the user data from the store
// This ensures the template updates automatically if the user object changes
// const user = computed(() => authStore.user);
const handleLogout = async () => {
  // Call the logout action from the Pinia store
  await authStore.logout();

  // Redirect the user to the login page after they successfully log out
  routes.push('/login');
};



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
      routes.push('/Report')
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


  
 const clinker_debut = ref('');
 const clinker_fin = ref('');
 const clinker_Difference = ref('');
 const PZ_debut = ref('');
 const PZ_fin = ref('');
 const PZ_Difference = ref('');
 const gypse_debut = ref('');
 const gypse_fin = ref('');
 const gypse_Difference = ref('');
 const fine_debut = ref('');
 const fine_fin = ref('');
 const fine_Difference = ref('');
 const compteur_horaire_debut = ref('');
 const compteur_horaire_fin = ref('');
 const compteur_horaire_Difference = ref('');
 const ciment_produit = ref('');
 const Tonnage = ref('');
 const commentaires = ref('');
//   extraction_silo: [], // Change to array for checkboxes
//   ensilage_silo: [] 
const extraction_silo1 = ref('');
const extraction_silo2 = ref('');
const extraction_silo3 = ref('');
const extraction_silo4 = ref('');
const extraction_silo5 = ref('');
const extraction_silo6 = ref('');
const extraction_silo7 = ref('');



const ensilage_silo1 = ref('')
const ensilage_silo2 = ref('')
const ensilage_silo3 = ref('')
const ensilage_silo4 = ref('')
const ensilage_silo5 = ref('')
const ensilage_silo6 = ref('')
const ensilage_silo7 = ref('')
const ensilage_silo8 = ref('')
const ensilage_silo9 = ref('')
const ensilage_silo10 = ref('')
const ensilage_silo11 = ref('')
const no_godets_receptions = ref(0)


  
 
 


// Secheur Inputs 
     
const  PZ_humide_debut  = ref('');
const  PZ_humide_fin  = ref('');
const  PZ_humide_Difference  = ref('');
const  PZ_humide_Production  = ref('');
const  bande_melange_debut  = ref('');
const  bande_melange_fin  = ref('');
const  bande_melange_Difference  = ref('');
const  bande_melange_Production = ref('');
// const  compteur_horaire_debut  = ref('');
//   compteur_horaire_fin  = ref('');
// const  compteur_horaire_Difference  = ref('');
 const compteur_horaire_Production  = ref('');
const  quality  = ref('');
// const  commentaires:  = ref('');
const  nbre_godets  = ref('');
 const poids_godets  = ref('');
const  debit  = ref('');
//   extraction_silo: [], // Change to array for checkboxes
//   ensilage_silo: [] ,
const  situation_entree_quart1 = ref('');
const  situation_entree_quart2 = ref('');


// Inputs of port 

//  const  commentaires = ref('');
 const  debut = ref('');
 const  fin = ref('');
//  const  duree = ref('');
 const  compteur_debut = ref('');
 const  compteur_fin = ref('');
 const  dechargement = ref('');
//   ensilage_silo: [],
//   situation_entree_quart: []


 const   KK_chargee_nomayos = ref('');
 const   KK_chargee_nomayos_NbreCamion = ref('');
 const   KK_chargee_nomayos_Tonnage = ref('');
 const   gypse_chargee_nomayos_kk = ref('');
 const   gypse_chargee_nomayos_NbreCamion = ref('');
 const   gypse_chargee_nomayos_Tonnage = ref('');
 const   gypse_figuil_KK = ref('');
 const   gypse_figuil_NbreCamion = ref('');
 const   gypse_figuil_Tonnage = ref('');
 const   petcoke_figuil_kk = ref('');
 const   petcoke_figuil_NbreCamion = ref('');
 const   petcoke_figuil_Tonnage = ref('');
 const   kk_cimaf_kk = ref('');
 const   kk_cimaf_NbreCamion = ref('');
 const   kk_cimaf_Tonnage = ref('');
 const   kk_dangote_kk = ref('');
 const   kk_dangote_NbreCamion = ref('');
 const   kk_dangote_Tonnage = ref('');
 const   kk_miraco_kk = ref('');
 const   kk_miraco_NbreCamion = ref('');
 const   kk_miraco_Tonnage = ref('');
    
    // Reception camions
 const   reception_camions_rejets = ref('');
 const   provenance_lieu = ref('');
//  const   nbre_camion : = ref('');
 const   tonnage = ref('');
    
    // Stock biomasse
  const  no_godets_cim_biomasse = ref('');
  const  godets_geocycle_biomasse = ref('');
 // const   no_godets_receptions: null,
//   const tonnage_stock_receptions = ref('');






// Similar for broyeur4Data, broyeur5Data, secheurData, portData, expeditionData

// Add these methods


// Create refs for modal elements
const shiftModal = ref(null);
const shiftModal1 = ref(null);
const shiftModal2 = ref(null);
const shiftModal3 = ref(null);
const shiftModal4 = ref(null);
const shiftModal5 = ref(null);
const shiftModal6 = ref(null);

// Create modal instances
let modalInstance = null;
let modalInstance1 = null;
let modalInstance2 = null;
let modalInstance3 = null;
let modalInstance4 = null;
let modalInstance5 = null;
let modalInstance6 = null;

// Set up modal instances when component mounts
onMounted(() => {
  modalInstance = new Modal(shiftModal.value);
  modalInstance1 = new Modal(shiftModal1.value);
  modalInstance2 = new Modal(shiftModal2.value);
  modalInstance3 = new Modal(shiftModal3.value);
  modalInstance4 = new Modal(shiftModal4.value);
  modalInstance5 = new Modal(shiftModal5.value);
  modalInstance6 = new Modal(shiftModal6.value);
});

// Reactive data
const modalTitle = ref("Shift Report");
const selectedDate = ref(new Date().toISOString().split('T')[0]);

// Functions to open modals
function openShiftModal(shiftNumber) {
  modalTitle.value = `Shift ${shiftNumber} Report - ${selectedDate.value}`;
  modalInstance.show();
}

function openShiftModal1(shiftNumber) {
  modalTitle.value = `BROYEUR-1 - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance1.show();

   // Load existing data if available
//   loadBroyeurData(shiftNumber, 'BROYEUR-1');
}

function openShiftModal2(shiftNumber) {
  modalTitle.value = `BROYEUR-4 - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance2.show();

//   loadBroyeurData(shiftNumber, 'BROYEUR-4');
}

function openShiftModal3(shiftNumber) {
  modalTitle.value = `BROYEUR-5 - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance3.show();

//    loadBroyeurData(shiftNumber, 'BROYEUR-5');
}

function openShiftModal4(shiftNumber) {
  modalTitle.value = `SECHEUR - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance4.show();

//    loadBroyeurData(shiftNumber, 'SECHEUR');
}

function openShiftModal5(shiftNumber) {
  modalTitle.value = `PORT - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance5.show();

//   loadBroyeurData(shiftNumber, 'PORT');
}

function openShiftModal6(shiftNumber) {
  modalTitle.value = `EXPEDITION - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance6.show();

//   loadBroyeurData(shiftNumber, 'EXPEDITION');
}

function addRow(type) {
  // Add your row addition logic here
  console.log(`Adding new ${type} row`);
}







</script>

<style scoped>
/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: #1a2035;
  color: black;
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

/* Base styles */
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
  --light-bg: #f8f9fa;
}

body {
  background-color: #f5f7fb;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

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

/* Section titles */
.section-title {
  color: var(--primary);
  border-bottom: 2px solid var(--light);
  padding-bottom: 8px;
  margin: 20px 0 15px;
  font-weight: 600;
  font-size: 1.1rem;
}

.section-subtitle {
  color: var(--secondary);
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 1rem;
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

/* Data grid in shift cards */
.data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 20px;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.data p {
  margin: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 8px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.data p:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
}

.data i {
  font-size: 1.2rem;
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


/* Main layout adjustments */
#app {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 250px;
    background: var(--sidebar-bg);
    color: white;
    position: fixed;
    height: 100vh;
    z-index: 1000;
    transition: all 0.3s ease;
}

.app-container {
    flex: 1;
    margin-left: 250px; /* Same as sidebar width */
    padding: 20px;
    max-width: 1400px; /* Adjust this as needed */
    width: calc(100% - 250px); /* Subtract sidebar width */
    margin-right: auto;
    margin-left: auto;

         /* max-width: 1400px; */
            /* margin: 0 auto; */
            /* padding: 20px; */
            /* display: flex; */
            justify-content: center;
            /* background-color: #6c757d; */
            /* background: white; */
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .sidebar {
        transform: translateX(-250px);
    }
    
    .sidebar.open {
        transform: translateX(0);
    }
    
    .app-container {
        margin-left: 0;
        width: 100%;
        padding: 15px;
    }
    
    .sidebar-overlay.open {
        display: block;
    }
}

@media (min-width: 1200px) {
    .app-container {
        padding: 30px;
    }
}

/* For very large screens, center the content */
@media (min-width: 1600px) {
    .app-container {
        margin-left: calc((100% - 1400px)/2 + 250px);
    }
}
.header1{
    background: linear-gradient(135deg, var(--primary), #1a2530);
    color: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
        
         .logo1-container1 {
            display: flex;
            align-items: center;
            gap: 15px;
        } 
        
        .logo1 {
            background-color: white;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: var(--primary);
            font-weight: bold;
        } 

         .shift-card {
            transition: transform 0.3s, box-shadow 0.3s;
            border-radius: 10px;
            overflow: hidden;
            height: 100%;
        }
        
        .shift-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .shift-header {
            color: white;
            padding: 15px;
            font-weight: bold;
        }
        
        .shift-1 { background: linear-gradient(135deg, #3498db, #2980b9); }
        .shift-2 { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
        .shift-3 { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        
        label{
            color: #1a2530;
        }
</style>