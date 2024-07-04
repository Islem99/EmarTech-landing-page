const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
    );
    next();
  });

  app.post("/api/auth/signup", controller.signup);

  app.post("/api/auth/signin", controller.signin);

  app.get(
    "/api/auth/protectedRoute",
    controller.isAuthenticated,
    (req, res) => {
      res.json({ message: "This is a protected route!" });
    },
  );

  app.post("/api/auth/forgotPassword", controller.forgotPassword);
  app.get("/api/auth/resetPassword", controller.resetPassword);
  app.post("/api/auth/resetPassword", controller.updatePassword);
};
