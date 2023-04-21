const Validation = (Form, ErrorX) => {
  const Error = { ...ErrorX }; // esto va a ser el estado error , mejor dicho una copia de ese estado error..

  //Validacion del Nombre:
  if (Form.name.length === 0) {
    Error.name = "Debes escribir un nombre para tu perro..";
  } else {
    if (Form.name.length !== 0) {
      Error.name = "";
    }

    const Array = Form.name.split("");
    for (let i = 0; i < Array.length; i++) {
      if (isNaN(Array[i])) {
        Error.name = "";
      } else {
        Error.name = "No debes ingresar numeros , solo texto...";
      }
    }

    if (typeof Form.name !== "string") {
      Error.name =
        "Debes ingresar un string.. no se haceptan otros tipos de datos..";
    }

    if (Form.name[0] !== Form.name[0].toUpperCase()) {
      console.log(Form.name[0].toUpperCase());
      Error.name =
        "Debes Ingresar un nombre con la primera letra en mayuscula...";
    }
    if (Form.name.slice(1) !== Form.name.slice(1).toLowerCase()) {
      console.log(Form.name.slice(1).toLowerCase());
      Error.name =
        "Debes escribir un nombre que empieze en mayuscula la primera letra y el resto en minuscula.. ";
    }
  }

  // -----------------------------------------------validacion De Los Años De Vida:

  if (Form.life_span.length === 0)
    Error.life_span = "Debes ingresar un numero...";
  else {
    Error.life_span = "";

    if (Form.life_span.length > 2) {
      Error.life_span = "Los años de vida no deben superar los 3 dijitos..";
    }

    if (Form.life_span < 0) {
      Error.life_span = "Los años de vida no pueden ser numeros negativos..";
    }
  }

  // ------------------------------------------ validacion De la imagen:

  if (Form.image.length === 0) {
    Error.image = "Debes ingresar una URL...";
  } else {
    Error.image = "";
    if (/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(Form.image)) {
      Error.image = "";
    } else {
      Error.image = "Debes colocar una URL de una imagen";
    }
    if (Form.image.length > 255) {
      Error.image = "La longitud no debe superar los 255 caracteres.";
    } else {
      Error.image = "";
    }
  }

  return Error;
};

//-----------------------------------------------------------------------------------//

const ErrorHeingth = (heightMin, heightMax) => {
  if (Number(heightMin) > Number(heightMax)) {
    return "El alto minimo no debe ser Mayor al Maximo.";
  }
};

const Errorweight = (weightMin, weightMax) => {
  if (Number(weightMin) > Number(weightMax)) {
    return "El Peso minimo no debe ser Mayor al Maximo.";
  }
};
export { Validation, ErrorHeingth, Errorweight };
