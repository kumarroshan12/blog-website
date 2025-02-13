import React from 'react';

const NavigationBar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <a href="#home" style={styles.navbarBrand}>
          Destinations
        </a>
        <div style={styles.navLinks}>
          <a href="#home" style={styles.navLink}>
            Home
          </a>
          <a href="#about" style={styles.navLink}>
            About
          </a>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </div>
        <form style={styles.searchForm}>
          <input type="text" placeholder="Search" style={styles.searchInput} />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
        </form>
        
      </div>
    </nav>
  );
};

// Define styles as JavaScript objects
const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarContainer: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarBrand: {
    color: '#fff',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    color: '#fff',
    marginLeft: '15px',
    textDecoration: 'none',
  },
  searchForm: {
    display: 'flex',
    marginLeft: '15px',
  },
  searchInput: {
    padding: '5px',
    marginRight: '5px',
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '5px 10px',
    backgroundColor: '#17a2b8',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default NavigationBar;
