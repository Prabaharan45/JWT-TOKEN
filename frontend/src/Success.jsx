import React from 'react';

function SigninSuccess({ user }) {
  return (
    <div style={styles.container}>
      <h2>Welcome back, {user?.name || 'User'}! 🎉</h2>
      <p>You have successfully signed in.</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1.5rem',
    backgroundColor: '#e0f7ea',
    border: '2px solid #4caf50',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#2e7d32',
    fontFamily: 'sans-serif',
  },
};

export default SigninSuccess;