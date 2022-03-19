const { karyawanController } = require('../karyawanDependency');

const router = require('express').Router();

router.route('/').get(karyawanController.getAll)
router.route('/create').post(karyawanController.create)
router.route('/getdatabyid').post(karyawanController.getOne)
router.route('/update').put(karyawanController.update)
router.route('/delete').delete(karyawanController.delete)


module.exports.KaryawanRouter = router;