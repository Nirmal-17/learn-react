import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Student() {
    // Email and password state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login state
    const [loggedIn, setLoggedIn] = useState(false);
const navigate= useNavigate();
    // Error state
    const [error, setError] = useState("");

    // Forgot password state
    const [forgotPassword, setForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const [resetMessage, setResetMessage] = useState("");

    // Login function
    const handleLogin = () => {
        if (email.trim() === "") {
            setError("Email is required!");
            return;
        }

        if (password.trim() === "") {
            setError("Password is required!");
            return;
        }

        setError("");
         navigate("/dashboard");
    };

    // Logout function
    const handleLogout = () => {
        setLoggedIn(false);
        setEmail("");
        setPassword("");
        setError("");
    };

    // Forgot password function
    const handleForgotPassword = () => {
        if (resetEmail.trim() === "") {
            setResetMessage("Please enter your email address!");
            return;
        }

        setResetMessage(
            "If an account exists with this email, a password reset link will be sent."
        );
    };

    return (
        <div>

            {/* LOGIN SECTION */}

            {!loggedIn && !forgotPassword && (
                <div>
                    <h2>Login Page</h2>

                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleLogin();
                        }}
                    >
                        <fieldset>

                            {/* EMAIL */}

                            <label>Email Address:</label>

                            <input
                                style={{
                                    padding: "5px",
                                    margin: "5px"
                                }}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    setError("");
                                }}
                            />

                            <br />
                            <br />

                            {/* PASSWORD */}

                            <label>Password:</label>

                            <input
                                style={{
                                    padding: "5px",
                                    margin: "5px"
                                }}
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                    setError("");
                                }}
                            />

                            <br />

                            {/* FORGOT PASSWORD */}

                            <button
                                type="button"
                                onClick={() => {
                                    setForgotPassword(true);
                                    setError("");
                                }}
                                style={{
                                    border: "none",
                                    background: "none",
                                    color: "blue",
                                    cursor: "pointer",
                                    padding: "5px"
                                }}
                            >
                                Forgot Password?
                            </button>

                            <br />

                            {/* ERROR */}

                            {error && (
                                <p style={{ color: "red" }}>
                                    {error}
                                </p>
                            )}

                            {/* LOGIN BUTTON */}

                            <button
                                type="submit"
                                style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    backgroundColor: "green",
                                    color: "white"
                                }}
                            >
                                Login
                            </button>

                        </fieldset>
                    </form>
                </div>
            )}

            {/* FORGOT PASSWORD SECTION */}

            {forgotPassword && !loggedIn && (
                <div>
                    <h2>Forgot Password?</h2>

                    <p>
                        Enter your email address to reset your password.
                    </p>


                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleForgotPassword();
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={resetEmail}
                            onChange={(event) => {
                                setResetEmail(event.target.value);
                                setResetMessage("");
                            }}
                            style={{
                                padding: "5px"
                            }}
                        />

                        <br />
                        <br />

                        <button
                            type="submit"
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "green",
                                color: "white",
                                cursor: "pointer"
                            }}
                        >
                            Send Reset Link
                        </button>
                    </form>

                    {/* RESET MESSAGE */}

                    {resetMessage && (
                        <p style={{ color: "green" }}>
                            {resetMessage}
                        </p>
                    )}

                    <br />

                    <button
                        onClick={() => {
                            setForgotPassword(false);
                            setResetEmail("");
                            setResetMessage("");
                        }}
                        style={{
                            padding: "5px 10px",
                            cursor: "pointer"
                        }}
                    >
                        Back to Login
                    </button>
                </div>
            )}

            {/* LOGGED IN SECTION */}

            {loggedIn && (
                <div>
                    <h2>Welcome!</h2>

                    <p>Email: {email}</p>

                    <button
                        onClick={handleLogout}
                        style={{
                            padding: "5px 10px",
                            cursor: "pointer"
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}

        </div>
    );
}

export default Student;