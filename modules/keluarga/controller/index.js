class keluargaController {
  constructor({service}) {
    this.service = service;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    const {status, data} = await this.service.createOrError(req.body);
    return res.status(status).json(data)
  }

  async getAll(req, res) {
    const {status, data} = await this.service.getAllAsList(req.body);
    return res.status(status).json(data);
  }

  async getOne(req, res) {
    const {status, data} = await this.service.getOneAsList(req.body);
    return res.status(status).json(data);
  }

  async update(req, res) {
    const {status, data} = await this.service.update(req.body);
    return res.status(status).json(data);
  }

  async delete(req, res) {
    const {status, data} = await this.service.delete(req.body);
    return res.status(status).json(data);
  }

}

module.exports = keluargaController;