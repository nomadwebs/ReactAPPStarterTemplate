import 'dotenv/config'
import db from 'dat'
import authenticateUser from './authenticateUser.js'

await db.connect(process.env.MONGO_URL)

const username = 'greygandalf9'
const password = 'greygandalf'

try {
    const user = await authenticateUser(username, password)
    console.log(user)

} catch (error) {
    console.error(error)

} finally {
    await db.disconnect()
}