import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateTrip } from "../services/tripService";
function Planner() {

  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    from: "",
    destination: "",
    departure: "",
    returnDate: "",
    budget: "",
    travelers: "",
    travelStyle: "Solo",
    interests: "Adventure"
  });

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    try {

      const response = await generateTrip(trip);

      localStorage.setItem(
        "itinerary",
        JSON.stringify(response.result)
      );

      navigate("/itinerary");

    } catch (error) {
      alert("Failed to generate trip");
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-slate-100 py-16">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center mb-2">
          AI Trip Planner
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Tell us about your trip and let AI create your perfect itinerary.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
        <input
            type="text"
            name="from"
            value={trip.from}
            onChange={handleChange}
            placeholder="From"
            className="border p-4 rounded-xl"
        />

          <input
            type="text"
            name="destination"
            value={trip.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="border p-4 rounded-xl"
        />

          <input
            type="date"
            name="departure"
            value={trip.departure}
            onChange={handleChange}
            className="border p-4 rounded-xl"
        />

          <input
            type="date"
            name="returnDate"
            value={trip.returnDate}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="budget"
            value={trip.budget}
            onChange={handleChange}
            placeholder="Budget (₹)"
            className="border p-4 rounded-xl"
          />

         <input
            type="number"
            name="travelers"
            value={trip.travelers}
            onChange={handleChange}
            placeholder="Number of Travelers"
            className="border p-4 rounded-xl"

/>

          <select
            name="travelStyle"
            value={trip.travelStyle}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          >
            <option>Solo</option>
            <option>Couple</option>
            <option>Family</option>
            <option>Friends</option>
          </select>

          <select
            name="interests"
            value={trip.interests}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          >
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Nature</option>
            <option>Food</option>
            <option>Shopping</option>
            <option>Historical</option>
          </select>

        </div>

        <button
            onClick={handleGenerate}
            className="mt-10 w-full bg-cyan-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-cyan-700"
        >
        Generate AI Trip
        </button>

      </div>

    </div>
  );
}

export default Planner;