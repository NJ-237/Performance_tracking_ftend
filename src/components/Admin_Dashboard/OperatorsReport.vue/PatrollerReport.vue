<template>
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
          <router-link class="nav-link" to="/DashboardAdmin">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
         <li>
          <router-link class="nav-link" to="/CRO" active-class="active">
            <i class="fas fa-sliders-h"></i>
            <span>CRO</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/Patroller"> 
            <i class="fas fa-shield-alt"></i>
            <span>Patroller</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/CDQ" active-class="active">
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
                    <!-- Dynamic Headers -->
                    <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="isLoading">
                    <td :colspan="tableHeaders.length + 1" class="text-center text-muted">Loading data...</td>
                  </tr>
                  <tr v-else-if="!performanceData || performanceData.length === 0">
                    <td :colspan="tableHeaders.length + 1" class="text-center text-muted">No data available for {{ selectedEquipment }}</td>
                  </tr>
                  <tr v-else v-for="item in performanceData" :key="item.id">
                    <!-- Dynamic Data Cells -->
                    <td v-for="key in tableKeys" :key="key">
                      {{ item[key] }}
                    </td>
                    <td id="editbtn">
                      <button style="width: 50px; height: 50px;"  class="btn btn-sm btn-primary me-2" @click="editItem(item)">
                        <i class="fas fa-edit"></i> Edit
                      </button>
                      <button style="width: 50px; height: 50px;"  class="btn btn-sm btn-danger" @click="deleteItem(item.id)">
                        <i class="fas fa-trash"></i> Delete
                      </button>
                    </td>
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
              <div v-for="field in formFields" :key="field.key" class="mb-3">
                <label class="form-label">{{ field.label }}</label>
                <input v-if="field.type === 'date'" type="date" class="form-control" v-model="formData[field.key]" required>
                <input v-else-if="field.type === 'number'" type="number" class="form-control" v-model="formData[field.key]" :step="field.step || '1'" required>
                <textarea v-else-if="field.type === 'textarea'" class="form-control" v-model="formData[field.key]" rows="2"></textarea>
                <input v-else type="text" class="form-control" v-model="formData[field.key]" required>
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

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { Modal } from 'bootstrap';
import axios from 'axios';

// Equipment selection and data
const selectedEquipment = ref('BK1');
const performanceData = ref([]);
const isLoading = ref(true);

// Form data for the modal
const formData = ref({});

// Modal state
const isEditing = ref(false);
const dataModal = ref(null);
let modalInstance = null;

// The base URL for your Django API
const BASE_URL = 'http://localhost:8000/api/';

