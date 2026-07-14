const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {

    try {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    const decode= jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Unauthorized",
        });
        
    }
    
    
};