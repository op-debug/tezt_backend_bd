class AuthController {
    constructor({service}) {
      this.service = service;
      this.auth = this.auth.bind(this);
    }
  
    async auth(req, res) {
      const {status, data} = await this.service.getLogin(req.body);
      return res.status(status).json(data);
    }
  }
  
  module.exports = AuthController;