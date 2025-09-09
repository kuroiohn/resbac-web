import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBackground from "../../assets/authBackground.png";
import RESBACLogo from "../../assets/RESBACLogo.png";
import "./Login.css";
import Spacer from "../../components/Spacer";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (agree) {
      // TODO replace with real auth logic
      navigate("/home");
    } else {
      alert("Please agree to the terms and privacy policy.");
    }
  };

  return (
    <div className='login-container'>
      {/* Left Side Background */}
      <div
        className='login-left'
        style={{ backgroundImage: `url(${authBackground})` }}
      />

      {/* Right Side Background */}
      <div className='login-right'>
        <img src={RESBACLogo} alt='RESBAC Logo' className='login-logo' />
        <h2 className='login-title'>RESBAC Admin</h2>
        <p className='login-subtitle'>Sign in to start your session.</p>

        <form onSubmit={handleLogin} className='login-form'>
          <label>Email *</label>
          <input
            type='email'
            className='login-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacer height={20} />
          <label>Password *</label>
          <input
            type='password'
            className='login-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer height={5} />
          {/* Checkbox + Forgot password in the same row */}
          <div className='login-options'>
            <label className='terms'>
              <input
                type='checkbox'
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginRight: 6 }}
              />
              I agree to terms & privacy
            </label>
            <a onClick={() => navigate("/forgot-password")}>Forgot Password?</a>
          </div>

          <button type='submit' className='login-button'>
            Login
          </button>

          <p className='login-signup'>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/RegisterStep1")}>Sign Up</span>
          </p>
        </form>

        {/* Footer */}
        <p className='login-footer'>© 2025 RESBAC. All Rights Reserved</p>
      </div>
    </div>
  );
}
