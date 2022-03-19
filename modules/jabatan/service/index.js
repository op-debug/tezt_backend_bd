class jabatanService {
  constructor({repository}) {
    this.repository = repository;
  }

  async createOrError(data) {
    if (!data.nama) return {status:200,data:{status:200,error:true,data:"Nama Jabatan Belum Diisi"}};
    try{
      const Created = await this.repository.create(data)
      return { status: 201, data: {
        status:200,
        error: false,
        data:'Jabatan Created' }};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:error}}
    }
  }

  async update(data) {
    if (!data.nama) return {status:200,data:{status:200,error:true,data:"Nama Jabatan Belum Diisi"}};
    try{
      const Updated = await this.repository.update(data)
      return { status: 201, data: {
        status:200,
        error: false,
        data:'Jabatan Updated' }};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:error}}
    }
  }

  async delete(data) {
    if (!data.id) return {status:200,data:{status:200,error:true,data:"ID Not Found!"}};
    try{
      const Deleted = await this.repository.delete(data)
      return { status: 201, data: {
        status:200,
        error: false,
        data:'Jabatan Deleted' }};
    }catch(error) {
      return { status: 500, data: {status:500,error:true,data:error}}
    }
  }

  async getAllAsList(data) {
    const jabatan = await this.repository.gets();
    return { status: 200, data: {
      status:200,
      error:false,
      data:jabatan
      }
    }
  }

  async getOneAsList(data) {
    const jabatan = await this.repository.getOne(data);
    return { status: 200, data: {
      status:200,
      error:false,
      data:jabatan
      }
    }

  }
  
}

module.exports = jabatanService;