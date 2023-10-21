import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
// import {
//   DetailPerros,
//   HomePage,
//   Nav,
//   CreateDogs,
//   InicioPag,
// } from "../components/index";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test("<CreateDogs /> ", () => {
//   render(<CreateDogs />);

//   const label1 = screen.getByLabelText(/Name/i); // busca todos los label del formulario que contengan el texto name y lo guarda en la variable..
//   const label2 = screen.getByLabelText(/Height/i);
//   const label3 = screen.getByLabelText(/Weight/i);
//   const label4 = screen.getByLabelText(/Life_span/i);
//   const label5 = screen.getByLabelText(/Image/i);
//   const ButonSubmit = screen.getByRole("button", { name: /Submit/i }); // busca en el formulario el elemento que contenga el texto submit , en este  caso es el boton..

//   expect(label1).screen.toBeInTheDocument(); // espera que el label se encuentre en el document..
//   expect(label2).screen.toBeInTheDocument(); // espera que el label se encuentre en el document..
//   expect(label3).screen.toBeInTheDocument(); // espera que el label se encuentre en el document..
//   expect(label4).screen.toBeInTheDocument(); // espera que el label se encuentre en el document..
//   expect(label5).screen.toBeInTheDocument(); // espera que el label se encuentre en el document..
//   expect(ButonSubmit).screen.toBeInTheDocument(); // espera que el boton se encuentre en el document..

//   screen.debug();
// });

// test("<Nav/>", () => {
//   render(<Nav />); // nos da acceso a lo que hay dentro del componente..
//   const LinkHome = screen.getByAltText(/Home/i);
//   const LinkCreateDog = screen.getByAltText(/CreateDog 🐩/i); // busca el que tiene este texto , si lo encuentra guarga el link dentro de la variable..

//   expect(LinkHome).screen.toBeInTheDocument();
//   expect(LinkCreateDog).screen.toBeInTheDocument();
// });
