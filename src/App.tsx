import React, { useEffect } from "react";
import { AppStyled } from "./AppStyled";
import Header from "./components/Header/Header";
import useUser from "./hooks/useUser";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { login } = useUser();
  const user = {
    username: "cristina",
    password: "1234567890",
  };

  login(user);
  return (
    <>
      <AppStyled>
        <Header />
      </AppStyled>
    </>
  );
}

export default App;
