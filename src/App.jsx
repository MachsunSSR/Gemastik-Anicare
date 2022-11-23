import { useState, useContext } from 'react'
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
import RegisterPeternak from './pages/RegisterPeternak'
import RegisterDokter from './pages/RegisterDokter'
import Profile from './pages/Profile'
import History from './pages/History'
import Book from './pages/Book'
import AddQuestion from './pages/AddQuestion'

import DetailInformasi from './pages/DetailInformasi'
import DetailOrder from './pages/DetailOrder'
import DetailPertanyaan from './pages/DetailPertanyaan'

import Admin from './pages/admin/DashboardAdmin'
import Doctor from './pages/doctor/DashboardDoctor'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import {CommentProvider} from './contexts/CommentContext'
import {DokterProvider} from './contexts/DokterContext'
import {InformasiProvider} from './contexts/InformasiContext'
import {OrderProvider} from './contexts/OrderContext'
import {UserProvider} from './contexts/UserContext'
import {AuthProvider} from './contexts/AuthContext'
import {PostProvider} from './contexts/PostContext'



function App() {
  

  return (
    <AuthProvider>
      <DokterProvider>
        <CommentProvider>
          <InformasiProvider>
            <OrderProvider>
              <UserProvider>
                <PostProvider>
                  <Router>
                    <Navbar />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/tentang-kami" element={<About />} />
                      <Route path="/informasi-terkini" element={<Info />} />
                      <Route path="/informasi-terkini/:id" element={<DetailInformasi />} />
                      <Route path="/konsultasi-sistem" element={<ConsulSys />} />
                      <Route path="/panggil-dokter" element={<ConsulDoc />} />
                      <Route path="/tanya-disini" element={<Question />} />
                      <Route path="/login-peternak" element={<PublicRoute><Login /></PublicRoute>} />
                      <Route path="/register-peternak" element={<PublicRoute><RegisterPeternak /></PublicRoute>} />
                      <Route path="/register-dokter" element={<PublicRoute><RegisterDokter /></PublicRoute>} />
                      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                      <Route path="/riwayat" element={<PrivateRoute><History /></PrivateRoute>} />
                      <Route path="/booking/:id" element={<PrivateRoute><Book /></PrivateRoute>} />
                      <Route path="/order/:id" element={<PrivateRoute><DetailOrder /></PrivateRoute>} />
                      <Route path="/diskusi/:id" element={<PrivateRoute><DetailPertanyaan /></PrivateRoute>} />
                      <Route path="/tambah-diskusi" element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
                      <Route path="/dokter" element={<PrivateRoute><Doctor /></PrivateRoute>} />
                      <Route path="/admin" element={<Admin />} />
                    </Routes>
                    <Footer />
                  </Router>
                </PostProvider>
              </UserProvider>
            </OrderProvider>
          </InformasiProvider>
        </CommentProvider>
      </DokterProvider>
    </AuthProvider>
  )
}

export default App
