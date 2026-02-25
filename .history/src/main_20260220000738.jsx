import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ServiceSection from './components/ServiceSection.jsx'



createRoot(document.getElementById('root')).render(
  <>
    <ServiceSection />
  </>
)

