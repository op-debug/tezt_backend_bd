class keluargaRepository {
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
          nama: data.nama,
          pekerjaan:data.pekerjaan,
          hubungan:data.hubungan,
          },{
          where :{
              id_keluarga: data.id
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
            id_keluarga:data.id
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
            id_keluarga:data.id
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
}

module.exports = keluargaRepository;