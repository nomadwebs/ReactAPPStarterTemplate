import errors from './errors.js'
const { ValidationError } = errors

const validateName = name => {
    if (typeof name !== 'string' || name === '') throw new ValidationError('invalid name')
    if (name.length < 2)
        throw new ValidationError('invalid name length')
}

const validateDescription = description => {
    if (typeof description !== 'string') throw new ValidationError('Invalid description: the value must be a string.')
    if (description.length > 255) {
        throw new ValidationError('Invalid description length: maximum allowed is 255 characters.');
    }
}

const validateBio = bio => {
    if (typeof bio !== 'string') throw new ValidationError('Invalid biography')
    if (bio.length > 1000) {
        throw new ValidationError('Biography max length exceded, max 1000 chars.');
    }
}

const validateDate = date => {
    if (!(date instanceof Date)) {
        throw new ValidationError('Invalid date: the value must be a valid Date object.');
    }
}

const validateInteger = num => {
    if (!Number.isInteger(num)) {
        throw new ValidationError('Units provided should be an integer')
    }
}

const validateNumber = num => {
    if (typeof num !== 'number' || !Number.isFinite(num)) {
        throw new ValidationError('Value provided should be a valid number')
    }
}

const validateEmail = email => {
    if (typeof email !== 'string') throw new ValidationError('invalid email')
    if (email.length > 254) throw new ValidationError('email is too long')
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))
        throw new ValidationError('invalid email')
}

const validateUrl = url => {
    if (typeof url !== 'string') throw new ValidationError('invalid url')
    if (url.length > 254) throw new ValidationError('url is too long')
    if (!/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/i.test(url))
        throw new ValidationError('invalid url')
}

const validateUsername = username => {
    if (typeof username !== 'string') throw new ValidationError('invalid username')
    if (username.length < 5 || username.length > 25)
        throw new ValidationError('Username should be between 4 to 25 chars')
}

const validatePassword = password => {
    if (typeof password !== 'string') throw new ValidationError('invalid password')
    if (password.length < 4)
        throw new ValidationError('invalid password length')
}

const validatePasswordsMatch = (password, passwordRepeat) => {
    if (typeof passwordRepeat !== 'string') throw new ValidationError('invalid password repeat')
    if (password !== passwordRepeat)
        throw new ValidationError('passwords do not match')
}

const validateImage = image => {
    if (typeof image !== 'string') throw new ValidationError('invalid image')
}

const validateText = (text, explain = 'text') => {
    if (typeof text !== 'string') throw new ValidationError(`invalid text ${explain}`)
}

const validateId = (id, explain = 'id') => {
    if (typeof id !== 'string') throw new ValidationError(`invalid ${explain}`)
    if (id.length !== 24) throw new ValidationError(`invalid ${explain} length`)
}

const validateCallback = callback => {
    if (typeof callback !== 'function') throw new ValidationError('invalid callback')
}

const validateDni = dni => {
    if (typeof dni !== 'string') throw new ValidationError('invalid dni')
    if (dni.length > 9) throw new ValidationError('dni is too long')
    if (!/^[0-9]{8}[A-Z]$/i.test(dni))
        throw new ValidationError('invalid dni')
}

const validateTimeFormat = time => {
    if (typeof time !== 'string') throw new ValidationError('invalid time, must be a string')
    if (!/^[-+]?([0-9]{2}):([0-5][0-9]):([0-5][0-9])$/i.test(time))
        throw new ValidationError('invalid time format (+/-)hh:mm:ss')
}

const validate = {
    name: validateName,
    description: validateDescription,
    email: validateEmail,
    username: validateUsername,
    password: validatePassword,
    passwordsMatch: validatePasswordsMatch,
    image: validateImage,
    text: validateText,
    id: validateId,
    callback: validateCallback,
    integerNum: validateInteger,
    number: validateNumber,
    date: validateDate,
    dni: validateDni,
    bio: validateBio,
    url: validateUrl,
    timeFormat: validateTimeFormat
}

export default validate