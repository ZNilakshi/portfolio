"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Nilakshie</span><span className={styles.cursor}>_</span>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""} onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link href="/expertise" className={pathname === "/expertise" ? styles.active : ""} onClick={() => setIsOpen(false)}>Expertise</Link>
        </li>
        <li>
          <Link href="/work" className={pathname === "/work" ? styles.active : ""} onClick={() => setIsOpen(false)}>Work</Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? styles.active : ""} onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
