import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 0 auto;
  width: 300px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(40px);
  border: 1.5px solid rgba(209, 213, 219, 0.3);
  gap: 1rem;
  border-radius: 10px;
  font-size: 1rem;

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

  a:hover::before {
    bottom: 0;
    height: 100%;
  }

  a ::before {
    content: "";
    background-color: hsla(196, 61%, 58%, 0.75);
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 8px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
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