// --- DYNAMIC CONFIGURATION ---
// This is the core of the solution. We define the headers,
// API endpoints, and form fields for each equipment type here.
const equipmentConfig = {
  'BK1': {
    endpoint: 'mill/',
    headers: ['ID', 'Shift', ' Date', 'Production', 'Clinker Debut', 'Clinker fin','Clinker Diff', 'Pouzzolane Debut', 'Pouzzolane Fin', 'Pouzzolane Diff', 'Gypse Debut', 'Gypse Fin', 'Gypse Diff', 'Fine Debut', 'Fine Fin', 'Fine Diff','SO3', 'Blaines', 'Comments'],
    keys: ['id', 'shift_number', 'date', 'production', 'clinker_debut', 'clinker_fin', 'clinker_Difference', 'pouzzolane_debut', 'pouzzolane_fin', 'pouzzolane_Difference','gypse_debut','gypse_fin', 'gypse_Difference', 'fine_debut', 'fine_fin', 'fine_Difference', 'SO3', 'Blaines', 'commentaires'],
    formFields: [
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'shift_number', label: 'Shift', type: 'number' },
      { key: 'clinker_debut', label: 'Clinker Debut', type: 'number', step: '0.01' },
      { key: 'clinker_fin', label: 'Clinker Fin', type: 'number', step: '0.01' },
      { key: 'clinker_Difference', label: 'Clinker Difference', type: 'number', step: '0.01' },
      { key: 'pouzzolane_debut', label: 'Pouzzolane Debut', type: 'number', step: '0.01' },
      { key: 'pouzzolane_fin', label: 'Pouzzolane Fin', type: 'number', step: '0.01' },
      { key: 'pouzzolane_Difference', label: 'Pouzzolane Difference', type: 'number', step: '0.01' },
      { key: 'gypse_debut', label: 'Gypse Debut', type: 'number', step: '0.01' },
      { key: 'gypse_fin', label: 'Gypse Fin', type: 'number', step: '0.01' },
      { key: 'gypse_Difference', label: 'Gypse Difference', type: 'number', step: '0.01' },
      { key: 'fine_debut', label: 'Fine Debut', type: 'number', step: '0.01' },
      { key: 'fine_fin', label: 'Fine Fin', type: 'number', step: '0.01' },
      { key: 'fine_Difference', label: 'Fine Difference', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_debut', label: 'Compteur Horaire Debut', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_fin', label: 'Compteur Horaire Fin', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_Difference', label: 'Compteur Horaire Difference', type: 'number', step: '0.01' },
      { key: 'production', label: 'Production', type: 'number' },
      { key: 'SO3', label: 'SO3', type: 'number', step: '0.01' },
      { key: 'Blaines', label: 'Blaines', type: 'number', step: '0.01' },
      { key: 'no_godets_receptions', label: 'No Godets Receptions', type: 'number', step: '0.01' },
      { key: 'situation_entree_quart', label: 'Situation Entree Quart', type: 'text' },
      { key: 'ensilage_silo', label: 'Ensilage Silo', type: 'text' },
      { key: 'commentaires', label: 'Comments', type: 'textarea' },
    ]
  },
  'BK4': {
    endpoint: 'mill/',
    headers: ['ID', 'Shift', ' Date', 'Production','Clinker Debut', 'Clinker fin','Clinker Diff', 'Pouzzolane Debut', 'Pouzzolane Fin', 'Pouzzolane Diff', 'Gypse Debut', 'Gypse Fin', 'Gypse Diff', 'Fine Debut', 'Fine Fin', 'Fine Diff','SO3', 'Blaines', 'Comments'],
    keys: ['id', 'shift_number', 'date', 'production', 'clinker_debut', 'clinker_fin', 'clinker_Difference', 'pouzzolane_debut', 'pouzzolane_fin', 'pouzzolane_Difference','gypse_debut','gypse_fin', 'gypse_Difference', 'fine_debut', 'fine_fin', 'fine_Difference', 'SO3', 'Blaines', 'commentaires'],
    formFields: [
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'shift_number', label: 'Shift', type: 'number' },
      { key: 'clinker_debut', label: 'Clinker Debut', type: 'number', step: '0.01' },
      { key: 'clinker_fin', label: 'Clinker Fin', type: 'number', step: '0.01' },
      { key: 'clinker_Difference', label: 'Clinker Difference', type: 'number', step: '0.01' },
      { key: 'pouzzolane_debut', label: 'Pouzzolane Debut', type: 'number', step: '0.01' },
      { key: 'pouzzolane_fin', label: 'Pouzzolane Fin', type: 'number', step: '0.01' },
      { key: 'pouzzolane_Difference', label: 'Pouzzolane Difference', type: 'number', step: '0.01' },
      { key: 'gypse_debut', label: 'Gypse Debut', type: 'number', step: '0.01' },
      { key: 'gypse_fin', label: 'Gypse Fin', type: 'number', step: '0.01' },
      { key: 'gypse_Difference', label: 'Gypse Difference', type: 'number', step: '0.01' },
      { key: 'fine_debut', label: 'Fine Debut', type: 'number', step: '0.01' },
      { key: 'fine_fin', label: 'Fine Fin', type: 'number', step: '0.01' },
      { key: 'fine_Difference', label: 'Fine Difference', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_debut', label: 'Compteur Horaire Debut', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_fin', label: 'Compteur Horaire Fin', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_Difference', label: 'Compteur Horaire Difference', type: 'number', step: '0.01' },
      { key: 'production', label: 'Production', type: 'number' },
      { key: 'SO3', label: 'SO3', type: 'number', step: '0.01' },
      { key: 'Blaines', label: 'Blaines', type: 'number', step: '0.01' },
      { key: 'no_godets_receptions', label: 'No Godets Receptions', type: 'number', step: '0.01' },
      { key: 'situation_entree_quart', label: 'Situation Entree Quart', type: 'text' },
      { key: 'ensilage_silo', label: 'Ensilage Silo', type: 'text' },
      { key: 'commentaires', label: 'Comments', type: 'textarea' },
    ]
  },
  'BK5': {
    endpoint: 'mill/',
    headers: ['ID', 'Shift', ' Date', 'Production', 'Clinker Debut', 'Clinker fin','Clinker Diff', 'Pouzzolane Debut', 'Pouzzolane Fin', 'Pouzzolane Diff', 'Gypse Debut', 'Gypse Fin', 'Gypse Diff', 'Fine Debut', 'Fine Fin', 'Fine Diff','SO3', 'Blaines', 'Comments'],
    keys: ['id', 'shift_number', 'date', 'production', 'clinker_debut', 'clinker_fin', 'clinker_Difference', 'pouzzolane_debut', 'pouzzolane_fin', 'pouzzolane_Difference','gypse_debut','gypse_fin', 'gypse_Difference', 'fine_debut', 'fine_fin', 'fine_Difference', 'SO3', 'Blaines', 'commentaires'],
    formFields: [
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'shift_number', label: 'Shift', type: 'number' },
      { key: 'clinker_debut', label: 'Clinker Debut', type: 'number', step: '0.01' },
      { key: 'clinker_fin', label: 'Clinker Fin', type: 'number', step: '0.01' },
      { key: 'clinker_Difference', label: 'Clinker Difference', type: 'number', step: '0.01' },
      { key: 'pouzzolane_debut', label: 'Pouzzolane Debut', type: 'number', step: '0.01' },
      { key: 'pouzzolane_fin', label: 'Pouzzolane Fin', type: 'number', step: '0.01' },
      { key: 'pouzzolane_Difference', label: 'Pouzzolane Difference', type: 'number', step: '0.01' },
      { key: 'gypse_debut', label: 'Gypse Debut', type: 'number', step: '0.01' },
      { key: 'gypse_fin', label: 'Gypse Fin', type: 'number', step: '0.01' },
      { key: 'gypse_Difference', label: 'Gypse Difference', type: 'number', step: '0.01' },
      { key: 'fine_debut', label: 'Fine Debut', type: 'number', step: '0.01' },
      { key: 'fine_fin', label: 'Fine Fin', type: 'number', step: '0.01' },
      { key: 'fine_Difference', label: 'Fine Difference', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_debut', label: 'Compteur Horaire Debut', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_fin', label: 'Compteur Horaire Fin', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_Difference', label: 'Compteur Horaire Difference', type: 'number', step: '0.01' },
      { key: 'production', label: 'Production', type: 'number' },
      { key: 'SO3', label: 'SO3', type: 'number', step: '0.01' },
      { key: 'Blaines', label: 'Blaines', type: 'number', step: '0.01' },
      { key: 'no_godets_receptions', label: 'No Godets Receptions', type: 'number', step: '0.01' },
      { key: 'situation_entree_quart', label: 'Situation Entree Quart', type: 'text' },
      { key: 'ensilage_silo', label: 'Ensilage Silo', type: 'text' },
      { key: 'commentaires', label: 'Comments', type: 'textarea' },
    ]
  },
  'Secheur': {
    endpoint: 'dryer/',
    headers: ['ID', 'Shift', 'PZ Humide Debut', 'PZ Humide Fin', 'PZ Humide Diff', 'Bande Melange Debut', 'Bande Melange Fin', 'Bande Melange Diff', 'Compteur Horaire Debut', 'Compteur Horaire Fin', 'Compteur Horaire Difference', 'Quality', 'Production', 'Humidites Entree', 'Humidites Sortie', 'nbre_godets', 'poids_godets', 'debit', 'situation_entree_quart', 'ensilage_silo', 'Comments'],
    keys: ['id', 'shift_number', 'PZ_humide_debut', 'PZ_humide_fin', 'PZ_humide_Difference', 'bande_melange_debut', 'bande_melange_fin', 'bande_melange_Difference', 'compteur_horaire_debut', 'compteur_horaire_fin', ' compteur_horaire_Difference', 'quality', 'production', 'humidites_entree', 'humidites_sortie', 'nbre_godets', 'poids_godets', 'debit', 'situation_entree_quart', 'ensilage_silo', 'commentaires'],
    formFields: [
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'shift_number', label: 'Shift', type: 'number' },
      { key: 'PZ_humide_debut', label: 'PZ Humide Debut', type: 'number', step: '0.01' },
      { key: 'PZ_humide_fin', label: 'PZ Humide Fin', type: 'number', step: '0.01' },
      { key: 'PZ_humide_Difference', label: 'PZ Humide Difference', type: 'number', step: '0.01' },
      { key: 'bande_melange_debut', label: 'Bande Melange Debut', type: 'number', step: '0.01' },
      { key: 'bande_melange_fin', label: 'Bande Melange Fin', type: 'number', step: '0.01' },
      { key: 'bande_melange_Difference', label: 'Bande Melange Difference', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_debut', label: 'Compteur Horaire Debut', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_fin', label: 'Compteur Horaire Fin', type: 'number', step: '0.01' },
      { key: 'compteur_horaire_Difference', label: 'Compteur Horaire Difference', type: 'number', step: '0.01' },
      { key: 'production', label: 'Production', type: 'number' },
      { key: 'humidites_entree', label: 'Humidites Entree', type: 'number', step: '0.01' },
      { key: 'humidites_sortie', label: 'Humidites Sortie', type: 'number', step: '0.01' },
      { key: 'nbre_godets', label: 'Nombre Godets', type: 'number' },
      { key: 'poids_godets', label: 'Poids Godets', type: 'number', step: '0.01' },
      { key: 'debit', label: 'Debit', type: 'number', step: '0.01' },
      { key: 'situation_entree_quart', label: 'Situation Entree Quart', type: 'text' },
      { key: 'ensilage_silo', label: 'Ensilage Silo', type: 'text' },
      { key: 'commentaires', label: 'Comments', type: 'textarea' },
    ]
  },
  'Port': {
    endpoint: 'port/',
    headers: ['ID', 'Shift', 'Compteur Debut', 'Compteur Fin', 'Dechargement', 'Comments'],
    keys: ['id', 'shift_number', 'compteur_debut', 'compteur_fin', 'dechargement', 'commentaires'],
    formFields: [
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'shift_number', label: 'Shift', type: 'number' },
      { key: 'debut', label: 'Debut', type: 'date' },
      { key: 'fin', label: 'Fin', type: 'date' },
      { key: 'duree', label: 'Duree', type: 'number', step: '0.01' },
      { key: 'compteur_debut', label: 'Compteur Debut', type: 'number', step: '0.01' },
      { key: 'compteur_fin', label: 'Compteur Fin', type: 'number', step: '0.01' },
      { key: 'dechargement', label: 'Dechargement', type: 'number', step: '0.01' },
      { key: 'situation_entree_quart', label: 'Situation Entree Quart', type: 'text' },
      { key: 'ensilage_silo', label: 'Ensilage Silo', type: 'text' },
      { key: 'commentaires', label: 'Comments', type: 'textarea' },
    ]
  },
  'Expedition': {
    endpoint: 'expedition/',
    headers: ['ID', 'Shift', 'KK Nomayos KK', 'KK Nomayos NbreCamion', 'KK Nomayos Tonnage', 'Gypse Nomayos KK', 'Gypse Nomayos NbreCamion', 'Gypse Nomayos Tonnage', 'Gypse Figuil KK', 'Gypse Figuil NbreCamion', 'Gypse Figuil Tonnage', 'Petcoke Figuil KK', 'Petcoke Figuil NbreCamion', 'Petcoke Figuil Tonnage', 'KK Dangote KK', 'KK Dangote NbreCamion', 'KK Dangote Tonnage', 'KK Cimaf KK', 'KK Cimaf NbreCamion', 'KK Cimaf Tonnage', 'KK Miraco KK', 'KK Miraco NbreCamion', 'KK Miraco Tonnage', 'Reception rejets', 'Provenance lieu', 'Nbre Camion', 'Tonnage', 'Stock Receptions', 'Godets Biomasse', 'Godets Receptions', 'Godets Geocycle'],
    keys: ['id', 'shift_number', 'kk_chargee_nomayos_kk', 'kk_chargee_nomayos_NbreCamion', 'kk_chargee_nomayos_Tonnage', 'gypse_chargee_nomayos_kk', 'gypse_chargee_nomayos_NbreCamion', 'gypse_chargee_nomayos_Tonnage', 'gypse_figuil_kk', 'gypse_figuil_NbreCamion', 'gypse_figuil_Tonnage', 'petcoke_figuil_kk', 'petcoke_figuil_NbreCamion', 'petcoke_figuil_Tonnage', 'kk_dangote_kk', 'kk_dangote_NbreCamion', 'kk_dangote_Tonnage', 'kk_cimaf_kk', 'kk_cimaf_NbreCamion', 'kk_cimaf_Tonnage', 'kk_miraco_kk', 'kk_miraco_NbreCamion', 'kk_miraco_Tonnage', 'reception_camions_rejets', 'provenance_lieu', 'nbre_camion', 'tonnage', 'tonnage_stock_receptions', 'no_godets_cim_biomasse', 'godets_geocycle_biomasse', 'no_godets_receptions'],
    formFields: [
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'shift_number', label: 'Shift', type: 'number' },
      { key: 'kk_chargee_nomayos_kk', label: 'KK Chargee Nomayos KK', type: 'text' },
      { key: 'kk_chargee_nomayos_NbreCamion', label: 'KK Nomayos Nbre Camion', type: 'number' },
      { key: 'kk_chargee_nomayos_Tonnage', label: 'KK Nomayos Tonnage', type: 'number', step: '0.01' },
      { key: 'gypse_chargee_nomayos_kk', label: 'Gypse Nomayos KK', type: 'number' },
      { key: 'gypse_chargee_nomayos_NbreCamion', label: 'Gypse Nomayos Nbre Camion', type: 'number' },
      { key: 'gypse_chargee_nomayos_Tonnage', label: 'Gypse Nomayos Tonnage', type: 'number', step: '0.01' },
      { key: 'gypse_figuil_kk', label: 'Gypse Figuil KK', type: 'number' },
      { key: 'gypse_figuil_NbreCamion', label: 'Gypse Figuil Nbre Camion', type: 'number' },
      { key: 'gypse_figuil_Tonnage', label: 'Gypse Figuil Tonnage', type: 'number', step: '0.01' },
      { key: 'petcoke_figuil_kk', label: 'Petcoke Figuil kk', type: 'number', step: '0.01' },
      { key: 'petcoke_figuil_NbreCamion', label: 'Petcoke Figuil NbreCamion', type: 'number', step: '0.01' },
      { key: 'petcoke_figuil_Tonnage', label: 'Petcoke Figuil Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_dangote_kk', label: 'KK Dangote KK', type: 'number', step: '0.01' },
      { key: 'kk_dangote_NbreCamion', label: 'KK Dangote NbreCamion', type: 'number', step: '0.01' },
      { key: 'kk_dangote_Tonnage', label: 'KK Dangote Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_miraco_kk', label: 'KK Miraco Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_miraco_NbreCamion', label: 'KK Miraco Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_miraco_Tonnage', label: 'KK Miraco Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_cimaf_kk', label: 'KK Cimaf Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_cimaf_NbreCamion', label: 'KK Cimaf Tonnage', type: 'number', step: '0.01' },
      { key: 'kk_cimaf_Tonnage', label: 'KK Cimaf Tonnage', type: 'number', step: '0.01' },
      { key: 'reception_camions_rejets', label: 'Camions Rejets', type: 'number' },
      { key: 'provenance_lieu', label: 'Provenance Lieu', type: 'text' },
      { key: 'nbre_camion', label: 'Nbre Camion', type: 'number' },
      { key: 'tonnage', label: 'Tonnage', type: 'number', step: '0.01' },
      { key: 'no_godets_cim_biomasse', label: 'Godets CIM Biomasse', type: 'number' },
      { key: 'godets_geocycle_biomasse', label: 'Godets Geocycle Biomasse', type: 'number' },
      { key: 'no_godets_receptions', label: 'Godets Receptions', type: 'number' },
      { key: 'tonnage_stock_receptions', label: 'Tonnage Stock Receptions', type: 'number', step: '0.01' },
    ]
  },
};

