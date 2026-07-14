import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Destination from "./pages/Destination";
import Planner from "./pages/Planner";
import Itinerary from "./pages/Itinerary";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
   
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/destination/:id" element={<Destination />} />
      <Route
  path="/planner"
  element={
    <ProtectedRoute>
      <Planner />
    </ProtectedRoute>
  }
/>

<Route
  path="/itinerary"
  element={
    <ProtectedRoute>
      <Itinerary />
    </ProtectedRoute>
  }
/>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;