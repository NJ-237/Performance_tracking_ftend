
<template>
    <div id="app"> 
      <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Sidebar -->
    <div style=" background: #1a2035; color: black;" class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="logo">
                <img src="@/assets/img/10_48_34_cimencam_logo.png" alt="Cimencam Logo">
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
                    <!-- <input type="date" class="form-control"> -->
                    <input type="date" class="form-control" v-model="selectedDate">
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-end">
                <form action="" method="post" @submitfile="handlefile()" enctype="multipart/form-data">
                    <label for="myFile">Choose a file to upload:</label>
                    <input type="file" id="myFile" name="uploadedFile">
                    <button type="submit">Upload</button>
                </form>
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
                            <button class="btn btn-sm btn-outline-primary" @click="openShiftModal(2)">
                                <i class="fas fa-edit me-1"></i> Enter Data
                            </button>
                        </div>
                        <div class="data">
                            <button style="border: none;" type="submit" @click="openShiftModal1(2)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-1</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal2(2)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-4</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal3(2)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-5</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal4(2)" ><p class="mb-1">
                                <i class="fas fa-wind me-2 text-primary"></i> SECHEUR</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal5(2)" ><p class="mb-1">
                                <i class="fas fa-ship me-2 text-primary"></i> PORT</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal6(2)" ><p class="mb-1">
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
                            <button class="btn btn-sm btn-outline-primary" @click="openShiftModal(3)">
                                <i class="fas fa-edit me-1"></i> Enter Data
                            </button>
                        </div>
                        <div class="data">
                            <button style="border: none;" type="submit" @click="openShiftModal1(3)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-1</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal2(3)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-4</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal3(3)" ><p class="mb-1">
                                <i class="fas fa-cogs me-2 text-primary"></i> BROYEUR-5</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal4(3)" ><p class="mb-1">
                                <i class="fas fa-wind me-2 text-primary"></i> SECHEUR</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal5(3)" ><p class="mb-1">
                                <i class="fas fa-ship me-2 text-primary"></i> PORT</p> 
                            </button>
                            <button style="border: none;" type="submit" @click="openShiftModal6(3)" ><p class="mb-1">
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
        <form @submit.prevent="handleshift()">
        <div class="modal fade" id="shiftModal" ref="shiftModal" tabindex="-1"  >
            <!-- Removed nested modal-dialog -->
            <div class="modal-dialog modal-lg modal-dialog-centered">          
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
                            <!-- <button class="btn btn-add" @click="addRow('cro')">
                                <i class="fas fa-plus me-1"></i> Add New CRO Row
                            </button> -->
                              <div class="form-group">
                                <label for="shiftDate">Date</label>
                                <input type="date" id="shiftDate" class="form-input" v-model="shiftFormData.date"  />
                            </div>

                            <div class="form-group">
                                <label for="shiftNumber">Shift Number</label>
                                <input type="number" id="shiftNumber" class="form-input" v-model="shiftFormData.shift_number" />
                            </div>
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
                                          <select id="cro1" v-model="shiftFormData.CRO1"  class="form-select" >
                                            <option value="" disabled>Select a CRO</option>
                                             <option v-for="cro in cros" :key="cro.user__id" :value="cro.user__id">
                                                {{ cro.user__username }}
                                            </option>
                                          </select>
                                          
                                        </td>
                                        <td>                                          
                                          <select id="cro2" v-model="shiftFormData.CRO2"  class="form-select" >
                                            <option value="" disabled>Select CRO</option>
                                            <option v-for="cro in cros" :key="cro.user__id" :value="cro.user__id">

                                               {{ cro.user__username }}
                                               
                                            </option>
                                          </select>
                                          
                                        </td>
                                        <td>                                        
                                        <select id="cdq" v-model="shiftFormData.CDQ" class="form-select" >
                                            <option value="" disabled selected>Select a CDQ</option>
                                            <option v-for="cdq in cdqs" :key="cdq.user__id" :value="cdq.user__id">
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
                                    <td>                                        
                                        <select id="patroller1" v-model="shiftFormData.Patroller1" class="form-select" >
                                            <option value="" disabled selected>Select a Patroller</option>
                                            <option v-for="patroller in patrollers" :key="patroller.user__id" :value="patroller.user__id">
                                               {{ patroller.user__username }}
                                            </option>
                                        </select>
                                          
                                        </td>
                                        <td>                                       
                                        <select id="patroller2" v-model="shiftFormData.Patroller2" class="form-select" >
                                            <option value="" disabled selected>Select a Patroller</option>
                                           <option v-for="patroller in patrollers" :key="patroller.user__id" :value="patroller.user__id">
                                               {{ patroller.user__username }}
                                            </option>
                                        </select>
                                          
                                        </td>
                                        <td><input type="text" class="form-control" v-model="shiftFormData.APP_ELEC" ></td> 

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
                                        <td><input type="text" class="form-control" v-model="shiftFormData.APP_MECA" ></td>
                                        <td><input type="text" class="form-control" v-model="shiftFormData.Laboratin1" ></td>
                                        <td><input type="text" class="form-control" v-model="shiftFormData.Laboratin2" ></td>
                                    </tr>
                                </tbody>
                            </table>
                             
                            </div>
                    </div>
                        
                        <div class="modal-footer">
                            <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-save me-1"></i> Save Shift Data
                            </button>
                        </div>
                       
                </div>
            </div>
            </div>
        </form> 
                                        
        <!-- BROYEUR-1 Modal -->
        <div class="modal fade" id="shiftModal1" ref="shiftModal1" tabindex="-1" >
            <div class="modal-dialog modal-lg">
           
            <form action="" @submit.prevent="handleBK1">      
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
                                                    <!-- <th>Ciment produit</th> -->
                                                    <!-- <th>Commentaires</th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.clinker_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.pouzzolane_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.gypse_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.fine_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.compteur_horaire_debut"></td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.clinker_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.pouzzolane_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.gypse_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.fine_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.compteur_horaire_fin"></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.clinker_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.pouzzolane_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.gypse_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.fine_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur1Data.compteur_horaire_Difference"></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                                <thead>
                                                    <tr>
                                                        <td><span class="date-badge">Production</span></td>
                                                        <td><span class="date-badge">SO3</span></td>
                                                        <td><span class="date-badge">Blaines</span></td>    
                                                        <td><span class="date-badge">no_godets_receptions</span></td>    
                                                        <td><span class="date-badge">Commentaires</span></td>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><input type="number" class="form-control" v-model="broyeur1Data.production"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur1Data.SO3"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur1Data.Blaines"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur1Data.no_godets_receptions"></td>
                                                        <td><input type="text" class="form-control" v-model="broyeur1Data.commentaires"></td>
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
                                                    <label><input type="checkbox" value="silo1" v-model="broyeur1Data.extraction_silo" > Silo kk 1</label>
                                                    <label><input type="checkbox" value="silo2" v-model="broyeur1Data.extraction_silo" > Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model="broyeur1Data.extraction_silo" > Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model="broyeur1Data.extraction_silo" > Silo kk 4</label>
                                                    <label><input type="checkbox" value="Quai_029" v-model="broyeur1Data.extraction_silo" > Quai 029</label>
                                                    <label><input type="checkbox" value="Hall" v-model="broyeur1Data.extraction_silo" > Hall</label>
                                                    <label><input type="checkbox" value="Marche_a_vide" v-model="broyeur1Data.extraction_silo" > Compteur Marche a vide</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" value="silo1" v-model = "broyeur1Data.ensilage_silo"> Silo kk 1</label>
                                                    <label><input type="checkbox" value="silo2" v-model = "broyeur1Data.ensilage_silo"> Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model = "broyeur1Data.ensilage_silo"> Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model = "broyeur1Data.ensilage_silo"> Silo kk 4</label>
                                                    <label><input type="checkbox" value="silo5" v-model = "broyeur1Data.ensilage_silo"> Silo kk 5</label>
                                                    <label><input type="checkbox" value="silo6" v-model = "broyeur1Data.ensilage_silo"> Silo kk 6</label>
                                                    <label><input type="checkbox" value="silo7" v-model = "broyeur1Data.ensilage_silo"> Silo kk 7</label>
                                                    <label><input type="checkbox" value="silo8" v-model = "broyeur1Data.ensilage_silo"> Silo kk 8</label>
                                                    <label><input type="checkbox" value="silo9" v-model = "broyeur1Data.ensilage_silo"> Silo kk 9</label>
                                                    <label><input type="checkbox" value="silo10" v-model = "broyeur1Data.ensilage_silo"> Silo kk 10</label>
                                                    <label><input type="checkbox" value="silo11" v-model = "broyeur1Data.ensilage_silo"> Silo kk 11</label> 
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
                        <button type="submit" class="btn btn-primary">
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
                                                    <th></th>
                                                    <th>Clinker</th>
                                                    <th>POUZZOLANE</th>
                                                    <th>GYPSE</th>
                                                    <th>Fine</th>
                                                    <th>Compteur Horaires</th>
                                                    <!-- <th>Ciment produit</th> -->
                                                    <!-- <th>Commentaires</th> -->
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.clinker_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.pouzzolane_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.gypse_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.fine_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.compteur_horaire_debut"></td>
                                                    <!-- <td><input type="text" class="form-control" v-model="broyeur4Data.ciment_produit"></td> -->
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.clinker_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.pouzzolane_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.gypse_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.fine_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.compteur_horaire_fin"></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.clinker_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.pouzzolane_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.gypse_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.fine_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur4Data.compteur_horaire_Difference"></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                               
                                            </tbody>
                                               
                                               <thead>
                                                    <tr>
                                                        <td><span class="date-badge">Production</span></td>
                                                        <td><span class="date-badge">SO3</span></td>
                                                        <td><span class="date-badge">Blaines</span></td>    
                                                        <td><span class="date-badge">no_godets_receptions</span></td>    
                                                        <td><span class="date-badge">Commentaires</span></td>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><input type="number" class="form-control" v-model="broyeur4Data.production"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur4Data.SO3"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur4Data.Blaines"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur4Data.no_godets_receptions"></td>
                                                        <td><input type="text" class="form-control" v-model="broyeur4Data.commentaires"></td>
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
                                                    <label><input type="checkbox" value="silo1" v-model="broyeur4Data.extraction_silo" > Silo kk 1</label>
                                                    <label><input type="checkbox" value="silo2" v-model="broyeur4Data.extraction_silo" > Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model="broyeur4Data.extraction_silo" > Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model="broyeur4Data.extraction_silo" > Silo kk 4</label>
                                                    <label><input type="checkbox" value="Quai_029" v-model="broyeur4Data.extraction_silo" > Quai 029</label>
                                                    <label><input type="checkbox" value="Hall" v-model="broyeur4Data.extraction_silo" > Hall</label>
                                                    <label><input type="checkbox" value="Marche_a_vide" v-model="broyeur4Data.extraction_silo" > Compteur Marche a vide</label>
                                                </div>
                                            </div>
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" value="silo1" v-model="broyeur4Data.ensilage_silo" > Silo kk 1</label>
                                                    <label><input type="checkbox" value="silo2" v-model="broyeur4Data.ensilage_silo" > Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model="broyeur4Data.ensilage_silo" > Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model="broyeur4Data.ensilage_silo" > Silo kk 4</label>
                                                    <label><input type="checkbox" value="silo5" v-model="broyeur4Data.ensilage_silo" > Silo kk 5</label>
                                                    <label><input type="checkbox" value="silo6" v-model="broyeur4Data.ensilage_silo" > Silo kk 6</label>
                                                    <label><input type="checkbox" value="silo7" v-model="broyeur4Data.ensilage_silo" > Silo kk 7</label>
                                                    <label><input type="checkbox" value="silo8" v-model="broyeur4Data.ensilage_silo" > Silo kk 8</label>
                                                    <label><input type="checkbox" value="silo9" v-model="broyeur4Data.ensilage_silo" > Silo kk 9</label>
                                                    <label><input type="checkbox" value="silo10" v-model="broyeur4Data.ensilage_silo" > Silo kk 10</label>
                                                    <label><input type="checkbox" value="silo11" v-model="broyeur4Data.ensilage_silo" > Silo kk 11</label>
                                                </div>
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
                                <button type="submit" class="btn btn-primary">
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
                                                    <th></th>
                                                    <th>Clinker</th>
                                                    <th>POUZZOLANE</th>
                                                    <th>GYPSE</th>
                                                    <th>Fine</th>
                                                    <th>Compteur Horaires</th>
                                                    
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Debut</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.clinker_debut" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.pouzzolane_debut" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.gypse_debut" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.fine_debut" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.compteur_horaire_debut" ></td>
                                                   
                                                   
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.clinker_fin" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.pouzzolane_fin" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.gypse_fin" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.fine_fin" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.compteur_horaire_fin" ></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.clinker_Difference" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.pouzzolane_Difference" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.gypse_Difference" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.fine_Difference" ></td>
                                                    <td><input type="number" class="form-control" v-model="broyeur5Data.compteur_horaire_Difference" ></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                         
                                            </tbody>
                                                <thead>
                                                    <tr>
                                                        <td><span class="date-badge">Production</span></td>
                                                        <td><span class="date-badge">SO3</span></td>
                                                        <td><span class="date-badge">Blaines</span></td>    
                                                        <td><span class="date-badge">no_godets_receptions</span></td>    
                                                        <td><span class="date-badge">Commentaires</span></td>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><input type="number" class="form-control" v-model="broyeur5Data.production"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur5Data.SO3"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur5Data.Blaines"></td>
                                                        <td><input type="number" class="form-control" v-model="broyeur5Data.no_godets_receptions"></td>
                                                        <td><input type="text" class="form-control" v-model="broyeur5Data.commentaires"></td>
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
                                                    <label><input type="checkbox" value="silo1" v-model="broyeur5Data.extraction_silo" > Silo kk 1</label>
                                                    <label><input type="checkbox" value="silo2" v-model="broyeur5Data.extraction_silo" > Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model="broyeur5Data.extraction_silo" > Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model="broyeur5Data.extraction_silo" > Silo kk 4</label>
                                                    <label><input type="checkbox" value="Quai_029" v-model="broyeur5Data.extraction_silo" > Quai 029</label>
                                                    <label><input type="checkbox" value="Hall" v-model="broyeur5Data.extraction_silo" > Hall</label>
                                                    <label><input type="checkbox" value="Marche_a_broyeur5" v-model="broyeur5Data.extraction_silo" > Compteur Marche a vide</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Ensilage Silo</h4>
                                                <div class="checkbox-group">
                                        <label><input type="checkbox" value="silo1" v-model = "portData.ensilage_silo"> Silo kk 1</label>
                                                     <label><input type="checkbox" value="silo2" v-model = "broyeur5Data.ensilage_silo"> Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model = "broyeur5Data.ensilage_silo"> Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model = "broyeur5Data.ensilage_silo"> Silo kk 4</label>
                                                    <label><input type="checkbox" value="silo5" v-model = "broyeur5Data.ensilage_silo"> Silo kk 5</label>
                                                    <label><input type="checkbox" value="silo6" v-model = "broyeur5Data.ensilage_silo"> Silo kk 6</label>
                                                    <label><input type="checkbox" value="silo7" v-model = "broyeur5Data.ensilage_silo"> Silo kk 7</label>
                                                    <label><input type="checkbox" value="silo8" v-model = "broyeur5Data.ensilage_silo"> Silo kk 8</label>
                                                    <label><input type="checkbox" value="silo9" v-model = "broyeur5Data.ensilage_silo"> Silo kk 9</label>
                                                    <label><input type="checkbox" value="silo10" v-model = "broyeur5Data.ensilage_silo"> Silo kk 10</label>
                                                    <label><input type="checkbox" value="silo11" v-model = "broyeur5Data.ensilage_silo"> Silo kk 11</label>
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
                        <button type="submit" class="btn btn-primary">
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
              <form @submit.prevent="handleDryer">
                
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
                                                    <td><input type="number" class="form-control" v-model = "dryerData.PZ_humide_debut"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.bande_melange_debut"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.compteur_horaire_debut"></td>
                                                    <td><input type="text" class="form-control" v-model = "dryerData.quality"></td>
                                                    <td><input type="text" class="form-control" v-model = "dryerData.commentaires"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Compteur Fin</span></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.PZ_humide_fin"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.bande_melange_fin"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.compteur_horaire_fin"></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Difference</span></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.PZ_humide_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.bande_melange_Difference"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.compteur_horaire_Difference"></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Production</span></td>
                                                    <td style="width: 100%"><input type="number"  class="form-control" v-model = "dryerData.production"></td>
                                                    <!-- <td><input type="text" class="form-control" v-model = "dryerData.bande_melange_Production"></td> -->
                                                    <!-- <td><input type="text" class="form-control" v-model = "dryerData.compteur_horaire_Production"></td> -->
                                                    <!-- <td></td>
                                                    <td></td> -->
                                                </tr>
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th>Nbre de godets</th>
                                                    <th>Poids godets</th>
                                                    <th>Debit</th>
                                                    <th>humidites_entree</th>
                                                    <th>humidites_sortie</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.nbre_godets"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.poids_godets"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.debit"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.humidites_entree"></td>
                                                    <td><input type="number" class="form-control" v-model = "dryerData.humidites_sortie"></td>
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
                                                    <label><input type="checkbox" value="silo1" v-model = "dryerData.ensilage_silo"> Silo kk 1</label>
                                                    <label><input type="checkbox" value="silo2" v-model = "dryerData.ensilage_silo"> Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model = "dryerData.ensilage_silo"> Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model = "dryerData.ensilage_silo"> Silo kk 4</label>
                                                    <label><input type="checkbox" value="silo5" v-model = "dryerData.ensilage_silo"> Silo kk 5</label>
                                                    <label><input type="checkbox" value="silo6" v-model = "dryerData.ensilage_silo"> Silo kk 6</label>
                                                    <label><input type="checkbox" value="silo7" v-model = "dryerData.ensilage_silo"> Silo kk 7</label>
                                                    <label><input type="checkbox" value="silo8" v-model = "dryerData.ensilage_silo"> Silo kk 8</label>
                                                    <label><input type="checkbox" value="silo9" v-model = "dryerData.ensilage_silo"> Silo kk 9</label>
                                                    <label><input type="checkbox" value="silo10" v-model = "dryerData.ensilage_silo"> Silo kk 10</label>
                                                    <label><input type="checkbox" value="silo11" v-model = "dryerData.ensilage_silo"> Silo kk 11</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Situation A L'entree Du Quart</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox" value="En Marche" v-model = "dryerData.situation_entree_quart"> En Marche</label>
                                                    <label><input type="checkbox" value="En Arret" v-model = "dryerData.situation_entree_quart"> En Arret</label>
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
                        <button type="submit" class="btn btn-primary">
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
               
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <!-- <strong>Current Shift ID:</strong> {{ authStore.lastShiftId || 'None' }} -->
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
                                                     <label><input type="checkbox" value="silo1" v-model = "portData.ensilage_silo"> Silo kk 1</label>
                                                     <label><input type="checkbox" value="silo2" v-model = "portData.ensilage_silo"> Silo kk 2</label>
                                                    <label><input type="checkbox" value="silo3" v-model = "portData.ensilage_silo"> Silo kk 3</label>
                                                    <label><input type="checkbox" value="silo4" v-model = "portData.ensilage_silo"> Silo kk 4</label>
                                                    <label><input type="checkbox" value="silo5" v-model = "portData.ensilage_silo"> Silo kk 5</label>
                                                    <label><input type="checkbox" value="silo6" v-model = "portData.ensilage_silo"> Silo kk 6</label>
                                                    <label><input type="checkbox" value="silo7" v-model = "portData.ensilage_silo"> Silo kk 7</label>
                                                    <label><input type="checkbox" value="silo8" v-model = "portData.ensilage_silo"> Silo kk 8</label>
                                                    <label><input type="checkbox" value="silo9" v-model = "portData.ensilage_silo"> Silo kk 9</label>
                                                    <label><input type="checkbox" value="silo10" v-model = "portData.ensilage_silo"> Silo kk 10</label>
                                                    <label><input type="checkbox" value="silo11" v-model = "portData.ensilage_silo"> Silo kk 11</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-section">
                                                <h4 class="section-subtitle">Situation A L'entree Du Quart</h4>
                                                <div class="checkbox-group">
                                                    <label><input type="checkbox"  v-model="portData.situation_entree_quart" value="En Marche"> En Marche</label>
                                                    <label><input type="checkbox" v-model="portData.situation_entree_quart" value="En Arret"> En Arret</label>
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
                                                    <th>Compteur Debut</th>
                                                    <th>Compteur Fin</th>
                                                    <th>Dechargement</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="text" class="form-control" v-model="portData.commentaires"></td>
                                                    <td><input type="datetime-local" class="form-control" v-model="portData.debut"></td>
                                                    <td><input type="datetime-local" class="form-control" v-model="portData.fin"></td>
                                                    <td><input type="text" class="form-control" v-model="portData.duree"></td>
                                                    <td><input type="number" class="form-control" v-model="portData.compteur_debut"></td>
                                                    <td><input type="number" class="form-control" v-model="portData.compteur_fin"></td>
                                                    <td><input type="number" class="form-control" v-model="portData.dechargement"></td>
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
                        <button type="submit" class="btn btn-primary" >
                            <i class="fas fa-save me-1"></i> Save Shift Data
                        </button>
                    </div>
                </div>
                </form> 
            </div>
        </div>

        <!-- EXPEDITION Modal -->
       <div class="modal fade" id="shiftModal6" ref="shiftModal6" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <form @submit.prevent="handleExp">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title text-white">{{ modalTitle }}</h5>
                        <strong>Current Shift ID:</strong> {{ authStore.lastShiftId || 'None' }}
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
                                        <h1><i class="fas fa-truck me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-clipboard-list me-2"></i>Expedition Report - Page 1</h3>
                                        
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
                                                    <td><input type="number" class="form-control" v-model="expeditionData.kk_chargee_nomayos_kk"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_chargee_nomayos_NbreCamion"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_chargee_nomayos_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Gypse Chargee Nomayos</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.gypse_chargee_nomayos_kk"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.gypse_chargee_nomayos_NbreCamion"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.gypse_chargee_nomayos_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Gypse Figuil = T</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.gypse_figuil_kk"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.gypse_figuil_NbreCamion"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.gypse_figuil_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">Petcoke figuil = T</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.petcoke_figuil_kk"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.petcoke_figuil_NbreCamion"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.petcoke_figuil_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">KK Cimaf</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_cimaf_kk" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_cimaf_NbreCamion" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_cimaf_Tonnage" ></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">KK Dangote</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_dangote_kk" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_dangote_NbreCamion" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_dangote_Tonnage"></td>
                                                </tr>
                                                <tr>
                                                    <td><span class="date-badge">KK Miraco</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_miraco_kk" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_miraco_NbreCamion" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.kk_miraco_Tonnage" ></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="report-header">
                                        <h1><i class="fas fa-truck me-2"></i>Daily Operator Service Report</h1>
                                    </div>
                                    
                                    <div class="report-body">
                                        <h3 class="section-title"><i class="fas fa-clipboard-list me-2"></i>Expedition Report - Page 2</h3>
                                        
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
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.reception_camions_rejets" ></td>
                                                    <td><input type="text" class="form-control" v-model="expeditionData.provenance_lieu" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.nbre_camion" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.tonnage" ></td>
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
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.no_godets_cim_biomasse" ></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.godets_geocycle_biomasse" ></td>
                                                </tr>
                                                <tr>
                                                    <td><span>No Godets</span></td>
                                                    <td><span>Tonnage</span></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.no_godets_receptions"></td>
                                                    <td><input type="number" class="form-control" v-model.number="expeditionData.tonnage_stock_receptions"></td>
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
                        <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">
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
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import axios from 'axios';


