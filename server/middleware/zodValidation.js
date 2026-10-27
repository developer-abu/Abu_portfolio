import { success } from "zod";
import { contactSchema } from "../zodValidation/zodSchema.js";
export const validateUserInput = (req,res,next)=>{

    const validate = contactSchema.safeParse(req.body)

    if(!validate.success){
     return   res.status(400).json({
            success:false,
            message:validate.error.issues[0].message
        })
    }

    next()
}