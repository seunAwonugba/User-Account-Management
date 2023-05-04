import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import EmailConfirmationSent from "./page/EmailConfirmationSent";
import { ToastContainer } from "react-toastify";
import EmailConfirmation from "./page/EmailConfirmation";
import ResetPassword from "./page/ResetPassword";
import ResetPasswordEmail from "./page/ResetPasswordEmail";

function App() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>

                    <Route
                        path="/email-confirmation-sent"
                        element={<EmailConfirmationSent />}
                    ></Route>
                    <Route
                        path="/email-confirmation"
                        element={<EmailConfirmation />}
                    ></Route>
                    <Route
                        path="/reset-password-email"
                        element={<ResetPasswordEmail />}
                    ></Route>
                    <Route
                        path="/reset-password"
                        element={<ResetPassword />}
                    ></Route>
                </Routes>
                <ToastContainer theme="dark" />
            </div>
        </>
    );
}

export default App;
