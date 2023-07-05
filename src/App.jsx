import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage"
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
