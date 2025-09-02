
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Booking from "./Booking.jsx"
import Ai from "./AICounselling.jsx"
import Resource from "./Resources.jsx"
import Admin from "./Admin.jsx"
function App() {
 

  return (
    <Routes>
          <Route path="/ai" element={<Ai/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/resource" element={<Resource/>} />
          <Route path="/admin" element={<Admin/>} />
</Routes>
  )
}

export default App
