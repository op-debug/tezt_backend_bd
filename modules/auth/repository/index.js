class AuthRepository {
    constructor({model}){
      this.model = model;;
    }
    
    async getLog(data){
      var jwt = require("jsonwebtoken");
      const config = require("../../../config/auth.js");
  
      return new Promise((resolve, reject) => {
      
        this.model.findOne({
            where: {
              username: data.username
            }
        })
          .then((document) =>{
            if (document=="" || (!document)) {
                resolve({status:200,error:true,data: "User Tidak Ditemukan."});
            }
            else{
              if (data.password != document.password){
                  resolve({status:200,error:true,data: "Password Salah."});
              }        
            }
            
            var token = jwt.sign({ id: document.username }, config.secret, {
              expiresIn: 86400 // 24 hours
            });
      
            resolve({status:200,error:false,data:{
                  user_data: document,
                  accessToken: token
                  }
            });
          })
          .catch((error) => reject(error))
      })
    }
  }
  
  module.exports = AuthRepository;