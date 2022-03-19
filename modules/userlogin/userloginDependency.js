const UserloginController = require("./controller");
const UserloginModel = require("./model");
const UserloginRepository = require("./repository");
const UserloginService = require("./service");


const userloginRepository = new UserloginRepository({model: UserloginModel});
const userloginService = new UserloginService({repository: userloginRepository});
const userloginController = new UserloginController({service: userloginService});

module.exports = {
  userloginController,
  userloginService,
  userloginRepository
};