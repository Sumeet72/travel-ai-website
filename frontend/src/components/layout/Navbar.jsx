import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("itinerary");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-cyan-600"
        >
          VoyageAI
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="hover:text-cyan-600">
            Home
          </Link>

          <Link to="/explore" className="hover:text-cyan-600">
            Explore
          </Link>

          <Link to="/planner" className="hover:text-cyan-600">
            AI Planner
          </Link>

          <Link to="/contact" className="hover:text-cyan-600">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 border rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-5 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;