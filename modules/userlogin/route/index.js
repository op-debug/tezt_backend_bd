const { userloginController } = require('../userloginDependency');

const router = require('express').Router();

router.route('/').get(userloginController.getAll)
router.route('/create').post(userloginController.create)
router.route('/getdatabyid').post(userloginController.getOne)
router.route('/update').put(userloginController.update)
router.route('/delete').delete(userloginController.delete)


module.exports.UserloginRouter = router;