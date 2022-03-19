const KaryawanController = require("./controller");
const KaryawanModel = require("./model");
const JabatanModel = require("../jabatan/model");
const KeluargaModel = require("../keluarga/model");
const KaryawanRepository = require("./repository");
const KaryawanService = require("./service");


const karyawanRepository = new KaryawanRepository({model_jabatan : JabatanModel,
                                                   model_karyawan : KaryawanModel,
                                                   model_keluarga : KeluargaModel
                                                  });
const karyawanService = new KaryawanService({repository: karyawanRepository});
const karyawanController = new KaryawanController({service: karyawanService});

module.exports = {
  karyawanController,
  karyawanService,
  karyawanRepository
};