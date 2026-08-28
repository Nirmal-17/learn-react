import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Student() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (username === "" || password === "") {
            alert("Please enter username and password");
            return;
        }

        // Login successful
        navigate("/dashboard");
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5"
            }}
        >

            <div
                style={{
                    width: "350px",
                    padding: "30px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
            >

                <h1 style={{ textAlign: "center" }}>
                    ShopZone
                </h1>

                <h2 style={{ textAlign: "center" }}>
                    Login
                </h2>


                <form onSubmit={handleLogin}>

                    {/* USERNAME */}

                    <label>
                        Username
                    </label>

                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            marginBottom: "15px",
                            boxSizing: "border-box"
                        }}
                    />


                    {/* PASSWORD */}

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            marginBottom: "20px",
                            boxSizing: "border-box"
                        }}
                    />


                    {/* LOGIN BUTTON */}

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "black",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Student;
