import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>vijay</h1>
      <p style={styles.contact}>Contact: your.vijay@example.com | Phone: +1234567890</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  contact: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default Home;