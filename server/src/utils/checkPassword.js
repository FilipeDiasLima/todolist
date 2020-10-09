const bcrypt = require('bcryptjs');

async function checkPassword(password, hash_password){
  return await bcrypt.compare(password, hash_password);
}

module.exports = checkPassword;