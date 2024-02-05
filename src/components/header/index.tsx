import React from "react";
import styles from "./style.less";
import classNames from "classnames";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header: React.FC = () => {
  const [tab, setTab] = React.useState<string>("home");

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <img
              className={styles.headerLogoImg}
              src={require("@/assets/logo.png")}
              alt="logo"
            />
          </div>
          <div className={styles.headerNavContainer}>
            <div
              className={classNames(styles.headerNavItem, tab === "home" && styles.headerNavItemActive)}
            >
              Home
            </div>
            <div className={styles.headerNavItem}>
              About
            </div>
            <div className={styles.headerNavItem}>
              Token
            </div>
            <div className={styles.headerNavItem}>
              NFT
            </div>
            <div className={styles.headerNavItem}>
              Journey
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.connectWallet}>
            <span>Connect Wallet</span>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaItem}>
              <FaTelegramPlane
                className={styles.socialMediaItemIcon}
              />
            </div>
            <div className={styles.socialMediaItem}>
              <FaXTwitter
                className={styles.socialMediaItemIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
