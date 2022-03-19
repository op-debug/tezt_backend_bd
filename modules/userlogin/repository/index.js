class userloginRepository {
  constructor({model}){
    this.model = model;
  }

  async create(data) {
    return new Promise((resolve, reject) => {
      this.model.create(data)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async update(data) {
    return new Promise((resolve, reject) => {
      this.model.update({
          username: data.username,
          password: data.password,
          },{
          where :{
              id_karyawan: data.id_karyawan
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async delete(data){
    return new Promise((resolve, reject) => {
      this.model.destroy({
          where :{
            id_karyawan : data.id_karyawan
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }


  async gets() {
    return new Promise((resolve, reject) => {
      this.model.findAll()
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async getOne(data) {
    return new Promise((resolve, reject) => {
      this.model.findOne({
          where:{
            id_karyawan:data.id_karyawan
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
}

module.exports = userloginRepository;