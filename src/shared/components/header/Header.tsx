import BetDrawer from "../MUI/drawer/drawer";
import React from "react";
import styles from "./header.module.scss";
import logo from '../../../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hidden}></div>
      <div className={styles.wrapperTitle}>
        <img alt='Logo' width='80px' height='80px' className={styles.hidden} src={logo} />
        <p>FakeBet</p>
      </div>
      <div>
        <BetDrawer />
      </div>
    </header>
  );
};

export default Header;
