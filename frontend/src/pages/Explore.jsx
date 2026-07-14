import { useNavigate } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Goa",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    description: "Sunny beaches, nightlife and Portuguese heritage.",
    price: "₹18,000",
  },
  {
    id: 2,
    name: "Manali",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    description: "Snowy mountains and breathtaking valleys.",
    price: "₹15,000",
  },
  {
    id: 3,
    name: "Kerala",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
    description: "Backwaters, houseboats and lush greenery.",
    price: "₹22,000",
  },
  {
    id: 4,
    name: "Jaipur",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg",
    description: "The Pink City with forts and palaces.",
    price: "₹16,000",
  },
  {
    id: 5,
    name: "Bali",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg",
    description: "Tropical paradise with temples and beaches.",
    price: "₹48,000",
  },
  {
    id: 6,
    name: "Paris",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    description: "Romantic city famous for the Eiffel Tower.",
    price: "₹75,000",
  },
];

function Explore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-3">
          Explore Destinations
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Discover amazing places around the world and start planning your next adventure.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {destinations.map((place) => (

            <div
              key={place.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {place.name}
                </h2>

                <p className="text-gray-500 mt-3">
                  {place.description}
                </p>

                <p className="mt-4 text-cyan-600 text-xl font-bold">
                  Starting From {place.price}
                </p>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => navigate(`/destination/${place.id}`)}
                    className="flex-1 bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700"
                  >
                    Explore
                  </button>

                  <button
                    onClick={() =>
                      navigate("/planner", {
                        state: { destination: place.name },
                      })
                    }
                    className="flex-1 border border-cyan-600 text-cyan-600 py-3 rounded-xl hover:bg-cyan-50"
                  >
                    Plan Trip
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default Explore;