const authStore = useAuthStore();
// authStore.initializeStore();
const router = useRouter();


console.log('Current token:', authStore.token);
console.log('Current shiftID:', authStore.lastShiftId);
console.log('Token from localStorage:', localStorage.getItem('token'));
console.log('ShiftID from localStorage:', localStorage.getItem('lastShiftId'));
// alert( 'Shift id',localStorage.getItem('lastShiftId'));



const errorMessage = ref(null);
// const shiftExists = ref(false);
const loading = ref(false);

// Add these data properties
const shiftData = ref({
  date: new Date().toISOString().split('T')[0],
  shiftNumber: 1
});



const shiftFormData = ref({
  date: new Date().toISOString().slice(0, 10), // Default to today's date
  shift_number: 1, // Default to a shift number
  CRO1: '',
  CRO2: '',
  Patroller1: '',
  Patroller2: '',
  CDQ: '',
  APP_ELEC: '',
  APP_MECA: '',
  Laboratin1: '',
  Laboratin2: '',
});

// This code is used to call the dfferent operators registered in the backend so that 
// when the user wants to fill in the form , it should display the name of those present 
// in the backend as a dropdown with their names as a list
let cros=[]
let patrollers=[]
let cdqs=[]




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
   // This action ensures the store is initialized on page load,
    // which includes retrieving data from localStorage.
  authStore.initializeStore();
});


