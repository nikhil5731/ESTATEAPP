import jwt from "jsonwebtoken"

export const shouldBeLoggedIn = async(req ,res) =>{

    
    res.status(200).json({message: "YOU ARE Authenticated"})

}

export const shouldBeAdmin = async(req,res) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: "Not Authenticated"})
    }

    jwt.verify(token ,process.env.JWT_SECRET_KEY , async(err ,payload) =>{

        if(err) return res.status(401).json({message: "TOKEN IS NOT VALID"})        
        if(!payload.isadmin){
            return res.status(403).json({message: "NOT AUTHORIZED"})

        }
    })

    res.status(200).json({message: "YOU ARE Authenticated"})



}