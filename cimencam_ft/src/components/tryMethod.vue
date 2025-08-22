// src/views/Performance.vue
<template>
  <div class="performance-page">
    <h2>Performance Dashboard</h2>
    
    <div class="date-selector mb-4">
      <input type="date" v-model="selectedDate" @change="loadData">
    </div>
    
    <div class="shift-tabs">
      <button v-for="shift in [1, 2, 3]" 
              :key="shift" 
              @click="selectedShift = shift"
              :class="{ active: selectedShift === shift }">
        Shift {{ shift }}
      </button>
    </div>
    
    <div class="kpi-cards">
      <div class="kpi-card" v-for="kpi in kpis" :key="kpi.title">
        <h3>{{ kpi.title }}</h3>
        <div class="kpi-value">{{ kpi.value }}</div>
        <div class="kpi-target">Target: {{ kpi.target }}</div>
      </div>
    </div>
    
    <div class="production-data">
      <h3>Production Data</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Production (tons)</th>
            <th>Downtime (mins)</th>
            <th>Efficiency</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="equip in equipmentData" :key="equip.name">
            <td>{{ equip.name }}</td>
            <td>{{ equip.production }}</td>
            <td>{{ equip.downtime }}</td>
            <td>{{ equip.efficiency }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

const selectedDate = ref(new Date().toISOString().split('T')[0]);
const selectedShift = ref(1);
const shiftData = ref(null);
const equipmentData = ref([]);
const kpis = ref([
  { title: 'OPTIMISATION', value: '0', target: '85%' },
  { title: 'QUALITY', value: '0', target: '92%' },
  { title: 'PRODUCTION', value: '0', target: '2' },
  { title: 'Total Production', value: '0', target: '1 tons' }
]);

async function loadData() {
  try {
    // Get shift data
    const shiftsResponse = await api.getShifts(selectedDate.value);
    const shift = shiftsResponse.data.find(s => s.shift_number === selectedShift.value);
    
    if (shift) {
      shiftData.value = shift;
      
      // Get all equipment data
      const [broyeurData, secheurData, portData, expeditionData] = await Promise.all([
        api.getBroyeurData(shift.id),
        api.getSecheurData(shift.id),
        api.getPortData(shift.id),
        api.getExpeditionData(shift.id)
      ]);
      
      // Process data for display
      equipmentData.value = [
        {
          name: 'BROYEUR-1',
          production: broyeurData.data.find(b => b.broyeur_type === 'BROYEUR-1')?.ciment_produit || 0,
          downtime: 0, // Calculate based on your data
          efficiency: 85 // Calculate based on your data
        },
        // Add other equipment similarly
      ];
      
      // Update KPIs
      updateKPIs(broyeurData.data, secheurData.data, portData.data, expeditionData.data);
    }
  } catch (error) {
    console.error('Error loading performance data:', error);
  }
}

function updateKPIs(broyeurData, secheurData, portData, expeditionData) {
  // Calculate your KPIs based on the data
  const totalProduction = broyeurData.reduce((sum, b) => sum + b.ciment_produit, 0);
  
  kpis.value = [
    { title: 'OPTIMISATION', value: '85', target: '85%' }, // Replace with actual calculation
    { title: 'QUALITY', value: '92', target: '92%' }, // Replace with actual calculation
    { title: 'PRODUCTION', value: broyeurData.length, target: '2' },
    { title: 'Total Production', value: totalProduction.toFixed(1), target: '1 tons' }
  ];
}

onMounted(() => {
  loadData();
});
</script>

<style scoped>
.performance-page {
  padding: 20px;
}

.shift-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.shift-tabs button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.shift-tabs button.active {
  background: #4361ee;
  color: white;
}

.kpi-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.kpi-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.kpi-card h3 {
  margin-top: 0;
  color: #4361ee;
}

.kpi-value {
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
}

.kpi-target {
  color: #666;
  font-size: 0.9rem;
}

.production-data {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background: #f5f7fb;
}
</style>