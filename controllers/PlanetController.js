const Planet = require('../models/Planet');
module.exports = {
  async store(req, res) {
    const { name, position } = req.body;

    const planet = await Planet.create({ name, position });

    return res.json(planet);
  },

  async index(req, res) {
    const planets = await Planet.findAll();

    return res.json(planets);
  },

  async put(req, res) {
    const { name, position } = req.body;

    await Planet.update(
      { name, position },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const resultado = await Planet.findByPk(req.params.id);

    return res.json(resultado);
  },

  async findOne(req, res) {
    const planet = await Planet.findByPk(req.params.id);

    if (planet == null) {
      return res.status(404).send('Planet not found');
    }

    return res.json(planet);
  },

  async delete(req, res) {
    await Planet.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json('Planeta excluído com sucesso!');
  },
};
