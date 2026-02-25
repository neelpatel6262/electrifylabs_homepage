import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'  
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ServiceSection from './components/ServiceSection.jsx'
import ServiceCard from './components/ServiceCard.jsx'
import ProductSection from './components/ProductSection.jsx'
import LibrarySection from './components/LibrarySection.jsx'
import BlogSection from './components/BlogSection.jsx'
import CTASection from './components/CTASection.jsx'
import Footer from './components/Footer.jsx'





createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <div id="hero">
      <HeroSection />
    </div>
    <div id="about">
      <AboutSection />
    </div>
    <div id="services">
      <ServiceSection />
    </div>
    <div id="products">
      <ProductSection />
    </div>
    <div id="library">
      <LibrarySection />
    </div>
    <div id="blog">
      <BlogSection />
    </div>
    <div id="cta">
      <CTASection />
    </div>
    <Footer />

  </>
)

