const connection = require("../../database/connection");
const bcrypt = require('bcryptjs');

class UserController {
  async store(request, response) {
    const { name, email, password } = request.body;

    const userExists = await connection("users")
    .where("email", email)
    .first();

    if (userExists) {
      return response.status(409).json({ error: "User already exist" });
    }

    const password_hash = await bcrypt.hash(password, 6);

    await connection("users").insert({
      name,
      email,
      password_hash,
    });

    return response.status(201).send({name, email});
  }

  async index(request, response) {
    const users = await connection('users')
    .select('*');

    return response.json(users);
  }

  async delete(request, response) {
    const {id} = request.params;
    
    const user = await connection('users').where('id', id).delete();
    
    return response.status(204).send();
  }
}

module.exports = new UserController();
