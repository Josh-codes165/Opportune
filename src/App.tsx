import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Opportunity from './Components/Opportunity'
import HIW from './Components/HIW'
import STATS from './Components/STATS'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import OpportunityList from './Pages/OpportunityList'


function Home() {
  return (
    <>
      <Hero />
      <Opportunity />
      <HIW/>
      <STATS/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OpportunityList" element={<OpportunityList />} />
      </Routes>
    </>
  )
}

export default App
