import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 mb-52">
      {/* Banner */}
      <div className="mb-16 ml-24">
        <img
          src="/src/assets/contact-us.png"
          alt="Contact Banner"
          className="w-1/5 h-auto"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 px-6">
        {/* Left Section */}
        <div className="text-gray-800 flex-1">
          <h2 className="text-4xl font-semibold mb-3">Get In Touch</h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Reach out to our team. Let’s make your modeling dreams a reality!
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            {/* Location */}
            <div className="flex items-start gap-4 text-gray-700">
              <img src="/src/assets/pin.svg" alt="Location" className="w-7 h-7" />
              <p className="text-base leading-relaxed">
                29 20th Ave, Cubao, Quezon City, 1110 Metro Manila
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-gray-700">
              <img src="/src/assets/email.svg" alt="Email" className="w-7 h-7" />
              <div className="flex flex-col gap-1">
                <p className="text-base">models@manilarunwayrepublic.com</p>
                <p className="text-base">kathy@manilarunwayrepublic.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="flex-1 bg-white shadow-lg shadow-gray-200 rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl">
          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={5}
            className="px-4 py-3 border border-gray-200 rounded-xl text-base resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
