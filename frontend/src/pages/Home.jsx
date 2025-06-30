import React from "react";
import physiotherapyImg from "../assets/physiotherapy.png";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20 md:flex items-center justify-between max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Professional Physiotherapy Care at <br /> Your Fingertips
          </h1>
          <p className="text-gray-700 mb-6">
            Book your physiotherapy session online and get expert treatment
            from certified therapists. Recovery starts here.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Book Appointment
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={physiotherapyImg}
            alt="Physiotherapy"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: "🦴",
              title: "Sports Injury",
              desc: "Specialized treatment for sports-related injuries and rehabilitation.",
            },
            {
              icon: "💺",
              title: "Back Pain Treatment",
              desc: "Expert care for chronic and acute back pain conditions.",
            },
            {
              icon: "🚶‍♂️",
              title: "Rehabilitation",
              desc: "Comprehensive rehabilitation programs for various conditions.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg border transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Process */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Easy Booking Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Choose Date",
              icon: "📅",
              desc: "Select your preferred appointment date",
            },
            {
              title: "Select Therapist",
              icon: "👨‍⚕️",
              desc: "Choose from our expert therapists",
            },
            {
              title: "Pick Time",
              icon: "⏰",
              desc: "Select your convenient time slot",
            },
            {
              title: "Confirm Booking",
              icon: "✅",
              desc: "Complete your appointment booking",
            },
          ].map((step, i) => (
            <div key={i}>
              <div className="text-5xl mb-3">{step.icon}</div>
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Therapists Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Expert Therapists</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Dr. John Smith",
              title: "Sports Rehabilitation Specialist",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Dr. Sarah Johnson",
              title: "Spine Care Expert",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Dr. Shymala",
              title: "Orthopedic Physiotherapist",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {doc.name}
              </h3>
              <p className="text-sm text-gray-600">{doc.title}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Your Recovery Journey?
        </h2>
        <p className="mb-6">
          Book your appointment now and take the first step towards better
          health.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 font-medium rounded-full hover:bg-gray-100 transition">
          Book Your Appointment
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-bold mb-2">PhysioConnect</h3>
            <p>
              Professional physiotherapy services with online booking
              convenience.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul>
              <li>Services</li>
              <li>Therapists</li>
              <li>Appointments</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>📞 +1 234 567 890</p>
            <p>✉️ info@physioconnect.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <span>🌐</span>
              <span>🐦</span>
              <span>📸</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
