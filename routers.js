const { AuthRouter } = require("./modules/auth/route");
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
  app.use(routeErrorHandler);
}