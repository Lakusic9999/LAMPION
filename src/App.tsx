import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Lamp from './components/Lamp';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen bg-secondary">
          {/* Lamp pozadina */}
          <div className="fixed top-0 left-0 z-0 h-screen w-screen">
            <Lamp />
          </div>

          {/* Sadržaj sajta */}
          <div className="relative z-10">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>

      </Router>
    </LanguageProvider>
  );
}

export default App;