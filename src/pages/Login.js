import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://shopping-backend-ujl0.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login successful!");
        setIsLoggedIn(true);
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(`❌ ${data.message || "Invalid credentials"}`);
      }
    } catch (error) {
      setMessage("❌ Server error, please try again later.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        padding: "1rem",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "350px",
          backgroundColor: "rgba(233, 229, 229, 1)",
          padding: "2rem",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontSize: "1.8rem",
            color: "#4b2be3",
            fontWeight: "bold",
          }}
        >
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px 15px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
            transition: "all 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4b2be3")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "12px 15px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
            transition: "all 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4b2be3")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          required
        />

        {message && (
          <p
            style={{
              textAlign: "center",
              color: message.includes("❌") ? "#e74c3c" : "#27ae60",
              fontWeight: "500",
              fontSize: "0.9rem",
            }}
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #6e8efb, #a777e3)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #a777e3, #6e8efb)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(135deg, #6e8efb, #a777e3)")
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
