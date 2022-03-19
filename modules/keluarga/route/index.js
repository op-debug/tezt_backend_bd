const { keluargaController } = require('../keluargaDependency');

const router = require('express').Router();

router.route('/').get(keluargaController.getAll)
router.route('/create').post(keluargaController.create)
router.route('/getdatabyid').post(keluargaController.getOne)
router.route('/update').put(keluargaController.update)
router.route('/delete').delete(keluargaController.delete)


module.exports.KeluargaRouter = router;