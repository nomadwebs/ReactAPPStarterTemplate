import {
    registerUser,
    isUserLoggedIn,
    loginUser,
    logoutUser,
    getUserId,
    getUserName,
    getUserDetails,
    updateUser,
} from './users'


import {
    getDecimalToTimeFormat,
    getTimeFormatFromDecimal,
    getProfileImage,
} from './helpers'


const logic = {
    //Users
    registerUser,
    isUserLoggedIn,
    loginUser,
    logoutUser,
    getUserId,
    getUserName,
    getUserDetails,
    updateUser,


    //Helpers
    getDecimalToTimeFormat,
    getTimeFormatFromDecimal,
    getProfileImage,
}

export default logic