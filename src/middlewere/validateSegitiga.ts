import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/** create validation schema */
let schema = Joi.object({
    a: Joi.number().required().min(1),
    t: Joi.number().required().min(1),

})

/** create a validation function */
let validateSegitiga = (request: Request, response: Response, next: NextFunction) => {
    let { error } = schema.validate(request.body)
    if(error){
        /** status 400 = BAD REQUEST */
         return response.status(400).json({
            message: error.details
         })
    }
    next()
}

export { validateSegitiga}