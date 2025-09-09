import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBackground from "../../assets/authBackground.png";
import RESBACLogo from "../../assets/RESBACLogo.png";
import "../Auth/Login.css";
import Spacer from "../../components/Spacer";

export default function RegisterStep1() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (agree) {
      navigate("/RegisterStep2");
    } else {
      alert("Please agree to the terms & privacy policy.");
    }
  };

  return (
    <div className='login-container'>
      {/* Left background */}
      <div
        className='login-left'
        style={{ backgroundImage: `url(${authBackground})` }}
      />

      {/* Right form */}
      <div className='login-right'>
        <img src={RESBACLogo} alt='RESBAC Logo' className='login-logo' />
        <h2 className='login-title'>RESBAC Admin</h2>
        <p className='login-subtitle'>Create an Account</p>

        {/* Step indicator */}
        <div className='stepper'>
          <div className='step-indicator'>
            <div className='step active'>1</div>
            <div className='step inactive'>2</div>
            <div className='step inactive'>3</div>
          </div>
          <div className='step-labels'>
            <div className='step-label'>
              Login
              <br />
              Credentials
            </div>
            <div className='step-label'>
              Admin
              <br />
              Information
            </div>
            <div className='step-label'>
              Admin
              <br />
              Locality
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleNext} className='login-form'>
          <label>Email *</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='login-input'
          />

          <Spacer height={20} />

          <label>Password *</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='login-input'
          />

          <Spacer height={5} />

          <label style={{ fontSize: 14, marginBottom: 16 }}>
            <input
              type='checkbox'
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              style={{ marginRight: 6 }}
            />
            I agree to terms & privacy
          </label>

          <button type='submit' className='login-button'>
            Next
          </button>

          <p className='login-signup'>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Sign In</span>
          </p>
        </form>

        {/* Footer */}
        <p className='login-footer'>© 2025 RESBAC. All Rights Reserved</p>
      </div>
    </div>
  );
}
