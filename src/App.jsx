import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'

// components
import Header from './components/Header/Header'
import HorizontalLayout from './components/Layout/HorizontalLayout'
import Sidebar from './components/Nav/Sidebar'

// pages
import Home from './pages/Home/Home'
import AddBooking from './pages/AddBooking/AddBooking'
import CheckBooking from './pages/CheckRoom/CheckRoom'

// utils & constants
import { MAIN_HEADER_TITLE_TEXT } from './utils/constants'
import { fetchRoomsData, fetchBookingsData } from './store/services'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchRoomsData(dispatch)
    fetchBookingsData(dispatch)
  }, [dispatch])

  return (
    <div className='app-container'>
      <Header title={MAIN_HEADER_TITLE_TEXT} />
      <HorizontalLayout sidebar={<Sidebar />}>
        <Routes>
          <Route path='/addBooking' element={<AddBooking />} />
          <Route path='/checkRoom' element={<CheckBooking />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </HorizontalLayout>
    </div>
  )
}

export default App
