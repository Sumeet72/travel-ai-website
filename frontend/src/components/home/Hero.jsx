import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-linear-to-r from-cyan-600 via-sky-700 to-blue-800 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-6xl font-bold leading-tight">
          Explore the World <br />
          with AI
        </h1>

        <p className="mt-6 text-xl max-w-2xl text-gray-100">
          Plan personalized trips, discover breathtaking destinations,
          and generate smart AI-powered travel itineraries in seconds.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">

          <button
            onClick={() => navigate("/planner")}
            className="bg-white text-cyan-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
          >
            ✈ Start Planning
          </button>

          <button
            onClick={() => navigate("/explore")}
            className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-700 transition duration-300"
          >
            🌍 Explore Destinations
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;