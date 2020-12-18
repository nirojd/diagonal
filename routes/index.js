const elementscontroller = require("./../controllers").elements;

module.exports = (app) => {
  app.get("/api", (req, res) => {
    res.json({
      status: "success",
      message: "Move Element API",
      data: { version_number: "v1.0.0" },
    });
  });

  app.get("/api/elements", elementscontroller.index);
  app.post("/api/elements/move", elementscontroller.move);
};
