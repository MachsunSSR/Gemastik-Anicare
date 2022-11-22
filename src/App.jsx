import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import ConsulDoc from './pages/ConsulDoc'
import ConsulSys from './pages/ConsulSys'
import Info from './pages/Info'
import Question from './pages/Question'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import History from './pages/History'
import Book from './pages/Book'

import Admin from './pages/admin/DashboardAdmin'
import Doctor from './pages/doctor/DashboardDoctor'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/informasi-terkini" element={<Info />} />
        <Route path="/konsultasi-sistem" element={<ConsulSys />} />
        <Route path="/panggil-dokter" element={<ConsulDoc />} />
        <Route path="/tanya-disini" element={<Question />} />
        <Route path="/login-peternak" element={<Login />} />
        <Route path="/register-peternak" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/riwayat" element={<History />} />
        <Route path="/booking" element={<Book />} />
        <Route path="/dokter" element={<Doctor />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
