import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Opportunity from './Components/Opportunity'
import HIW from './Components/HIW'
import STATS from './Components/STATS'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import OpportunityList from './Pages/OpportunityList'
import OpportunityDetails from './Pages/OpportunityDetails'
import {useScrollToHash} from './hooks/ScrollToHash'


function Home() {
  return (
    <>
      <Hero />
      <Opportunity />
      <HIW/>
      <STATS/>
    </>
  )
}

function App() {
  useScrollToHash();
  return (  
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OpportunityList" element={<OpportunityList />} />
        <Route path='/OpportunityDetails/:id' element={<OpportunityDetails />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
