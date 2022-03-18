const AuthController = require("./controller");
const AuthModel = require("./model");
const AuthRepository = require("./repository");
const AuthService = require("./service");


const authRepository = new AuthRepository({model: AuthModel});
const authService = new AuthService({repository: authRepository});
const authController = new AuthController({service: authService});

module.exports = {
  authController,
};