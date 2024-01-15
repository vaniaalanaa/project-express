import express from "express"
import { KelilingLingkaran, luasLingkaran } from "../controller/bangunDatar"
const app = express()

/** allow read a body */
app.use(express.json())

/** fungsi use() digunakan
 * untuk menerapkan sebuah fungsi pada object express. fungsi tersebut akan otomatis dijalankan
 * 
 */

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, KelilingLingkaran)

export default app