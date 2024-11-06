import React from 'react';
import './footer.css'; // Include CSS for footer styling

function Footer() {
  return (
    <footer className="footer">
      <p>
        <span>&copy; {new Date().getFullYear()} All Rights Reserved. </span>
        <span> Dr. Ayele Abebe.</span>
    
      </p>
    </footer>
  );
}

export default Footer;
