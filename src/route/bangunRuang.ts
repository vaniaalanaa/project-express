import express from "express"
import { LuasPermukaanTabung, LuasPermukaanKubus, LuasPermukaanBalok, LuasPermukaanBola, VolumeTabung, VolumeKubus, VolumeBalok, VolumeBola } from "../controller/bangunRuang";
import { validateTabung } from "../middlewere/validateTabung";
import { validateKubus } from "../middlewere/validateKubus";
import { validateBalok } from "../middlewere/validateBalok";
import { validateBola } from "../middlewere/validateBola";
const app = express()
/** allow read a body */
app.use(express.json())
/** fungsi use() digunakan untuk menerapkan fungsi pada object express
 * fungsi tersebut otomatis dijalankan
  */
app.post(`/tabung/Volume`,validateTabung, VolumeTabung)
app.post(`/tabung/LuasPermukaan`,validateTabung, LuasPermukaanTabung)
app.post(`/balok/Volume`,validateKubus ,VolumeKubus)
app.post(`/balok/LuasPermukaan`,validateKubus ,LuasPermukaanKubus)
app.post(`/kubus/Volume`,validateKubus ,VolumeKubus)
app.post(`/kubus/LuasPermukaan`,validateKubus ,LuasPermukaanKubus)
app.post(`/bola/Volume,validateBola`,VolumeBola)
app.post(`/bola/LuasPermukaan`,validateBola,LuasPermukaanBola)

export default app 
