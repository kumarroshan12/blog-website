import React from 'react';

const AboutPage = () => {
  const pageStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: '#333',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#002D62',
  };

  const boxStyle = {
    backgroundColor: '#ffffcc',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '30px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#0066cc',
  };

  const footerStyle = {
    backgroundColor: '#002D62',
    
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    marginTop: '270px',
  };

  return (
    <div className="about-page" style={pageStyle}>
      <h1 style={titleStyle}>About Us</h1>
      <div style={boxStyle}>
        <p style={paragraphStyle}>Welcome to our funky blog platform!</p>
        <p style={paragraphStyle}>We are passionate about sharing knowledge and ideas through our blog feeds. Whether you're a beginner looking to learn something new or an expert seeking inspiration, our platform has something for everyone.</p>
        <p style={paragraphStyle}>Our team of writers is dedicated to providing engaging and informative content on a wide range of topics, from technology to lifestyle and beyond.</p>
        <p style={paragraphStyle}>So sit back, relax, and enjoy exploring our funky blog feeds!</p>
      </div>
      <footer style={footerStyle}>
        <p style={{ margin: '0', color: '#ffffff', fontSize: '1rem' }}>© 2024 Funky Blog Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
