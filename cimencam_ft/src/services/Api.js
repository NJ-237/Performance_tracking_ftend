// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/', // Your Django API URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}` // If using token auth
  }
});

export default {
  // Shift endpoints
  getShifts(date) {
    return apiClient.get('/shifts/', { params: { date } });
  },
  getShift(id) {
    return apiClient.get(`/shifts/${id}/`);
  },
  createShift(shiftData) {
    return apiClient.post('/shifts/', shiftData);
  },
  
  // Broyeur endpoints
  getBroyeurData(shiftId) {
    return apiClient.get(`/shifts/${shiftId}/broyeur_data/`);
  },
  createBroyeurData(data) {
    return apiClient.post('/broyeur-data/', data);
  },
  
  // Secheur endpoints
  getSecheurData(shiftId) {
    return apiClient.get(`/shifts/${shiftId}/secheur_data/`);
  },
  createSecheurData(data) {
    return apiClient.post('/secheur-data/', data);
  },
  
  // Port endpoints
  getPortData(shiftId) {
    return apiClient.get(`/shifts/${shiftId}/port_data/`);
  },
  createPortData(data) {
    return apiClient.post('/port-data/', data);
  },
  
  // Expedition endpoints
  getExpeditionData(shiftId) {
    return apiClient.get(`/shifts/${shiftId}/expedition_data/`);
  },
  createExpeditionData(data) {
    return apiClient.post('/expedition-data/', data);
  }
};