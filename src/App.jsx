// eslint-disable-next-line no-unused-vars
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from  './pages/Home';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Services from './pages/Services';
import Technology from './pages/Technology';
import Projects from './pages/Projects';
import About from './pages/About';
import UIDesigner from './components/job-postings/ui-designer';
import UXDesigner from './components/job-postings/ux-designer';
import DesignHead from './components/job-postings/design-head';
import CareerFormPage from './pages/CareerFormPage';

const App = () => {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/job-postings/design-head" element={<DesignHead />}/>
          <Route path ="/ux-designer" element={<UXDesigner />}/>
          <Route path ="/ui-designer" element={<UIDesigner />}/>
          <Route path ="/design-head" element={<DesignHead />}/>
          <Route path="/apply" element={<CareerFormPage />} />
        </Routes>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
