// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://truckapp.inextwebs.com/api';

export const login = async (phone) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/login`,
      { phone },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};
export const verifyOTP = async (token, otp) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/verify-otp`,
      { 
        otp: otp,
        token: token 
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};
export const fetchVehicles = async (page = 1, limit = 5) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles/`, {
      params: { page, limit },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return {
      vehicles: response.data.vehicles || [],
      hasMore: response.data.vehicles?.length === limit // Check if more pages exist
    };
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};