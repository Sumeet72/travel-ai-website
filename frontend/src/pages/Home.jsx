import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchBox from "../components/home/SearchBox";
import Destinations from "../components/home/Destinations";
import Features from "../components/home/Features";
import Footer from "../components/layout/Footer";

function Home() {
  return ( <>
      <Navbar />
        <Hero />
        <SearchBox />
        <Destinations />
        <Features />
      <Footer />
      
    </>
  );
}

export default Home;