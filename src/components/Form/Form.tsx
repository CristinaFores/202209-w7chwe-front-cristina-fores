import React, { useState } from "react";
import useUser, { UserCredencials } from "../../hooks/useUser";
import { FormStyled, FormField, ButtonStyled, FormActions } from "./FormStyled";

const Form = () => {
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

    setuser({ username: "", password: "" });
  };

  return (
    <>
      <FormStyled onSubmit={sendUsers}>
        <FormField>
          <label htmlFor="username">Nombre</label>
          <input
            id="username"
            type="text"
            placeholder="Introduce tu nombre"
            autoComplete="off"
            required
            onChange={handleInputChange}
          ></input>
        </FormField>
        <FormField>
          <label>Password</label>
          <input
            placeholder="Introducela contraseña"
            id="password"
            type="password"
            autoComplete="off"
            required
            name="password"
            onChange={handleInputChange}
          ></input>
        </FormField>
        <FormActions>
          <ButtonStyled onSubmit={sendUsers}>Entrar</ButtonStyled>
          <li>
            <a href="/">Registrarse</a>
          </li>
        </FormActions>
      </FormStyled>
    </>
  );
};

export default Form;
