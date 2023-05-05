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
import ResetPasswordSent from "./page/ResetPasswordSent";
import PasswordResetSuccess from "./page/PasswordResetSuccess";
import Profile from "./page/Profile";

function App() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />

                    <Route
                        path="/email-confirmation-sent"
                        element={<EmailConfirmationSent />}
                    />
                    <Route
                        path="/email-confirmation"
                        element={<EmailConfirmation />}
                    />
                    <Route
                        path="/reset-password-email"
                        element={<ResetPasswordEmail />}
                    />
                    <Route
                        path="/reset-password-sent"
                        element={<ResetPasswordSent />}
                    />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route
                        path="/password-reset-success"
                        element={<PasswordResetSuccess />}
                    />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <ToastContainer theme="dark" />
            </div>
        </>
    );
}

export default App;
