import { Router, json } from "express"

import { authorizationHandler, jsonBodyParser } from "../helpers/index.js"
import {
    authenticateUserHandler,
    registerUserHandler,
    getUserNameHandler,
    getUserDetailsHandler,
    updateUserHandler,
} from "./handlers/index.js"

const usersRouter = Router()

usersRouter.post('/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.post('/register', jsonBodyParser, registerUserHandler)
usersRouter.get('/:targetUserId/name', authorizationHandler, getUserNameHandler)
usersRouter.get('/user/:targetUserId', authorizationHandler, getUserDetailsHandler)
usersRouter.put('/update/:targetUserId', authorizationHandler, jsonBodyParser, updateUserHandler)

export default usersRouter