import styled from "styled-components";
import mainTheme from "../../styles/mainTheme";

export const FormStyled = styled.form`
  margin: 0 auto;
  width: 300px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  background: rgba(255, 255, 255, 0.282);
  -webkit-backdrop-filter: blur(200px);
  backdrop-filter: blur(200px);
  border: 1.5px solid rgba(209, 213, 219, 0.437);
  gap: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  color: ${mainTheme.backgroundColorPrimary};

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  input {
    border-radius: 5px;
    border: none;
    padding: 10px 10px;
  }
  a {
    background: linear-gradient(
        to right,
        rgba(243, 129, 129, 0.9),
        rgba(252, 227, 138, 0.9)
      ),
      linear-gradient(to right, #ffbf00, #e319f9, rgba(0, 100, 200, 1));
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }

  a:hover {
    background-size: 0 3px, 100% 3px;
  }

  @media (prefers-reduced-motion) {
    a {
      transition: none;
      background: linear-gradient(
        to right,
        rgba(243, 129, 129, 0.9),
        rgba(0, 100, 200, 1)
      );
      background-size: 100% 3px, 0 3px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
    }
    a:hover {
      background: linear-gradient(
        to right,
        rgba(243, 211, 129, 0.951),
        rgba(243, 129, 129, 0.9)
      );

      background-size: 100% 3px, 0 3px;
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
    }
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
`;
export const ButtonStyled = styled.button`
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background: #f48db4;
  width: 100%;
  :hover,
  :focus {
    background: white;
    color: #f48db4;
  }
`;
