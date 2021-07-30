const jwt = require('jsonwebtoken')

const generateToken = (user) =>{
    return jwt.sign({
        _id: user._id
    }, 'somethingsecret', {
        expiresIn: '10d'
    })
}

const auth = (req, res, next) =>{
    const authorization = req.headers.authorization
    if(!authorization){
        return res.status(400).json({
        message: 'Access denied, please check your token!'
    })
    } else {
        const token = authorization.slice(7, authorization.length)
        jwt.verify(token, 'somethingsecret', (err, decode) =>{
            if (err) {
                res.status(401).send({message: 'Access denied,Invalid Token'})
            } else {
                req.user = decode
                next()

            }
        })    
        }
}

module.exports = { generateToken, auth }