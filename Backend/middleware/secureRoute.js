import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message: "Not authorized "});

        }
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        if(!verified){
            return res.status(403).json({ message: "Invalid token"});

        }
        const user = await User.findById(verified.userId).select("-password");
        if(!user){
            return res.status(404).json({message: "User not found "});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
            res.status(501).json({message: "Internal server error" });
        
    }
};

export default secureRoute;



// ts a middleware use for security purpose