const { AuthRouter } = require("./modules/auth/route");
const { JabatanRouter } = require("./modules/jabatan/route");
const { KaryawanRouter } = require("./modules/karyawan/route");
const { KeluargaRouter } = require("./modules/keluarga/route");
const { UserloginRouter } = require("./modules/userlogin/route");
const { authJwt } = require("./middleware");

const routeErrorHandler = (req, res, next) => {
  res.status(404).json({
    requestMethod: req.method,
    requestEndpoint: req.url
  });
  next();
}

module.exports.Route = (app) => {
  app.use('/auth',AuthRouter);
  app.use('/jabatan',[authJwt.verifyToken],JabatanRouter);
  app.use('/karyawan',[authJwt.verifyToken],KaryawanRouter);
  app.use('/keluarga',[authJwt.verifyToken],KeluargaRouter);
  app.use('/userlogin',[authJwt.verifyToken],UserloginRouter);
  app.use(routeErrorHandler);
}