import { useNavigate } from "react-router-dom";
const destinations = [
  {
    id: 1,
    name: "Goa",
   image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
    price: "₹18,000",
  },
  {
    id: 2,
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    price: "₹15,000",
  },
  {
    id: 3,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    price: "₹22,000",
  },
  {
    id: 4,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    price: "₹16,000",
  },
  {
    id: 5,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: "₹48,000",
  },
  {
    id: 6,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "₹75,000",
  },
];

function Destinations() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {destinations.map((place) => (

            <div
              key={place.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >

              <img
                src={place.image}
                alt={place.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {place.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  Starting From
                </p>

                <p className="text-cyan-600 font-bold text-xl">
                  {place.price}
                </p>

                <button
                onClick={() => navigate(`/destination/${place.id}`)}
                className="mt-5 w-full bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700"
                >
                 Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Destinations;