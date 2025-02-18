import 'dotenv/config'
import db from 'dat'

import registerUser from './registerUser.js'

await db.connect(process.env.MONGO_URL)

//TEST: 
// Datos de prueba para el registro
const name = 'Gandalf';
const username = 'greygandalf9';
const password = 'greygandalf';
const passwordRepeat = 'greygandalf';
const email = 'greygandalf9@themiddleearth.com';
const role = 'standard'; // Valor predeterminado
const dni = '12345678Z'; // Ejemplo de DNI válido
const surname1 = 'TheGrey';
const surname2 = ''; // Puede estar vacío
const biography = 'A wizard is never late, nor is he early. He arrives precisely when he means to.';
const country = 'Middle-Earth';
const province = 'Mordor';
const city = 'Gondor';
const postalCode = '12345';
const address1 = 'White Tree Avenue';
const address2 = 'Tower of Ecthelion';
const number = '1';
const flat = null; // Sin información de flat
const website = 'http://themiddleearth.com';
const creationStatus = 'true';


try {
    const result = await registerUser(name,
        email,
        username,
        password,
        passwordRepeat,
        role,
        dni,
        surname1,
        surname2,
        biography,
        country,
        province,
        city,
        postalCode,
        address1,
        address2,
        number,
        flat,
        website,
        creationStatus)

    console.log(result)

} catch (error) {
    console.error(error)
} finally {
    await db.disconnect()
}