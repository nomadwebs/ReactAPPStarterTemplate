import { connect, disconnect } from 'mongoose'

import { User } from './model.js'

import './boost-mongoose.js'

const db = {
    connect,
    disconnect
}

export default db

export {
    User,
}