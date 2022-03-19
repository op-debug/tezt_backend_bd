const { jabatanController } = require('../jabatanDependency');

const router = require('express').Router();

router.route('/').get(jabatanController.getAll)
router.route('/create').post(jabatanController.create)
router.route('/getdatabyid').post(jabatanController.getOne)
router.route('/update').put(jabatanController.update)
router.route('/delete').delete(jabatanController.delete)


module.exports.JabatanRouter = router;