import { useState } from 'react'

import logic from './logic'

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

import { Home, Login, UserProfile, Register } from './view'

import { Header, Footer, Alert, Confirm } from './view/components'

import { Context } from './view/useContext'

/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
/* import './styles.css' */

export default function App() {

  const [alert, setAlert] = useState({
    message: null,
    level: 'error'
  })

  const [confirm, setConfirm] = useState({
    message: null,
    level: 'error',
    callback: null
  })

  const navigate = useNavigate()

  //Navigation Functions

  const handleHomeClick = () => Navigate('/')

  const handleUserProfileClick = () => navigate('/user-profile')


  const handleUserLoggedOut = () => navigate('/login')

  const handleUserLoggedIn = () => navigate('/')

  const handleRegisterClick = () => navigate('/register')

  const handleLoginClick = () => navigate('/login')

  const handleUserRegistered = () => navigate('/login')

  //Functions to manage alerts and confirms
  const handleAlertAccepted = () => setAlert({
    message: null,
    level: 'error'
  })

  const handleConfirmAccepted = () => {
    confirm.callback(true)

    setConfirm({
      message: null,
      level: 'error',
      callback: null
    })
  }

  const handleConfirmCancelled = () => {
    confirm.callback(false)

    setConfirm({
      message: null,
      level: 'error',
      callback: null
    })
  }

  const handleNotfoundError = event => {
    event.preventDefault()
    handleHomeClick()
  }


  return (<Context.Provider value={{
    alert(message, level = 'error') { setAlert({ message, level }) },
    confirm(message, callback, level = 'error') { setConfirm({ message, callback, level }) }
  }}>

    <div className="flex flex-col min-h-screen">
      {location.pathname !== '/login' && (
        <Header onHomeClick={handleHomeClick} onLoggedOut={handleUserLoggedOut} onViewProfile={handleUserProfileClick} />
      )}
      <Routes>
        <Route path="/login" element={logic.isUserLoggedIn() ?
          <Navigate to="/" /> :
          <Login onLoggedIn={handleUserLoggedIn}
            onRegisterClick={handleRegisterClick} />} />

        <Route path="/register" element={logic.isUserLoggedIn() ?
          <Navigate to="/" /> :
          <Register onLoginClick={handleLoginClick}
            onRegistered={handleUserRegistered} />} />

        {/* Main view to initiate navigation everything */}
        <Route path="/" element={logic.isUserLoggedIn() ?
          <Home /> :
          <Navigate to="/login" />} />


        <Route path="/user-profile" element={logic.isUserLoggedIn() ?
          <UserProfile onProfileUpdated={handleHomeClick} onProfileCancel={handleHomeClick} /> :
          <Navigate to="/login" />} />


        <Route path="*" element={
          <div className="text-center">
            <h1 className="text-red-600 text-2xl font-bold">Error 404</h1>
            <p className="text-gray-700">This page does not exist or it was removed.</p>
            <p>
              You can try to{' '}
              <a href="#" className="text-blue-500 underline hover:text-blue-700" onClick={handleNotfoundError}>go home</a>
            </p>
          </div>
        } />
      </Routes>


      {alert.message && <Alert message={alert.message} level={alert.level} onAccepted={handleAlertAccepted} />}

      {confirm.message && <Confirm message={confirm.message} level={confirm.level} onAccepted={handleConfirmAccepted} onCancelled={handleConfirmCancelled} />}

      <Footer />
    </div>
  </Context.Provider>
  )
}


