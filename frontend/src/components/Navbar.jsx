import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div onClick={() => navigate("/")} className={styles.logo}>Aamish FinacPlus</div>
      <div className={styles.buttons}>
        {location.pathname === '/view-users' ? (
          <Link to="/">
            <button className={styles.addUser}>Add User</button>
          </Link>
        ) : (
          <Link to="/view-users">
            <button className={styles.viewUsers}>View Users</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
