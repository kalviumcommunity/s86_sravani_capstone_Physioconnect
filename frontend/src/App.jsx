import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TherapistImageUpload from './components/TherapistImageUpload';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-100 to-blue-50">
      <Navbar />
      <main className="flex-grow px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<TherapistImageUpload />} />
          {/* Add more routes like login, therapists, etc */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
