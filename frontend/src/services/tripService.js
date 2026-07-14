import axios from "axios";

const API = "http://localhost:5000/api/trip";

export const generateTrip = async (tripData) => {
  const response = await axios.post(
    `${API}/generate-trip`,
    tripData
  );

  return response.data;
};