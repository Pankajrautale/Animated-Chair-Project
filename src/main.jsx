import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Categories from './Categories.jsx'
import './Categories.css'
import About from './About.jsx'
import './About.css'
import Dicsover from './Dicsover.jsx'
import './Discover.css'
import Bestservice from "./Bestservice.jsx";
import './Bestservice.css'
import Latestp from './Latestp.jsx'
import './Latestp.css'
import Blog from './Blog.jsx'
import './Blog.css'
import Footer from './Footer.jsx'
import "./Footer.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Categories/>
    <About/>
    <Dicsover/>
    <Bestservice/>
    <Latestp/>
    <Blog/>
    <Footer/>
  </StrictMode>,
)
