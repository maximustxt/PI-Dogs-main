const Validation = (Form, ErrorX) => {
  const Error = { ...ErrorX }; // esto va a ser el estado error , mejor dicho una copia de ese estado error..

  //? -----------------------------------------------Validacion del Nombre:

  if (Form.name.length === 0) {
    Error.name = "You must write a name for your dog.";
  } else {
    if (Form.name.length !== 0) {
      Error.name = "";
    }

    const Array = Form.name.split("");
    for (let i = 0; i < Array.length; i++) {
      if (isNaN(Array[i])) {
        Error.name = "";
      } else {
        Error.name = "You should not enter numbers, only text..";
      }
    }

    if (typeof Form.name !== "string") {
      Error.name =
        "You must enter a string.. other types of data are not accepted..";
    }

    if (Form.name[0] !== Form.name[0].toUpperCase()) {
      console.log(Form.name[0].toUpperCase());
      Error.name = "You must enter a name with the first letter capitalized...";
    }
    if (Form.name.slice(1) !== Form.name.slice(1).toLowerCase()) {
      console.log(Form.name.slice(1).toLowerCase());
      Error.name =
        "You must write a name that begins with a capital letter and the rest with lower case.";
    }
  }

  //? -----------------------------------------------validacion De Los Años De Vida:

  if (!Form.life_span.length) Error.life_span = "You must enter a number...";
  else {
    Error.life_span = "";

    if (Form.life_span.length > 2) {
      Error.life_span = "The years of life must not exceed 3 digits.";
    }

    if (Form.life_span == 0) {
      Error.life_span = "Years of life cannot be 0.";
    }

    if (Form.life_span < 0) {
      Error.life_span = "Life expectancy should not be a negative number.";
    }
  }

  //? ------------------------------------------ validacion De la imagen:

  if (!Form.image.length) {
    // Si no hay nada escrito tirar error
    Error.image = "You must enter a URL...";
  } else if (Form.image.length > 255) {
    // Si el texto supera los 255 caracteres , tirar error.
    Error.image = "The length must not exceed 255 characters.";
  } else {
    // De lo contrario comprobar que la url sea una url , sino tirar un error.
    const ValidationURL =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if (!ValidationURL.test(Form.image)) {
      Error.image = "The image URL is invalid";
    } else {
      Error.image = "";
    }
  }

  return Error;
};

//?----------------------------- heightM && weight -------------------------------//

const ErrorHeingth = (heightMin, heightMax) => {
  if (Number(heightMin) > Number(heightMax)) {
    return "The minimum height must not be greater than the maximum.";
  }

  if (Number(heightMin) === Number(heightMax)) {
    return "The minimum height must not be equal to the maximum.";
  }

  if (Number(heightMin) === 0 || Number(heightMax) === 0) {
    return "Height cannot be zero.";
  }

  if (Number(heightMin) < 0 || Number(heightMax) < 0) {
    return "The height must not be a negative number.";
  }
};

const Errorweight = (weightMin, weightMax) => {
  if (Number(weightMin) > Number(weightMax)) {
    return "The minimum weight should not be greater than the maximum.";
  }

  if (Number(weightMin) === Number(weightMax)) {
    return "The minimum weight must not be equal to the maximum.";
  }

  if (Number(weightMin) === 0 || Number(weightMax) === 0) {
    return "Weight must not be zero";
  }

  if (Number(weightMin) < 0 || Number(weightMax) < 0) {
    return "The weight must not be a negative number.";
  }
};
export { Validation, ErrorHeingth, Errorweight };