// Handles the logout
const handleLogout = async () => {
  // Call the logout action from the Pinia store
  await authStore.logout();

  // Also clear the lastShiftId from localStorage and the store
  localStorage.removeItem('lastShiftId');
  authStore.lastShiftId = null;

  // Redirect the user to the login page after they successfully log out
  router.push('/login');
};




const handleshift = async () => {
  loading.value = true;
  errorMessage.value = null;

  try {
    console.log("Submitting shift data:", shiftFormData.value);
    const success = await authStore.registerShift(shiftFormData.value);
    if (success) {
    //   alert('Shift registered successfully!');
      alert( localStorage.getItem('lastShiftId'));

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

const broyeur1Data = ref({
shift: null,
clinker_debut :'',
clinker_fin :'',
clinker_Difference :'',
pouzzolane_debut :'',
pouzzolane_fin :'',
pouzzolane_Difference :'',
gypse_debut :'',
gypse_fin :'',
gypse_Difference :'',
fine_debut :'',
fine_fin :'',
fine_Difference :'',
compteur_horaire_debut :'',
compteur_horaire_fin :'',
compteur_horaire_Difference :'',
production:'',
commentaires :'',
SO3: '',
Blaines: '',
extraction_silo:([]),
ensilage_silo :([]),
no_godets_receptions :'',
 
})  

const broyeur4Data = ref({
shift: null,
clinker_debut :'',
clinker_fin :'',
clinker_Difference :'',
pouzzolane_debut :'',
pouzzolane_fin :'',
pouzzolane_Difference :'',
gypse_debut :'',
gypse_fin :'',
gypse_Difference :'',
fine_debut :'',
fine_fin :'',
fine_Difference :'',
compteur_horaire_debut :'',
compteur_horaire_fin :'',
compteur_horaire_Difference :'',
production:'',
commentaires :'',
SO3: '',
Blaines: '',
extraction_silo:([]),
ensilage_silo :([]),
no_godets_receptions :'',
})  

const broyeur5Data = ref({
shift: null,
clinker_debut :'',
clinker_fin :'',
clinker_Difference :'',
pouzzolane_debut :'',
pouzzolane_fin :'',
pouzzolane_Difference :'',
gypse_debut :'',
gypse_fin :'',
gypse_Difference :'',
fine_debut :'',
fine_fin :'',
fine_Difference :'',
compteur_horaire_debut :'',
compteur_horaire_fin :'',
compteur_horaire_Difference :'',
production:'',
commentaires :'',
SO3: '',
Blaines: '',
extraction_silo:([]),
ensilage_silo :([]),
no_godets_receptions :'',
 
})  


// let shift = lastShiftId;
// console.log(Number(shift))

// Secheur Inputs 
const dryerData = ref ({
 // This will hold the ID of the related shift
PZ_humide_debut :'',
PZ_humide_fin :'',
PZ_humide_Difference :'',
// PZ_humide_Production :'',
bande_melange_debut :'',
bande_melange_fin :'',
bande_melange_Difference :'',
// bande_melange_Production:'',
compteur_horaire_debut :'',
compteur_horaire_fin: '',
compteur_horaire_Difference: '',
// compteur_horaire_Production: '',
quality: '',
production: '',
commentaires: '',
humidites_entree: '',
humidites_sortie: '',
nbre_godets: '',
poids_godets: '',
debit: '',
//   extraction_silo: [], // Change to array for checkboxes
// ensilage_silo: ensilageSiloData,
ensilage_silo: ([]),
// ensilageSiloData: '',
// dryerData.value,
situation_entree_quart:([]),


})

// Inputs of port 
const portData = ref ({
commentaires:'',
debut :'',
fin :'',
duree: '',
compteur_debut: '',
compteur_fin: '',
dechargement :'',
ensilage_silo: ([]),
situation_entree_quart:([]),

})


const expeditionData = ref({
    shift: null, // This will hold the ID of the related shift
    kk_chargee_nomayos_kk: '',
    kk_chargee_nomayos_NbreCamion: 0,
    kk_chargee_nomayos_Tonnage: 0,
    gypse_chargee_nomayos_kk: '',
    gypse_chargee_nomayos_NbreCamion: 0,
    gypse_chargee_nomayos_Tonnage: 0,
    gypse_figuil_kk: '',
    gypse_figuil_NbreCamion: 0,
    gypse_figuil_Tonnage: 0,
    petcoke_figuil_kk: '',
    petcoke_figuil_NbreCamion: 0,
    petcoke_figuil_Tonnage: 0,
    kk_cimaf_kk: '',
    kk_cimaf_NbreCamion: 0,
    kk_cimaf_Tonnage: 0,
    kk_dangote_kk: '',
    kk_dangote_NbreCamion: 0,
    kk_dangote_Tonnage: 0,
    kk_miraco_kk: '',
    kk_miraco_NbreCamion: 0,
    kk_miraco_Tonnage: 0,
    reception_camions_rejets: '',
    provenance_lieu: '',
    nbre_camion: 0,
    tonnage: 0,
    no_godets_cim_biomasse: 0,
    godets_geocycle_biomasse: 0,
    no_godets_receptions: 0,
    tonnage_stock_receptions: 0,

});



const handlePort = async () => {
  loading.value = true;
  errorMessage.value = null;

 

   // Check if a shift ID exists
    if (!authStore.lastShiftId) {
        errorMessage.value = 'Please submit a shift report first.';
        loading.value = false;
        return;
    }

    try {
            // Set the shift ID on the expedition data
        portData.value.shift = authStore.lastShiftId;
        console.log("Submitting port data:",portData.value);
       const success = await authStore.registerPort(portData.value);
        if (success) {
              alert('Port registered successfully!');

               //  successMessage.value = 'Expedition registered successfully!';
           // Close the modal on success
      if (modalInstance5) modalInstance5.hide();
        } else {
            errorMessage.value = authStore.error?.detail || 'An unknown error occurred.';
        }
    } catch (err) {
        console.error('Port submission failed:', err);
        errorMessage.value = 'An error occurred during port submission. Please try again.';
    } finally {
        loading.value = false;
    }
};


const handleDryer = async () => {
  loading.value = true;
  errorMessage.value = null;


   // Check if a shift ID exists
    if (!authStore.lastShiftId) {
        errorMessage.value = 'Please submit a shift report first.';
        loading.value = false;
        return;
    }

    try {
            // Set the shift ID on the expedition data
        dryerData.value.shift = authStore.lastShiftId;
        console.log("Submitting dryer data:", dryerData.value);
       const success = await authStore.registerDryer(dryerData.value);
        if (success) {
              alert('Dryer registered successfully!');

               //  successMessage.value = 'Expedition registered successfully!';
           // Close the modal on success
            if (modalInstance4) modalInstance4.hide();
        } else {
                    errorMessage.value = authStore.error?.detail || 'An unknown error occurred.';
                }
    } 
    catch (err) {
        console.error('Dryer submission failed:', err);
        errorMessage.value = 'An error occurred during dryer submission. Please try again.';
    } finally {
        loading.value = false;
    }
};

const handleBK1 = async () => {
  loading.value = true;
  errorMessage.value = null;


   // Check if a shift ID exists
    if (!authStore.lastShiftId) {
        errorMessage.value = 'Please submit a BK1 report first.';
        loading.value = false;
        return;
    }

    try {
            // Set the shift ID on the expedition data
        broyeur1Data.value.shift = authStore.lastShiftId;
        console.log("Submitting BK1 data:", broyeur1Data.value);
       const success = await authStore.registerBK1(broyeur1Data.value);
        if (success) {
              alert('BK1 registered successfully!');

               //  successMessage.value = 'Expedition registered successfully!';
           // Close the modal on success
            if (modalInstance1) modalInstance1.hide();
        } else {
                    errorMessage.value = authStore.error?.detail || 'An unknown error occurred.';
                } 
    } 
    catch (err) {
        console.error('BK1 submission failed:', err);
        errorMessage.value = 'An error occurred during BK1 submission. Please try again.';
    } finally {
        loading.value = false;
    }
};



const handleBK4 = async () => {
  loading.value = true;
  errorMessage.value = null;


   // Check if a shift ID exists
    if (!authStore.lastShiftId) {
        errorMessage.value = 'Please submit a BK1 report first.';
        loading.value = false;
        return;
    }

    try {
            // Set the shift ID on the expedition data
        broyeur4Data.value.shift = authStore.lastShiftId;
        console.log("Submitting BK1 data:", broyeur4Data.value);
       const success = await authStore.registerBK4(broyeur4Data.value);
        if (success) {
              alert('BK4 registered successfully!');

               //  successMessage.value = 'Expedition registered successfully!';
           // Close the modal on success
            if (modalInstance2) modalInstance2.hide();
        } else {
                    errorMessage.value = authStore.error?.detail || 'An unknown error occurred.';
                } 
    } 
    catch (err) {
        console.error('BK4 submission failed:', err);
        errorMessage.value = 'An error occurred during BK4 submission. Please try again.';
    } finally {
        loading.value = false;
    }
};

const handleBK5 = async () => {
  loading.value = true;
  errorMessage.value = null;


   // Check if a shift ID exists
    if (!authStore.lastShiftId) {
        errorMessage.value = 'Please submit a BK5 report first.';
        loading.value = false;
        return;
    }

    try {
            // Set the shift ID on the expedition data
        broyeur5Data.value.shift = authStore.lastShiftId;
        console.log("Submitting BK5 data:", broyeur5Data.value);
       const success = await authStore.registerBK5(broyeur5Data.value);
        if (success) {
              alert('BK5 registered successfully!');

               //  successMessage.value = 'Expedition registered successfully!';
           // Close the modal on success
            if (modalInstance3) modalInstance3.hide();
        } else {
                    errorMessage.value = authStore.error?.detail || 'An unknown error occurred.';
                } 
    } 
    catch (err) {
        console.error('BK5 submission failed:', err);
        errorMessage.value = 'An error occurred during BK5 submission. Please try again.';
    } finally {
        loading.value = false;
    }
};

const handleExp = async () => {
  loading.value = true;
  errorMessage.value = null;

 

   // Check if a shift ID exists
    if (!authStore.lastShiftId) {
        errorMessage.value = 'Please submit a shift report first.';
        loading.value = false;
        return;
    }

    try {
            // Set the shift ID on the expedition data
        expeditionData.value.shift = authStore.lastShiftId;
        console.log("Submitting expedition data:", expeditionData.value);
       const success = await authStore.registerExpedition(expeditionData.value);
        if (success) {
              alert('Expedition registered successfully!');

               //  successMessage.value = 'Expedition registered successfully!';
           // Close the modal on success
      if (modalInstance) modalInstance.hide();
        } else {
            errorMessage.value = authStore.error?.detail || 'An unknown error occurred.';
        }
    } catch (err) {
        console.error('Expedition submission failed:', err);
        errorMessage.value = 'An error occurred during expedition submission. Please try again.';
    } finally {
        loading.value = false;
    }
};


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
  modalInstance  = new Modal(shiftModal.value);
  modalInstance1 = new Modal(shiftModal1.value);
  modalInstance2 = new Modal(shiftModal2.value);
  modalInstance3 = new Modal(shiftModal3.value);
  modalInstance4 = new Modal(shiftModal4.value);
  modalInstance5 = new Modal(shiftModal5.value);
  modalInstance6 = new Modal(shiftModal6.value);
});



// Assuming 'shiftNumber' is the variable holding the current shift number
const shiftNumber = ref([1, 2, 3]); // Example shift number
localStorage.setItem('currentShift', shiftNumber);

// Reactive data
const modalTitle = ref("Shift Report");
const selectedDate = ref(new Date().toISOString().split('T')[0]);

// Functions to open modals
function openShiftModal(shiftNumber) {
  console.log(`Opening shift modal for shift: ${shiftNumber} on date: ${selectedDate.value}`);
  modalTitle.value = `Shift ${shiftNumber} Report - ${selectedDate.value}`;
  // Correctly populate the form data for the shift modal
  shiftFormData.value.shift_number = shiftNumber;
  shiftFormData.value.date = selectedDate.value;
  modalInstance.show();
}

function openShiftModal1(shiftNumber) {
  console.log('Opening shift modal for shift:', shiftNumber);
  modalTitle.value = `BROYEUR-1 - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance1.show();

   // Load existing data if available
//   broyeur1Data(shiftNumber, 'BROYEUR-1');
}

function openShiftModal2(shiftNumber) {
  console.log('Opening shift modal for shift:', shiftNumber);
  modalTitle.value = `BROYEUR-4 - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance2.show();

//   broyeur4Data(shiftNumber, 'BROYEUR-4');
}

function openShiftModal3(shiftNumber) {
  console.log('Opening shift modal for shift:', shiftNumber);
  modalTitle.value = `BROYEUR-5 - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance3.show();

//   broyeur5Data(shiftNumber, 'BROYEUR-5');
}

function openShiftModal4(shiftNumber) {
  console.log('Opening shift modal for shift:', shiftNumber);
  modalTitle.value = `SECHEUR - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance4.show();

//    dryerData(shiftNumber, 'SECHEUR');
}

function openShiftModal5(shiftNumber) {
  console.log('Opening shift modal for shift:', shiftNumber);
  modalTitle.value = `PORT - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance5.show();

//   portData(shiftNumber, 'PORT');
}

function openShiftModal6(shiftNumber) {
  console.log('Opening shift modal for shift:', shiftNumber);
  modalTitle.value = `EXPEDITION - Shift ${shiftNumber} Report - ${selectedDate.value}`;
  shiftData.value.shiftNumber = shiftNumber;
  modalInstance6.show();

//   expeditionData(shiftNumber, 'EXPEDITION'); 
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
