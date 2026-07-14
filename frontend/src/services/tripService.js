import axios from "axios";

const API = " https://travel-ai-backend-zjwy.onrender.com/api/trip";

export const generateTrip = async (tripData) => {
  const response = await axios.post(
    `${API}/generate-trip`,
    tripData
  );

  return response.data;
};