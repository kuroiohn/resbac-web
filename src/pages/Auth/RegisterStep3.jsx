import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authBackground from "../../assets/authBackground.png";
import RESBACLogo from "../../assets/RESBACLogo.png";
import "../Auth/Login.css";

export default function RegisterStep3() {
  const navigate = useNavigate();
  const [region, setRegion] = useState("Marikina");
  const [district, setDistrict] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [barangay, setBarangay] = useState("");
  const [agree, setAgree] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!region || !district || !municipality || !barangay) {
      return alert("Please fill all fields.");
    }
    if (!agree) {
      return alert("Please agree to the terms & privacy policy.");
    }
    // TODO: call create account API
    alert("Account created successfully!");
    navigate("/login");
  };

  // Marikina options
  const districts = ["District 1", "District 2"];
  const municipalities = ["Marikina"];
  const barangays = [
    "Barangka",
    "Calumpang",
    "Concepcion Dos",
    "Fortune",
    "Industrial Valley",
    "Jesus de la Peña",
    "Malanday",
    "Marikina Heights",
    "Nangka",
    "Parang",
    "San Roque",
    "Tumana",
  ];

  // Dropdown component wrapper
  const Dropdown = ({ value, onChange, options }) => (
    <div className='login-input dropdown-wrapper'>
      <select
        className='login-input dropdown'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value=''>Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className='login-container'>
      <div
        className='login-left'
        style={{ backgroundImage: `url(${authBackground})` }}
      />

      <div className='login-right'>
        <img src={RESBACLogo} alt='RESBAC Logo' className='login-logo' />
        <h2 className='login-title'>RESBAC Admin</h2>
        <p className='login-subtitle'>Create an Account</p>

        {/* Step indicator */}
        <div className='stepper'>
          <div className='step-indicator'>
            <div className='step inactive'>1</div>
            <div className='step inactive'>2</div>
            <div className='step active'>3</div>
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
        <form onSubmit={handleCreate} className='login-form'>
          {/* Region stays full width */}
          <label>Region *</label>
          <div className='register-dropdown-wrapper'>
            <select
              className='register-dropdown single-option'
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              disabled
            >
              <option value='Marikina'>Marikina</option>
            </select>
          </div>

          {/* Two-column container */}
          <div className='form-two-columns'>
            <div>
              <label>District *</label>
              <div className='register-dropdown-wrapper'>
                <select
                  className='register-dropdown'
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value=''>Select District</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label>Municipality *</label>
              <div className='register-dropdown-wrapper'>
                <select
                  className='register-dropdown'
                  value={municipality}
                  onChange={(e) => setMunicipality(e.target.value)}
                >
                  <option value=''>Select Municipality</option>
                  {municipalities.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Barangay full width */}
          <label>Barangay *</label>
          <div className='register-dropdown-wrapper'>
            <select
              className='register-dropdown'
              value={barangay}
              onChange={(e) => setBarangay(e.target.value)}
            >
              <option value=''>Select Barangay</option>
              {barangays.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Checkbox */}
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
            Create Account
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
