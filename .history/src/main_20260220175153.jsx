import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'  
import ServiceSection from './components/ServiceSection.jsx'
import ServiceCard from './components/ServiceCard.jsx'




createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <ServiceSection />
    <ServiceCard />

  </>
)

