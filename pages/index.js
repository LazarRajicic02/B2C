import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import NewInSection from "@/sections/NewIn";
import Hero from "@/sections/Hero";

const Homepage = () => {
  return (
    <div className="p-6">
      <Header />
      <Hero />
      <NewInSection />
      <Footer />
    </div>
  );
};

export default Homepage;
