import bcrypt from 'bcryptjs'

import { User } from 'dat'

import { validate, errors } from 'com'

const { DuplicityError, SystemError } = errors

const assignRandomProfileImage = () => {
    const imageNumber = Math.floor(Math.random() * 12) + 1 //from 1 to 12
    return `/images/profile/profile${imageNumber}.jpeg`
}

export default (name, email, username, password, passwordRepeat) => {
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)
    validate.passwordsMatch(password, passwordRepeat)

    //In the register moment all users will be free
    const creationStatus = 'true'
    const role = 'standard'

    const dni = '', surname1 = '',
        surname2 = '', biography = '', country = '', province = '', city = '',
        postalCode = '', address1 = '', address2 = '', number = '', flat = '', website = ''


    return (async () => {
        let hash

        try {
            hash = await bcrypt.hash(password, 10)
        } catch (error) {
            throw new SystemError(error.message)
        }

        try {
            await User.create({
                name,
                email,
                username,
                password: hash,
                role,
                dni: dni || null,
                surname1: surname1 || null,
                surname2: surname2 || null,
                biography: biography || null,
                country: country || null,
                province: province || null,
                city: city || null,
                postalCode: postalCode || null,
                address1: address1 || null,
                address2: address2 || null,
                number: number || null,
                flat: flat || null,
                website: website || null,
                creationStatus,
                profileImage: assignRandomProfileImage(), //Create random profile image
            })

        } catch (error) {
            if (error.code === 11000) throw new DuplicityError('User already exists')
            throw new SystemError(error.message)
        }

    })()
}