import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [formErrors, setFormErrors] = useState({
username: '',
password: ''
});
const [formValid, setFormValid] = useState(false);
const navigate = useNavigate();

function handleSubmit(event) {
event.preventDefault();
validateForm();
}

function validateForm() {
let errors = {};
let formIsValid = true;
if (!username) {
formIsValid = false;
errors.username = "Username can't be empty";
}

if (!password) {
  formIsValid = false;
  errors.password = "Password can't be empty";
}

setFormErrors(errors);
setFormValid(formIsValid);
}

return (
<div className="login-container">
<form onSubmit={handleSubmit}>
<label>
Username:
<input type="text" value={username} onChange={e => setUsername(e.target.value)} onBlur={validateForm} />
<div className="error-message">{formErrors.username}</div>
</label>
<br />
<label>
Password:
<input type="password" value={password} onChange={e => setPassword(e.target.value)} onBlur={validateForm} />
<div className="error-message">{formErrors.password}</div>
</label>
<br />
{formValid ? (
  <button type="submit" onClick={() => navigate('/employ')}>
  Login
  </button>
) : (
<button type="submit" disabled>
Login
</button>
)}
</form>
</div>
);
}

export default LoginPage;
