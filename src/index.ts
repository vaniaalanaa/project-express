/** ini adalah file utama
 * dimana ada proses menjalankan server backend
 */

/**memanggil library express dulu */
import express, { Request, Response } from "express"
import { validateBalok } from "./middlewere/validateBalok"
import routeBangunDatar from "./route/bangunDatar"
import routeBangunRuang from "./route/bangunRuang"


/** buat wadah untuk inisiasi express nya */
const app = express()

/** mendefinisikan PORT berjalannya server */
const PORT = 8000

/** allow to read JSON as request */
app.use(express.json())

/** proses pertama untuk handle request */
app.get(`/serena`, (request: Request, response: Response) => {
  /**
   * ini adalah proses handle request dengan 
   * url/addres: http://localhost:8000/serena
   * method: GET
   */
  /*
  /**memberi response */
  return response.status(200).json({
    message: `Hello Serena anaknya Bu Siana`
  })
})
/** read a query request */
app.get(`/moklet`,(request: Request, response: Response) => {
  /**asumsikan data yang dikirim
   * adalah nama dan umur
   */
  let nama: any= request.query.nama?.toString()
  let umur: any= request.query.umur?.toString()

  let message: string = `My name is ${nama} and i'm ${umur} years old`
  return response.status(200).json(message)
})

/** read data request from parameter */
app.get(`/telkom/:nama/:gender`,(request: Request, response: Response) => {
  let nama: string =  request.params.nama
  let gender: string =  request.params.gender
  let message: string = `My name is ${nama} and i'm ${gender}`
  return response.status(200).json(message)
})

/** read a request from body */
app.post(`/moklet`,(request: Request, response: Response) => {
/** asumsikan data yang dikirim adalah
 * panjang dan lebar
 */
let panjang: number = request.body.panjang
let lebar: number = request.body.lebar

let luasPersegiPanjang: number = panjang * lebar
let message = `Luas persegi panjang adalah ${luasPersegiPanjang}`
return response.status(200).json(message)
})

/** buatlah sebuah request untuk mengonversi
 * suhu celcius ke fahrenheit, kelvin, dan reamur 
 * menggunakan request parameter
 * exp: http://localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * response data ->
 * {
 * reamur: ?, fahrenheit: ? kelvin: ?
 * }
 */

/** create request for count volume of long cube */
app.post(`/balok`, validateBalok,
 (request: Request, response: Response) => {
   /** read panjang, lebar, tinggi */
   let panjang: number = Number(request.body.panjang)
   let lebar: number = Number(request.body.lebar)
   let tinggi: number = Number(request.body.tinggi)

   let volume: number = panjang * lebar * tinggi
   return response.status(200).json({
    panjang, lebar, tinggi, volume
   })
})

/** register route of bangun datar */
app.use(routeBangunDatar)
app.use(routeBangunRuang)




/** run server */
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
})