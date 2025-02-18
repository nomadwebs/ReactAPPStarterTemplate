import 'dotenv/config'
import db from 'dat'

import getUserDetails from './getUserDetails.js'
await db.connect(process.env.MONGO_URL)

try {
    const result = await getUserDetails('67b4a37b160ed96ba36571c1', '67b4a37b160ed96ba36571c1')
    console.log(result)
} catch (error) {
    console.error(error)

} finally {
    await db.disconnect()
}