// Computed properties to get the dynamic values based on the selection
const tableHeaders = computed(() => {
  const config = equipmentConfig[selectedEquipment.value];
  return config ? config.headers : [];
});

const tableKeys = computed(() => {
  const config = equipmentConfig[selectedEquipment.value];
  return config ? config.keys : [];
});

const formFields = computed(() => {
  const config = equipmentConfig[selectedEquipment.value];
  return config ? config.formFields : [];
});

// Fetch data from the appropriate API endpoint
const fetchData = async () => {
  isLoading.value = true;
  const config = equipmentConfig[selectedEquipment.value];
  if (!config) {
    console.error('Unknown equipment selected');
    performanceData.value = [];
    isLoading.value = false;
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}${config.endpoint}`);
    performanceData.value = response.data;
  } catch (error) {
    console.error(`Error fetching data for ${selectedEquipment.value}:`, error);
    performanceData.value = [];
  } finally {
    isLoading.value = false;
  }
};

// Initialize modal on component mount
onMounted(() => {
  modalInstance = new Modal(dataModal.value);
  fetchData();
});

// Watch for changes in selected equipment and fetch new data
watch(selectedEquipment, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchData();
  }
});

// Select equipment and trigger data fetch
const selectEquipment = (equipment) => {
  selectedEquipment.value = equipment;
};

// Close modal
const closeModal = () => {
  modalInstance.hide();
  resetForm();
};

// Reset form fields
const resetForm = () => {
  formData.value = {};
};

// Open modal for editing
const editItem = (item) => {
  formData.value = { ...item };
  isEditing.value = true;
  modalInstance.show();
};

// Delete item
const deleteItem = async (itemId) => {
  if (confirm('Are you sure you want to delete this record?')) {
    const config = equipmentConfig[selectedEquipment.value];
    if (!config) {
      console.error('Unknown equipment selected');
      return;
    }
    try {
      await axios.delete(`${BASE_URL}${config.endpoint}${itemId}/`);
      performanceData.value = performanceData.value.filter(item => item.id !== itemId);
      console.log('Record deleted successfully.');
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  }
};


// Save data (add or update)
const saveData = async () => {
  const config = equipmentConfig[selectedEquipment.value];
  if (!config) {
    console.error('Unknown equipment selected');
    return;
  }

  const dataToSave = {
    ...formData.value,
    // Note: 'equipement_name' is not in your Django models, so we remove it.
  };

  try {
    if (isEditing.value) {
      await axios.put(`${BASE_URL}${config.endpoint}${formData.value.id}/`, dataToSave);
    } else {
      await axios.post(`${BASE_URL}${config.endpoint}`, dataToSave);
    }
    closeModal();
    fetchData(); // Refresh the data after saving
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

</script>

<style scoped>
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
 /* Delete and edit button */
 #editbtn{
  display: flex; /* This is the most important part */
  gap: 10px; /* Adds space between the buttons */
  justify-content: center; /* Aligns the buttons to the center of the container */
  
}
 

/* --- Dropdown specific styles (Corrected) --- */

/* Style the parent list item that will trigger the dropdown */
.nav-dropdown {
    position: relative;
}

/* Style the dropdown menu itself */
.dropdown-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 0; /* Initially hide the menu by setting its height to 0 */
    overflow: hidden;
    transition: max-height 0.3s ease-in-out; /* Smooth transition */
    background-color: #2c3a51;
    border-radius: 6px;
    margin-top: 5px;
}

/* Style the individual dropdown links */
.dropdown-menu-item a {
    padding: 10px 15px 10px 45px; /* Add padding to push it to the right */
    font-size: 0.9em;
    display: block;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
}

/* Change color on hover for dropdown links */
.dropdown-menu-item a:hover {
    background-color: rgba(67, 97, 238, 0.2);
    color: white;
}

/* The key rule: show the dropdown when the parent `li` is hovered */
.nav-dropdown:hover > .dropdown-menu {
    max-height: 200px; /* A large enough value to show the full content */
}
</style>
