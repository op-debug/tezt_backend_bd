class userloginService {
  constructor({repository}) {
    this.repository = repository;
  }

  async createOrError(data) {
    if (!data.username) return {status:200,data:{status:200,error:true,data:"Username Belum Diisi"}};
    if (!data.password) return {status:200,data:{status:200,error:true,data:"Password Belum Diisi"}};
    try{
      const Created = await this.repository.create(data)
      return { status: 201, data: {
        status:200,
        error: false,
        data:'User Login Created' }};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:error}}
    }
  }

  async update(data) {
    if (!data.username) return {status:200,data:{status:200,error:true,data:"Username Belum Diisi"}};
    if (!data.password) return {status:200,data:{status:200,error:true,data:"Password Belum Diisi"}};
    try{
      const Updated = await this.repository.update(data)
      return { status: 201, data: {
        status:200,
        error: false,
        data:'User Login Updated' }};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:error}}
    }
  }

  async delete(data) {
    if (!data.id_karyawan) return {status:200,data:{status:200,error:true,data:"ID Karyawan Not Found!"}};
    try{
      const Deleted = await this.repository.delete(data)
      return { status: 201, data: {
        status:200,
        error: false,
        data:'User Login Deleted' }};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:error}}
    }
  }

  async getAllAsList(data) {
    const userlogin = await this.repository.gets();
    return { status: 200, data: {
      status:200,
      error:false,
      data:userlogin
      }
    }
  }

  async getOneAsList(data) {
    const userlogin = await this.repository.getOne(data);
    return { status: 200, data: {
      status:200,
      error:false,
      data:userlogin
      }
    }

  }
  
}

module.exports = userloginService;