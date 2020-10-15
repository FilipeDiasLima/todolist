const connection = require("../../database/connection");
const checkPassword = require("../../utils/checkPassword");
const jwt = require('jsonwebtoken');
const authConfig = require("../config/authConfig");

class SessionController{
  async store(request, response){
    const {email, password} = request.body;

    const user = await connection('users')
    .where('email', email)
    .select('*')
    .first();

    if(!user){
      return response.status(401).json({ error: 'User not found.' });
    }

    if(! (await checkPassword(password, user.password_hash)) ){
      return response.status(401).json({ error: 'Password does not match.' });
    }
    const {id, name} = user;

    return response.json({
       user: {
         id,
         name,
         email,
       },
       token: jwt.sign({id}, authConfig.secret, {
         expiresIn: authConfig.expireIn,
       })
    })
  }
}

module.exports = new SessionController();