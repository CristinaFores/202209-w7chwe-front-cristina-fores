import { AppStyled } from "./AppStyled";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <AppStyled>
        <Header />
        <Form />
      </AppStyled>
    </>
  );
}

export default App;
