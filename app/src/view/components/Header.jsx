import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import useContext from '../useContext'
import logic from '../../logic'

export default function Header({ onHomeClick, onLoggedOut, onViewProfile, onTrackerClick, onManagePacksClick, onManageCustomersClick }) {
    const [name, setName] = useState(null)
    const [userDetails, setUserDetails] = useState(null)
    const location = useLocation()
    const { alert, confirm } = useContext()


    useEffect(() => {

        if (logic.isUserLoggedIn() && !name) {
            if (!name) {
                try {
                    logic.getUserDetails()
                        .then(setUserDetails)

                        .catch(error => {
                            alert(error.error)
                            console.error(error)
                        })
                } catch (error) {
                    alert(error.error)
                    console.error(error)
                }

            }
        } else {
            setName(null)
        }
    }, [location.pathname])


    //Navigate to home event
    const handleHomeClick = event => {
        event.preventDefault()
        onHomeClick()
    }

    //Handle to logout aplication
    const handleLogout = event => {
        event.preventDefault()
        confirm('Are you sure you want to logout?', accepted => {
            if (accepted) {
                logic.logoutUser()
                setUserDetails(null)
                onLoggedOut()
                localStorage.removeItem('token')
            }
        }, 'warn')
    }

    const handleProfileClick = event => {
        event.preventDefault()
        onViewProfile()
    }



    const profileImageUrl = logic.getProfileImage(userDetails)

    return <header className="bg-blue-950 text-white p-4 flex justify-between items-center h-28">
        <h1 className="text-4xl font-bold">{location.pathname !== '/' ? <a href="" onClick={handleHomeClick}>React Template</a> : 'React Template'}</h1>

        {<nav className="hidden sm:flex mx-6 space-x-6">
            {logic.isUserLoggedIn() && (
                <>
                    <a href="#" className="hover:underline" /* onClick={handleManagePacks} */>Menu 1</a>
                    <a href="#" className="hover:underline" /* onClick={handleManageCustomers} */>Menu 2</a>
                </>
            )}
        </nav>}

        <div className='flex justify-between'>

            {logic.isUserLoggedIn() && (
                <div className="relative group">
                    <img
                        src={profileImageUrl}
                        alt="User profile"
                        className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                    />
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleProfileClick}>👤 User profile</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>👋 Logout</a>
                    </div>
                </div>
            )}
        </div>
    </header>
}