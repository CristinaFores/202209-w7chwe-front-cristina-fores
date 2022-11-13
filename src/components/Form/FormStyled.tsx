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
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(209, 213, 219, 0.3);
  gap: 1rem;
  border-radius: 10px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
`;
export const ButtonStyled = styled.button`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background: #f48db4;
  :hover,
  :focus {
    background: white;
    color: #f48db4;
  }
`;
