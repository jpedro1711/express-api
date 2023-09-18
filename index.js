(async () => {
  const Planet = require('./models/Planet');
  /*
  const newPlanet = await Planet.create({
    name: 'Terra',
    position: 3,
  });
*/

  const seePlanets = await Planet.findAll();

  //const terra = await Planet.findByPk(1);

  const terra = await Planet.findAll({
    where: {
      name: 'Terra',
    },
  });

  const updatePlanets = await Planet.findByPk(1);
  updatePlanets.name = 'Planeta Terra';
  await updatePlanets.save();

  const deletePlanets = await Planet.findByPk(1);

  console.log(deletePlanets);

  await deletePlanets.destroy();
})();
