import React, { useState } from 'react';

function SigninForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password required';
    return newErrors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length) {
    setErrors(validationErrors);
  } else {
    setErrors({});
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
     
      const data = await response.json();
       console.log(data.token)
      if (!response.ok) {
        alert(data.message || 'Signin failed');
      } else {
        // 🪙 Store the token (e.g. in localStorage)
        localStorage.setItem('token', data.token);

        alert('Login successful!');
        window.location.href="/success"
        console.log('Logged in user:', data.user);
        // Navigate or update UI as needed
      }
    } catch (error) {
      console.error('Signin error:', error);
      alert('Something went wrong while signing in.');
    }
  }
};

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Sign In</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span style={styles.error}>{errors.password}</span>
        )}
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
    marginLeft: '10px',
  },
};

export default SigninForm;