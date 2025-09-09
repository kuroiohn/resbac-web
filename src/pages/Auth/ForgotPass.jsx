import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBackground from "../../assets/authBackground.png";
import RESBACLogo from "../../assets/RESBACLogo.png";
import "./Login.css";
import Spacer from "../../components/Spacer";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email"); // "email" or "verify"
  const [code, setCode] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email.");
    // TODO: integrate real API call
    setStep("verify");
  };

  const handleConfirmCode = (e) => {
    e.preventDefault();
    if (!code) return alert("Please enter the code.");
    // TODO: verify code logic
    alert("Code confirmed! Redirecting to reset password...");
    navigate("/reset-password"); // TODO CHANGE
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

        {step === "email" ? (
          <p className='login-subtitle'>Enter your email to reset password.</p>
        ) : (
          <p className='login-subtitle'>
            We’ve sent a verification code to your email. Please copy the code
            from your inbox and paste it into the field below.
          </p>
        )}

        <form
          onSubmit={step === "email" ? handleSendEmail : handleConfirmCode}
          className='login-form'
        >
          {step === "email" && (
            <>
              <label>Email *</label>
              <input
                type='email'
                className='login-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Spacer height={20} />
              <button type='submit' className='login-button'>
                Send Verification Code
              </button>
            </>
          )}

          {step === "verify" && (
            <>
              <label>Verification Code *</label>
              <input
                type='text'
                className='login-input'
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Spacer height={20} />
              <button type='submit' className='login-button'>
                Confirm Code
              </button>
              <p className='login-signup'>
                Didn’t get the code?{" "}
                <span onClick={() => alert("Resend code flow")}>
                  Resend Code
                </span>
              </p>
            </>
          )}
        </form>

        {/* Footer */}
        <p className='login-footer'>© 2025 RESBAC. All Rights Reserved</p>
      </div>
    </div>
  );
}
