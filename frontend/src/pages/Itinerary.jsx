import { useEffect, useState } from "react";

function Itinerary() {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("itinerary");

    if (data) {
      setTrip(JSON.parse(data));
    }
  }, []);

  if (!trip) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        No itinerary found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          ✈️ Your AI Travel Plan
        </h1>

        {/* Summary */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Trip Summary
          </h2>

          <p><strong>Destination:</strong> {trip.summary.destination}</p>

          <p><strong>Budget:</strong> ₹{trip.summary.budget}</p>

          <p><strong>Travelers:</strong> {trip.summary.travelers}</p>

          <p><strong>Style:</strong> {trip.summary.travelStyle}</p>

          <p><strong>Duration:</strong> {trip.summary.duration}</p>

        </div>

        {/* Day Wise */}

        <div className="space-y-6">

          {trip.days.map((day) => (

            <div
              key={day.day}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold mb-3">

                Day {day.day} - {day.title}

              </h2>

              <ul className="list-disc ml-6">

                {day.activities.map((activity, index) => (

                  <li key={index}>

                    {activity}

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* Hotels */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">

            Recommended Hotels

          </h2>

          <ul className="list-disc ml-6">

            {trip.hotels.map((hotel, index) => (

              <li key={index}>{hotel}</li>

            ))}

          </ul>

        </div>

        {/* Restaurants */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">

            Restaurants

          </h2>

          <ul className="list-disc ml-6">

            {trip.restaurants.map((restaurant, index) => (

              <li key={index}>{restaurant}</li>

            ))}

          </ul>

        </div>

        {/* Packing */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">

            Packing Checklist

          </h2>

          <ul className="list-disc ml-6">

            {trip.packing.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

        </div>

        {/* Tips */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 mb-10">

          <h2 className="text-2xl font-bold mb-4">

            Travel Tips

          </h2>

          <ul className="list-disc ml-6">

            {trip.tips.map((tip, index) => (

              <li key={index}>{tip}</li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Itinerary;