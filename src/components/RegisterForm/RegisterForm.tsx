import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser, { UserCredencials } from "../../hooks/useUser";
import {
  ButtonStyled,
  FormActions,
  FormField,
  FormStyled,
} from "../Form/FormStyled";

const RegisterForm = (): JSX.Element => {
  const { register } = useUser();
  const navigate = useNavigate();

  const intialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const sendUsers = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredencials = {
      username: formData.username,
      password: formData.password,
    };

    const userRegistered = await register(formDataToSubmit);
    if (userRegistered) {
      navigate("/home");
    }
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
          <label>
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
        </FormActions>
      </FormStyled>
    </>
  );
};

export default RegisterForm;
