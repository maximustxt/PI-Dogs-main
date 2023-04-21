const { Dog, Temperament } = require("../db");

const postDogs = async ({
  image,
  name,
  height,
  weight,
  life_span,
  temperament,
}) => {
  if (typeof height === "object") {
    const DeObjAStr = [];
    for (prop in height) {
      if (prop === "min") {
        DeObjAStr.push(height.min);
      } else {
        DeObjAStr.push(height.max);
      }
    }
    height = DeObjAStr.join(" - ");
  }

  if (typeof weight === "object") {
    const DeObjAStr = [];
    for (prop in weight) {
      if (prop === "min") {
        DeObjAStr.push(weight.min);
      } else {
        DeObjAStr.push(weight.max);
      }
    }
    weight = DeObjAStr.join(" - ");
  }

  if (typeof life_span === "number") {
    life_span = life_span.toString();
  }

  if (Array.isArray(temperament)) {
    temperament = temperament.toString();
  }

  const agregarDog = await Dog.create({
    image,
    name,
    height,
    weight,
    life_span,
  }); // aca  creamos al perro que queremos...
  const TemperamentDogs = await Temperament.create({
    name: temperament,
  }); // aca creamos el temperamento del perro...que queremos ponerle...
  console.log(TemperamentDogs);

  agregarDog.addTemperament(TemperamentDogs); // sequelize ya nos provee la posibilidad de poder asociar con un meto tanto un modelo como el otro...
  //esto une tanto la tabla dogs como la tabla temperament

  return agregarDog;
};

module.exports = postDogs;
