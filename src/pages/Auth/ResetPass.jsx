import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBackground from "../../assets/authBackground.png";
import RESBACLogo from "../../assets/RESBACLogo.png";
import "./Login.css"; // reuse same styles
import Spacer from "../../components/Spacer";

export default function ResetPass() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      return alert("Please fill in both fields.");
    }
    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }
    // TODO: call real API to reset password
    alert("Password reset successfully! Redirecting to login...");
    navigate("/login");
  };

  return (
    <div className='login-container'>
      {/* Left background */}
      <div
        className='login-left'
        style={{ backgroundImage: `url(${authBackground})` }}
      />

      {/* Right side */}
      <div className='login-right'>
        <img src={RESBACLogo} alt='RESBAC Logo' className='login-logo' />
        <h2 className='login-title'>RESBAC Admin</h2>
        <p className='login-subtitle'>Enter your new password below.</p>

        <form onSubmit={handleReset} className='login-form'>
          <label>New Password *</label>
          <input
            type='password'
            className='login-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='input-anak'>
            Password must be at least 8 characters
          </label>

          <Spacer height={15} />

          <label>Confirm Password *</label>
          <input
            type='password'
            className='login-input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className='input-anak'>Both Password must match</p>

          <button type='submit' className='login-button'>
            Reset Password
          </button>
        </form>

        {/* Footer */}
        <p className='login-footer'>© 2025 RESBAC. All Rights Reserved</p>
      </div>
    </div>
  );
}
