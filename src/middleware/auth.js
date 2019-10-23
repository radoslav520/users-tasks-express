const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req,res,next) =>{

    try {
        const token =  req.header('Authorization').replace('Bearer ','')
        const decode = jwt.verify(token,process.env.JWT_SECRET); //return user with that token
        const user = await User.findOne({_id:decode._id,"tokens.token":token}) // pronalazi usera sa tim id, i proverava da li u token listi od usera postoji taj token
        
        if(!user){
            throw new Error();
        }

        req.token = token;
        req.user = user;

        

    next();
        
    } catch (error) {
        res.status(401).send("Please Authorizate")
    }
    
    
}

module.exports = auth;