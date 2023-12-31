import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <img
        src="https://cdn.dribbble.com/users/60166/screenshots/5394073/music_logo.jpg"
        alt="logo"
      />
      <button className="button" onClick={() => {navigate("/musicy")}}>Connect Musicy</button>
    </div>
  );
}
