import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import Home from "./pages/HomePage/HomePage";
import Deposit from "./pages/TransationPage/DepositPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserProvider from "./contexts/userContexts";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-transacao/:tipo" element={<Deposit />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
