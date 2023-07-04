import Login from "./pages/LoginPage/LoginPage.jsx";
import Register from "./pages/RegisterPage/RegisterPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
