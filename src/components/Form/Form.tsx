import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { UserCredencials } from "../../types/types";

import { FormStyled, FormField, ButtonStyled, FormActions } from "./FormStyled";

const Form = (): JSX.Element => {
  const { login } = useUser();

  const initialUser = {
    username: "",
    password: "",
  };

  const [user, setuser] = useState(initialUser);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setuser({
      ...user,
      [event.target.id]: event.target.value,
    });
  };

  const sendUsers = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const userLogin: UserCredencials = {
      username: user.username,
      password: user.password,
    };
    await login(userLogin);
  };

  return (
    <>
      <FormStyled onSubmit={sendUsers}>
        <FormField>
          <label htmlFor="username">
            Nombre
            <input
              id="username"
              type="text"
              placeholder="Introduce tu nombre"
              autoComplete="off"
              required
              onChange={handleInputChange}
            ></input>
          </label>
        </FormField>
        <FormField>
          <label htmlFor="password">
            Password
            <input
              placeholder="Introducela contraseña"
              id="password"
              type="password"
              autoComplete="off"
              required
              name="password"
              onChange={handleInputChange}
            ></input>
          </label>
        </FormField>
        <FormActions>
          <ButtonStyled onSubmit={sendUsers}>Entrar</ButtonStyled>
          <li>
            <span>¿No tienes una cuenta?</span>
            <Link to="/register"> Regístrate</Link>
          </li>
        </FormActions>
      </FormStyled>
    </>
  );
};

export default Form;
