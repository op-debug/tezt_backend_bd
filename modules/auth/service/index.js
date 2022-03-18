class AuthService {
    constructor({repository}) {
      this.repository = repository;
    }  
  
    async getLogin(data){
      if (!data.username) return {status:200,data:{status:200,error:true,data:"username belum diisi"}};
      if (!data.password) return {status:200,data:{status:200,error:true,data:"password belum diisi"}};
      const login = await this.repository.getLog(data);
      return {status:200, data: login}
    }
  }
  module.exports = AuthService;