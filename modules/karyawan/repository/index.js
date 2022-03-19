class karyawanRepository {
  constructor({model_karyawan,model_jabatan,model_keluarga}){
    this.model_karyawan = model_karyawan;
    this.model_jabatan = model_jabatan;
    this.model_keluarga = model_keluarga;
  }

  async create(data) {
    return new Promise((resolve, reject) => {
      this.model_karyawan.create(data)
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async update(data) {
    return new Promise((resolve, reject) => {
      try{
        this.model_karyawan.update({
            nama: data.nama,
            id_jabatan: data.id_jabatan,
            alamat: data.alamat,
            jenis_kelamin: data.jenis_kelamin,
            agama: data.agama,
            tgl_bergabung: data.tgl_bergabung,
            },{
            where :{
                id_karyawan: data.id
            }
        })
          .then((document) => resolve(document))
          .catch((error) => reject(error))
        }
        catch(r){
            console.log(r)
        }
      })
  }

  async delete(data){
    return new Promise((resolve, reject) => {
      this.model_karyawan.destroy({
          where :{
            id_karyawan:data.id
          }
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }


  async gets() {
    return new Promise((resolve, reject) => {
      this.model_karyawan.hasOne(this.model_jabatan, {foreignKey: 'id_jabatan'})
      this.model_karyawan.hasMany(this.model_keluarga, {foreignKey: 'id_karyawan'})
      this.model_keluarga.belongsTo(this.model_karyawan, {foreignKey: 'id_karyawan'})
      this.model_karyawan.findAll({
        include: [{
          model: this.model_jabatan
        },{
          model: this.model_keluarga 
        }] 
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }

  async getOne(data) {
    return new Promise((resolve, reject) => {
      this.model_karyawan.hasOne(this.model_jabatan, {foreignKey: 'id_jabatan'})
      this.model_karyawan.hasMany(this.model_keluarga, {foreignKey: 'id_karyawan'})
      this.model_keluarga.belongsTo(this.model_karyawan, {foreignKey: 'id_karyawan'})
      this.model_karyawan.findOne({
          where:{
            id_karyawan:data.id
          },
          include: [{
            model: this.model_jabatan
          },{
            model: this.model_keluarga 
          }] 
      })
        .then((document) => resolve(document))
        .catch((error) => reject(error))
    })
  }
}

module.exports = karyawanRepository;