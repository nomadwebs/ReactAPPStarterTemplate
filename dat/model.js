import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose

//Model for users master data
const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        maxLength: 255,
    },
    role: {
        type: String,
        required: false, //WILL BE TRUE
        enum: ['standard', 'provider'],
        default: 'standard'
    },
    dni: {
        type: String,
        required: false,
        maxLength: 9,
        match: /^[0-9]{8}[A-Z]$/ // Valida el formato del DNI
    },
    name: {
        type: String,
        required: false,
        maxLength: 50
    },
    surname1: {
        type: String,
        required: false,
        maxLength: 50
    },
    surname2: {
        type: String,
        required: false,
        maxLength: 50
    },
    biography: {
        type: String,
        required: false,
        maxLength: 1000
    },
    country: {
        type: String,
        required: false,
        maxLength: 50,
    },
    province: {
        type: String,
        required: false,
        maxLength: 50,
    },
    city: {
        type: String,
        required: false,
        maxLength: 50,
    },
    postalCode: {
        type: String,
        required: false,
        maxLength: 10
    },
    address1: {
        type: String,
        required: false,
        maxLength: 255,
    },
    address2: {
        type: String,
        required: false,
        maxLength: 255,
    },
    number: {
        type: String,
        required: false,
        maxLength: 3
    },
    flat: {
        type: Number,
        required: false,
        maxLength: 3
    },
    website: {
        type: String,
        required: false,
        maxLength: 255
    },
    creationStatus: {
        type: String,
        required: true,
        enum: ['true', 'false', 'confirm account'],
        default: 'true'
    },
    profileImage: {
        type: String,
        required: false,
        default: '',
        maxLength: 512,
    }
}, { versionKey: false })


const User = model('User', user)


export {
    User,
}