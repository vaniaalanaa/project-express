import express from "express"
import { LuasPermukaanTabung, LuasPermukaanKubus, LuasPermukaanBalok, LuasPermukaanBola, VolumeTabung, VolumeKubus, VolumeBalok, VolumeBola } from "../controller/bangunRuang";
const app = express()
/** allow read a body */
app.use(express.json())
/** fungsi use() digunakan untuk menerapkan fungsi pada object express
 * fungsi tersebut otomatis dijalankan
  */
app.post(/tabung/Volume, VolumeTabung)
app.post(/tabung/LuasPermukaan, LuasPermukaanTabung)
app.post(/balok/Volume, VolumeKubus)
app.post(/balok/LuasPermukaan, LuasPermukaanKubus)
app.post(/kubus/Volume, VolumeBalok)
app.post(/kubus/LuasPermukaan, LuasPermukaanBalok)
app.post(/bola/Volume, VolumeBola)
app.post(/bola/LuasPermukaan, LuasPermukaanBola)

export default app 
