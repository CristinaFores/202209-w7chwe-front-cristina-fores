import { AppStyled } from "./AppStyled";
import Form from "../Form/Form";
import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";

function App() {
  return (
    <>
      <AppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </AppStyled>
    </>
  );
}

export default App;
