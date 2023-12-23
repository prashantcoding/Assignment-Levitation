const jwt = require('jsonwebtoken');

const verifyTokenMiddleware = (req, res, next) => {
    // Check if the token is present in the request body
  
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token is missing' });
    }

    
    jwt.verify(token,process.env.JWT_SECRET , (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        
        console.log("decoded details",decoded);
        const userId=decoded.userId;
        req.body={...req.body,userId}

        
        next();
    });
};

module.exports = verifyTokenMiddleware;