import express from "express"
import { KelilingLingkaran, KelilingPersegi, KelilingPersegiPanjang, LuasPersegiPanjang, LuasSegitiga, luasLingkaran, luasPersegi } from "../controller/bangunDatar"
import { validateLingkaran } from "../middlewere/validateLingkaran"
import { validatePersegi } from "../middlewere/validatePersegi"
import { validatePersegiPanjang } from "../middlewere/validatePersegiPanjang"
import { validateSegitiga } from "../middlewere/validateSegitiga"
const app = express()

/** allow read a body */
app.use(express.json())

/** fungsi use() digunakan
 * untuk menerapkan sebuah fungsi pada object express. fungsi tersebut akan otomatis dijalankan
 * 
 */

app.post(`/lingkaran/luas`,validateLingkaran, luasLingkaran)
app.post(`/lingkaran/keliling`, validateLingkaran,KelilingLingkaran)
app.post(`/persegi/luas`,validatePersegi, luasPersegi)
app.post(`/persegi/keliling`, validatePersegi, KelilingPersegi)
app.post(`/persegi panjang/luas`,validatePersegiPanjang, LuasPersegiPanjang)
app.post(`/persegi panjang/keliling`, validatePersegiPanjang, KelilingPersegiPanjang)
app.post(`/segitiga/luas`,validateSegitiga, LuasSegitiga)


export default app