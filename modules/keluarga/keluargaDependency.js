const KeluargaController = require("./controller");
const KeluargaModel = require("./model");
const KeluargaRepository = require("./repository");
const KeluargaService = require("./service");


const keluargaRepository = new KeluargaRepository({model: KeluargaModel});
const keluargaService = new KeluargaService({repository: keluargaRepository});
const keluargaController = new KeluargaController({service: keluargaService});

module.exports = {
  keluargaController,
  keluargaService,
  keluargaRepository
};