import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/ServiceSection.jsx'
import './components/ServiceCard.jsx'
import ServiceCard from './components/ServiceCard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

<ServiceSection />
<ServiceCard />
  

  </StrictMode>,``
)
