import {Request, Response} from "express"

const VolumeTabung = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const r: number = Number(request.body.p)
      const t: number = Number(request.body.l)
      const volume =  phi * r * r * t
        return response.status(200)
        .json({
            status: true,
            r,
            t,
            volume
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const LuasPermukaanTabung = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const r: number = Number(request.body.p)
      const t: number = Number(request.body.l)
      const LuasPermukaan =  (2 * phi * r * t) + (2 * phi * r * t)
        return response.status(200)
        .json({
            status: true,
            r,
            t,
            LuasPermukaan
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const VolumeKubus = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const s: number = Number(request.body.s)
      const volume = s * s * s
        return response.status(200)
        .json({
            status: true,
            s,
            volume,
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const LuasPermukaanKubus = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const r: number = Number(request.body.p)
      const LuasPermukaan = 6 * r * r
        return response.status(200)
        .json({
            status: true,
            r,
            LuasPermukaan
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const VolumeBalok = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const p: number = Number(request.body.p)
      const l: number = Number(request.body.l)
      const t: number = Number(request.body.t)
      const volume= p * l * t
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t,
            volume
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const LuasPermukaanBalok = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const p: number = Number(request.body.p)
      const l: number = Number(request.body.l)
      const t: number = Number(request.body.t)
      const LuasPermukaan= ( 2 * (p * l) + ( p * t) + ( l * t) )
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t,
            LuasPermukaan
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const VolumeBola = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const volume= (4/3) * phi * phi * phi
        return response.status(200)
        .json({
            status: true,
            phi,
            volume
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

const LuasPermukaanBola = (request: Request, response: Response) => {
    try {
      const phi = Math.PI
      const r: number = Number(request.body.p)
      const LuasPermukaan= 4 * phi * r * r
        return response.status(200)
        .json({
            status: true,
            phi,
            r,
            LuasPermukaan
        })
    } catch (error){
        return response.status(500)
    .json({
        status: false,
        message: error
    })
    }
}

export { VolumeTabung, LuasPermukaanTabung, VolumeKubus, LuasPermukaanKubus, VolumeBalok, LuasPermukaanBalok, VolumeBola, LuasPermukaanBola}
