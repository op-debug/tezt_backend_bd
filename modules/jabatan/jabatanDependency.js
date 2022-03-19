const JabatanController = require("./controller");
const JabatanModel = require("./model");
const JabatanRepository = require("./repository");
const JabatanService = require("./service");


const jabatanRepository = new JabatanRepository({model: JabatanModel});
const jabatanService = new JabatanService({repository: jabatanRepository});
const jabatanController = new JabatanController({service: jabatanService});

module.exports = {
  jabatanController,
  jabatanService,
  jabatanRepository
};