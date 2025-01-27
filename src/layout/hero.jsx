import React from "react";
// import Navbar from "../navBar/index.jsx";
import Hero from "../hero/main.jsx";
import Offerings from "../hero/offerings.jsx";
import ConsultationForm from "../hero/from.jsx";

// import Footer from "../Footer/index.jsx";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-36 py-28 pt-10 ">
      {/* <Navbar /> */}

      <Hero />
      <Offerings />

      <ConsultationForm />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
