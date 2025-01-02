import React from "react";
// import googleReviewsLogo from "../assets/google-reviews-logo.png";
import physiotherapyImage from "../assets/img.webp";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800">
            The Physiotherapy Specialist
          </h1>
          <p className="mt-4 text-gray-600">
            Pain Relief and Recovery with the best physiotherapy near you.
            ReLiva has a team of experienced and expert physiotherapists to keep
            you ahead.
          </p>

          {/* City Selector */}
          <select className="mt-6 w-full max-w-xs px-4 py-2 border rounded-lg text-gray-700 bg-gray-100">
            <option value="">Select City</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
          </select>

          {/* Reviews */}
          <div className="flex items-center mt-4">
            {/* <img src={googleReviewsLogo} alt="Google Reviews" className="h-6" /> */}
            <p className="ml-4 text-gray-800 font-semibold">
              4.9/5 <span className="text-yellow-500 font-bold">★★★★★</span>{" "}
              (5500+)
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={physiotherapyImage}
            alt="Physiotherapy"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md border">
          <p className="text-sm text-green-600 font-semibold">
            No Travel + Saves Time
          </p>
          <h3 className="text-lg font-bold mt-2">Physiotherapy at Home</h3>
          <p className="mt-2 text-gray-600">
            Recover with expert physiotherapy at home conveniently with a home
            visit physiotherapist.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md border">
          <p className="text-sm text-green-600 font-semibold">
            From Wherever You Are!
          </p>
          <h3 className="text-lg font-bold mt-2">Online Physiotherapy</h3>
          <p className="mt-2 text-gray-600">
            See a Physio online, so you need not come to a clinic! Tele
            Physiotherapy which is Effective, Convenient & Safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
