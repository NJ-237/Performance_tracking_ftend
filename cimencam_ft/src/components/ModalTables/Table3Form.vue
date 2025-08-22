<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operator Service Report</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
    
</head>

    <div id="app">
        <!-- Main App Content -->
        <div class="container mt-5">
            <div class="text-center">
                <button class="btn btn-primary btn-lg" @click="showModal">
                    <i class="fas fa-edit me-2"></i> Open Operator Report Modal
                </button>
            </div>
            
            <div class="mt-5">
                <h2 class="text-center mb-4">Operator Report Data</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <i class="fas fa-users me-2"></i> CRO Roles
                            </div>
                            <div class="card-body">
                                <div v-for="(row, index) in croRows" :key="'cro-'+index" class="mb-2 p-2 border-bottom">
                                    <p><strong>CRO 1:</strong> {{ row.cro1 || 'Not set' }}</p>
                                    <p><strong>CRO 2:</strong> {{ row.cro2 || 'Not set' }}</p>
                                    <p><strong>CDQ:</strong> {{ row.cdq || 'Not set' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-info text-white">
                                <i class="fas fa-user-shield me-2"></i> Patroller Roles
                            </div>
                            <div class="card-body">
                                <div v-for="(role, index) in patrollerRows" :key="'patroller-'+index" class="mb-2 p-2 border-bottom">
                                    <p><strong>Patroller 1:</strong> {{ role.patroller1 || 'Not set' }}</p>
                                    <p><strong>Patroller 2:</strong> {{ role.patroller2 || 'Not set' }}</p>
                                    <p><strong>APP ElEC:</strong> {{ role.appElec || 'Not set' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header bg-success text-white">
                                <i class="fas fa-flask me-2"></i> Laboratory Roles
                            </div>
                            <div class="card-body">
                                <div v-for="(lab, index) in labRows" :key="'lab-'+index" class="mb-2 p-2 border-bottom">
                                    <p><strong>APP MECA:</strong> {{ lab.appMeca || 'Not set' }}</p>
                                    <p><strong>Laboratin-1:</strong> {{ lab.lab1 || 'Not set' }}</p>
                                    <p><strong>Laboratin-2:</strong> {{ lab.lab2 || 'Not set' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="shiftModal" ref="shiftModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-white">
                            <i class="fas fa-edit me-2"></i> 
                            {{ modalTitle }}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="report-header">
                            <h1><i class="fas fa-users me-2"></i>Daily Operator Service Report</h1>
                        </div>
                        
                        <div class="report-body">
                            <div class="role-section">
                                <div class="role-title">
                                    <i class="fas fa-user me-2"></i> Shift Report - CRO Roles
                                </div>
                                
                                <div class="table-container">
                                    <table class="table1">
                                        <thead>
                                            <tr>
                                                <th>CRO 1</th>
                                                <th>CRO 2</th>
                                                <th>CDQ</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(row, index) in croRows" :key="index">
                                                <td><input type="text" v-model="row.cro1" class="input-field"></td>
                                                <td><input type="text" v-model="row.cro2" class="input-field"></td>
                                                <td><input type="text" v-model="row.cdq" class="input-field"></td>
                                                <td class="btn-group">
                                                    <button class="btn-update" @click="updateRow('cro', index)">
                                                        <i class="fas fa-sync-alt"></i>
                                                    </button>
                                                    <button class="btn-delete" @click="deleteRow('cro', index)">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <button class="btn btn-add" @click="addRow('cro')">
                                        <i class="fas fa-plus me-1"></i> Add New CRO Row
                                    </button>
                                </div>
                            </div>
                            
                            <div class="role-section">
                                <div class="role-title">
                                    <i class="fas fa-user-shield me-2"></i> Patroller Roles
                                </div>
                                
                                <div class="table-container">
                                    <table class="table1">
                                        <thead>
                                            <tr>
                                                <th>Patroller 1</th>
                                                <th>Patroller 2</th>
                                                <th>APP ElEC</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(role, index) in patrollerRows" :key="'patroller-'+index">
                                                <td><input type="text" v-model="role.patroller1" class="input-field"></td>
                                                <td><input type="text" v-model="role.patroller2" class="input-field"></td>
                                                <td><input type="text" v-model="role.appElec" class="input-field"></td>
                                                <td class="btn-group">
                                                    <button class="btn-update" @click="updateRow('patroller', index)">
                                                        <i class="fas fa-sync-alt"></i>
                                                    </button>
                                                    <button class="btn-delete" @click="deleteRow('patroller', index)">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <button class="btn btn-add" @click="addRow('patroller')">
                                        <i class="fas fa-plus me-1"></i> Add Patroller Set
                                    </button>
                                </div>
                            </div>
                            
                            <div class="role-section">
                                <div class="role-title">
                                    <i class="fas fa-flask me-2"></i> Laboratory Roles
                                </div>
                                
                                <div class="table-container">
                                    <table class="table1">
                                        <thead>
                                            <tr>
                                                <th>APP MECA</th>
                                                <th>Laboratin-1</th>
                                                <th>Laboratin-2</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(lab, index) in labRows" :key="'lab-'+index">
                                                <td><input type="text" v-model="lab.appMeca" class="input-field"></td>
                                                <td><input type="text" v-model="lab.lab1" class="input-field"></td>
                                                <td><input type="text" v-model="lab.lab2" class="input-field"></td>
                                                <td class="btn-group">
                                                    <button class="btn-update" @click="updateRow('lab', index)">
                                                        <i class="fas fa-sync-alt"></i>
                                                    </button>
                                                    <button class="btn-delete" @click="deleteRow('lab', index)">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <button class="btn btn-add" @click="addRow('lab')">
                                        <i class="fas fa-plus me-1"></i> Add Lab Set
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="footer-buttons">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                <i class="fas fa-times me-1"></i> Cancel
                            </button>
                            <div>
                                <button type="button" class="btn btn-next me-2">
                                    <i class="fas fa-arrow-right me-1"></i> Next
                                </button>
                                <button type="button" class="btn btn-save" @click="saveData">
                                    <i class="fas fa-save me-1"></i> Save Data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>

    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> -->
    
    <script>
        // const { createApp, ref } = Vue;
        import * as bootstrap from 'bootstrap'


        import { createApp, ref } from 'vue';

        // Import Bootstrap CSS
        import 'bootstrap/dist/css/bootstrap.min.css'

        // Import Bootstrap JS bundle (optional, needed if you use components like modals, dropdowns, tooltips)
        import 'bootstrap/dist/js/bootstrap.bundle.min.js'

        // Import FontAwesome CSS
        import '@fortawesome/fontawesome-free/css/all.min.css'
        
        createApp({
            setup() {
                // Modal title
                const modalTitle = ref("Shift Report");
                
                // Rows data
                const croRows = ref([
                    { cro1: "John Smith", cro2: "Sarah Johnson", cdq: "Michael Brown" }
                ]);
                
                const patrollerRows = ref([
                    { patroller1: "James Miller", patroller2: "Jennifer Moore", appElec: "Thomas Anderson" }
                ]);
                
                const labRows = ref([
                    { appMeca: "Lisa Martinez", lab1: "Kevin Garcia", lab2: "Amanda Robinson" }
                ]);
                
                // Modal instance
                const shiftModal = ref(null);
                let modalInstance = null;
                
                // Methods
                const showModal = () => {
                    if (!modalInstance) {
                        modalInstance = new bootstrap.Modal(shiftModal.value);
                    }
                    modalInstance.show();
                };
                
                const addRow = (type) => {
                    if (type === 'cro') {
                        croRows.value.push({ cro1: "", cro2: "", cdq: "" });
                    } else if (type === 'patroller') {
                        patrollerRows.value.push({ patroller1: "", patroller2: "", appElec: "" });
                    } else if (type === 'lab') {
                        labRows.value.push({ appMeca: "", lab1: "", lab2: "" });
                    }
                };
                
                const deleteRow = (type, index) => {
                    if (type === 'cro') {
                        if (croRows.value.length > 1) {
                            croRows.value.splice(index, 1);
                        } else {
                            alert("At least one row is required");
                        }
                    } else if (type === 'patroller') {
                        if (patrollerRows.value.length > 1) {
                            patrollerRows.value.splice(index, 1);
                        } else {
                            alert("At least one role set is required");
                        }
                    } else if (type === 'lab') {
                        if (labRows.value.length > 1) {
                            labRows.value.splice(index, 1);
                        } else {
                            alert("At least one lab set is required");
                        }
                    }
                };
                
                const updateRow = (type, index) => {
                    let rowData;
                    if (type === 'cro') {
                        rowData = croRows.value[index];
                    } else if (type === 'patroller') {
                        rowData = patrollerRows.value[index];
                    } else if (type === 'lab') {
                        rowData = labRows.value[index];
                    }
                    
                    alert(`Updated ${type} row at position ${index + 1}:\n${JSON.stringify(rowData, null, 2)}`);
                };
                
                const saveData = () => {
                    const allData = {
                        croRows: croRows.value,
                        patrollerRows: patrollerRows.value,
                        labRows: labRows.value
                    };
                    
                    alert("All data saved successfully!\n\n" + JSON.stringify(allData, null, 2));
                };
                
                return {
                    modalTitle,
                    croRows,
                    patrollerRows,
                    labRows,
                    shiftModal,
                    showModal,
                    addRow,
                    deleteRow,
                    updateRow,
                    saveData
                };
            }
        }).mount('#app');
    </script>


<style>
        :root {
            --primary-color: #2c6e49;
            --secondary-color: #4c956c;
            --accent-color: #fefee3;
            --light-color: #d8f3dc;
            --dark-color: #1b4332;
        }
        
        body {
            background-color: #f8f9fa;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 20px;
        }
        
        .modal-header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
        }
        
        .report-header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .section-title {
            color: var(--primary-color);
            border-bottom: 2px solid var(--light-color);
            padding-bottom: 10px;
            margin: 20px 0 15px;
            font-weight: 600;
        }
        
        .table-container {
            background-color: white;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .table1 {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
        }
        
        .table1 th {
            background-color: var(--primary-color);
            color: white;
            padding: 12px;
            text-align: left;
        }
        
        .table1 td {
            padding: 12px;
            border-bottom: 1px solid #dee2e6;
        }
        
        .table1 tr:last-child td {
            border-bottom: none;
        }
        
        .input-field {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            transition: all 0.3s;
        }
        
        .input-field:focus {
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 0.25rem rgba(76, 149, 108, 0.25);
            outline: none;
        }
        
        .action-btn {
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
        }
        
        .btn-add {
            background-color: var(--secondary-color);
            color: white;
            border: none;
            margin-top: 10px;
            padding: 8px 15px;
        }
        
        .btn-add:hover {
            background-color: var(--primary-color);
        }
        
        .btn-delete {
            background-color: #e74c3c;
            color: white;
            border: none;
        }
        
        .btn-delete:hover {
            background-color: #c0392b;
        }
        
        .btn-update {
            background-color: #3498db;
            color: white;
            border: none;
            margin-right: 5px;
        }
        
        .btn-update:hover {
            background-color: #2980b9;
        }
        
        .btn-group {
            display: flex;
            justify-content: center;
        }
        
        .footer-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        
        .btn-next {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
        }
        
        .btn-save {
            background: linear-gradient(135deg, #27ae60, #2ecc71);
            color: white;
            border: none;
        }
        
        .modal-body {
            max-height: 70vh;
            overflow-y: auto;
        }
        
        .role-section {
            margin-bottom: 30px;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 15px;
            background-color: #f8f9fa;
        }
        
        .role-title {
            font-size: 1.2rem;
            color: var(--primary-color);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .role-title i {
            margin-right: 10px;
        }
    </style>
