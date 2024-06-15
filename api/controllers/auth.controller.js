import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"



export const register = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // HASH THE PASSWORD
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log(hashedPassword);
  
      // CREATE A NEW USER AND SAVE TO DB
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      console.log(newUser);
  
      res.status(201).json({ message: "User created successfully" });

    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to create user!" });
    }
  };

export const login = async(req,res)=>{
    const {username , password} = req.body;

    try {
    
        //check if the user exist :

        const user = await prisma.user.findUnique({
            where:{username:username}
        })

        if(!user){
            return res.status(401).json({message:'invalid Credentials'})
        }

        //check if the password is correct :

        const isPasswordValid = await bcrypt.compare(password , user.password);

        if(!isPasswordValid){
            return res.status(401).json({message:'invalid Credentials'})
        }

        //generate a token and send it to the user
        // res.setHeader("Set-Cookie" , "test=" +"myvalue").json("success")
 
         const age = 1000*60*60*24*7

        const token = jwt.sign({
            id:user.id,
        },process.env.JWT_SECRET_KEY , 
        {expiresIn:age}
    );

      
     const  {password:userpassword , ...userInfo}= user;

        res.
        cookie("token" , token,{
            httpOnly:true,
            // secure:true
            maxAge:age,

        })
        .status(200)
        .json(userInfo)

        
    } catch (err) {
        console.log(err);
      res.status(500).json({message:"failed to login"} );
        
    };
    
} 

export const logout = (req,res)=>{
    res.clearCookie("token").json({message:"Logout Successfullyy"})
} 