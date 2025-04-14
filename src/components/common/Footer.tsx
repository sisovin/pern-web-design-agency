import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} PERN Web Design Agency. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
