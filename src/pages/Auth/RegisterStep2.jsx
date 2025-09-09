import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBackground from "../../assets/authBackground.png";
import RESBACLogo from "../../assets/RESBACLogo.png";
import "./Login.css";
import Spacer from "../../components/Spacer";

export default function RegisterStep2() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [agree, setAgree] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (agree) {
      // go to step 3
      navigate("/RegisterStep3");
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
            <div className='step inactive'>1</div>
            <div className='step active'>2</div>
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
          <label>Mobile Number *</label>
          <input
            type='tel'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className='login-input'
          />

          <Spacer height={20} />

          <label>Name *</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='login-input'
          />

          <Spacer height={20} />

          <label>Employee ID *</label>
          <input
            type='text'
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className='login-input'
          />

          <Spacer height={5} />

          {/* Agree + next */}
          <div className='login-options'>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type='checkbox'
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginRight: 6 }}
              />
              I agree to terms & privacy
            </label>
          </div>

          <button type='submit' className='login-button'>
            Next
          </button>

          <p className='login-signup'>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Sign In</span>
          </p>
        </form>

        <p className='login-footer'>© 2025 RESBAC. All Rights Reserved</p>
      </div>
    </div>
  );
}
