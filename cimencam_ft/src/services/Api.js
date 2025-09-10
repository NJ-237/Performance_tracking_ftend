// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Your Django API URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': "Token {}".format(),
  },
});

// Use a request interceptor to set the Authorization header dynamically
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Set the token on every request
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
  getEquipment(shiftId) {
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
  },

   login(credentials) {
    return apiClient.post('login/', credentials);
    // return apiClient.post('token/', credentials);
  },
};
