import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import Home from "./pages/HomePage/HomePage";
import Deposit from "./pages/TransationPage/DepositPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-transacao/:entrada" element={<Deposit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
