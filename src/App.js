import {useState} from 'react';
import './App.css';

function App() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNo, setContactNo] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [contactNoError, setContactNoError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [formSubmit, setFormSubmit] = useState("");

  let validForm = true;

  const submitHandler = (event) => {

    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setContactNoError("");
    setPasswordMatchError("");
    setFormSubmit("");

    event.preventDefault();

    if(fullName.length === 0) {
      validForm = false;
      setFullNameError("Name Cannot be Empty");
    }

  if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    validForm = false;
    setEmailError("Enter email in correct format");
  }

  if(password.length <= 6) {
    validForm = false;
    setPasswordError("Minumum Length of Password should be 6");
  }

  if(confirmPassword.length <= 6) {
    validForm = false;
    setConfirmPasswordError("Minumum Length of confirmPassword should be 6");
  }

  if(password !== confirmPassword) {
    validForm = false;
    setPasswordMatchError("Passwords not matching");
  }

  if(contactNo.length !== 13 || contactNo[0] !== '+') {
    validForm = false;
    setContactNoError("Enter Contact No in Proper Format");
  }

  if(validForm) {
    setFormSubmit("Form Submitted Successfully");
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setContactNo("");
  }
}

  return (
    <div className="wrapper">
      <form onSubmit={submitHandler} className="form">

        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" value={fullName} onChange={(event) => setFullName(event.target.value) }/>
        <span style={{ color: "red", margin: "10px 0" }}>{fullNameError}</span>
        
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <span style={{ color: "red", margin: "10px 0" }}>{emailError}</span>
        
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <span style={{ color: "red", margin: "10px 0" }}>{passwordError}</span>
        <span style={{ color: "red", margin: "10px 0" }}>{passwordMatchError}</span>
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="text" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
        <span style={{ color: "red", margin: "10px 0" }}>{confirmPasswordError}</span>
        
        <label htmlFor="contactNo">Contact Number(with Country Code)</label>
        <input type="text" name="contactNo" id="contactNo" value={contactNo} onChange={(event) => setContactNo(event.target.value)}/>
        <span style={{ color: "red", margin: "10px 0" }}>{contactNoError}</span>
        <span style={{ color: "green", margin: "10px 0" }}>{formSubmit}</span>
        
        <input type="submit"/>

      </form>
    </div>
  );
}

export default App;
