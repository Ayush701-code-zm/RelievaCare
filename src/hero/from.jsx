import React, { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    date: "",
    phone: "",
    doctor: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      if (
        formData.name &&
        formData.email &&
        formData.program &&
        formData.date
      ) {
        console.log("Form submitted:", formData);
        setError(null); // Reset error if successful
      } else {
        setError("Please fill all the required fields.");
      }
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-center text-3xl font-bold text-teal-600 mb-6">
          Book Your Free Consultation
        </h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 2: Program and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Program
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              >
                <option value="">Choose a Program</option>
                <option value="Family Therapy">Family Therapy</option>
                <option value="Individual Therapy">Individual Therapy</option>
                <option value="Group Therapy">Group Therapy</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 3: Phone and Doctor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Doctor
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              >
                <option value="">Choose a Doctor</option>
                <option value="Dr. John Doe">Dr. John Doe</option>
                <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                <option value="Dr. Alex Johnson">Dr. Alex Johnson</option>
              </select>
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a message or describe your concerns"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold ${
              isSubmitting
                ? "bg-teal-300 text-white cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-600 transition"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Your Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
