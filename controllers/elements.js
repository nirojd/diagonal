const Element = require("../db/models").Element;

module.exports = {
  async index(req, res, next) {
    try {
      const elements = await Element.findAll({
        order: [["position", "ASC"]],
      });
      res.status(200).send(elements);
    } catch (err) {
      next(err);
    }
  },

  async move(req, res, next) {
    try {
      let { data, oldIndex, newIndex } = req.body;

      let f = data.splice(oldIndex, 1)[0];
      data.splice(newIndex, 0, f);

      await data.map((res, index) => {
        Element.update(
          { position: index + 1 },
          { where: { element_id: res.element_id } }
        );
      });
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  },
};
