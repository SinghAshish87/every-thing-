'use client'; // This marks the file as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Correct path to your CSS

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MyNextApp</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Navbar Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </li>

        {/* Languages Dropdown */}
        <li className={styles.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link href="/languages" onClick={() => setIsMenuOpen(false)}>Languages</Link>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {/* European Languages Section */}
              <li className={styles.dropdownSection}>
                <h4>European Languages</h4>
                <ul className={styles.languageList}>
                  <li><Link href="/languages/english">English</Link></li>
                  <li><Link href="/languages/spanish">Spanish</Link></li>
                  <li><Link href="/languages/french">French</Link></li>
                  <li><Link href="/languages/german">German</Link></li>
                </ul>
              </li>
 <br/>
              {/* Asian Languages Section */}
              <li className={styles.dropdownSection}>
                <h4>Asian Languages</h4>
                <ul className={styles.languageList}>
                  <li><Link href="/languages/chinese">Chinese</Link></li>
                  <li><Link href="/languages/japanese">Japanese</Link></li>
                  <li><Link href="/languages/korean">Korean</Link></li>
                </ul>
              </li>
                <br/>
              {/* Other Languages Section */}
              <li className={styles.dropdownSection}>
                <h4>Other Languages</h4>
                <ul className={styles.languageList}>
                  <li><Link href="/languages/arabic">Arabic</Link></li>
                  <li><Link href="/languages/portuguese">Portuguese</Link></li>
                </ul>
              </li>
            </ul>
          )}
        </li> 

        <li>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
