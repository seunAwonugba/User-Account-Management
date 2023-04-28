import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import EmailConfirmation from "./page/EmailConfirmation";

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
                        path="/email-confirmation"
                        element={<EmailConfirmation />}
                    ></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
