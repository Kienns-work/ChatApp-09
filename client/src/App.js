import LoginPage from "./pages/Auth/LoginPage";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Register from "./pages/Auth/Register";
import Account from "./pages/Home/Account";

function App() {

  const { currentUser } = useContext(AuthContext);

  const CheckUserExist = ({ children }) => {
    if (!currentUser) { return <Navigate to="/login" /> };
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<CheckUserExist><HomePage /></CheckUserExist>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
