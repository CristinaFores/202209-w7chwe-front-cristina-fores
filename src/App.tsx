import { AppStyled } from "./AppStyled";
import Header from "./components/Header/Header";
import useUser from "./hooks/useUser";

function App() {
  const { login } = useUser();
  const user = {
    username: "cristina",
    password: "1234567891",
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
