import React from "react";
import { useModel } from "@umijs/max";
import styles from "./style.less";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => {
  const { headerTab, setHeaderTab } = useModel("useSetting");

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMask} />
      <div className={styles.footerWrapper}>
        <div className={styles.footerRow}>
          <div className={styles.footerLogo}>
            <img
              className={styles.footerLogoImg}
              src={require("@/assets/logo.png")}
              alt="logo"
            />
          </div>
          <div className={styles.footerNavContainer}>
            <div
              className={styles.footerNavItem}
              onClick={() => {
                setHeaderTab("home");
                window.location.href = "#banner";
              }}
            >
              Home
            </div>
            <div
              className={styles.footerNavItem}
              onClick={() => {
                setHeaderTab("about");
                window.location.href = "#about";
              }}
            >
              About
            </div>
            <div
              className={styles.footerNavItem}
              onClick={() => {
                setHeaderTab("token");
                window.location.href = "#token";
              }}
            >
              Token
            </div>
            <div
              className={styles.footerNavItem}
            >
              NFT
            </div>
            <div
              className={styles.footerNavItem}
              onClick={() => {
                setHeaderTab("journey");
                window.location.href = "#journey";
              }}
            >
              Journey
            </div>
          </div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.footerCopyRight}>
            © 2023 ZKFairy Protocol. All Rights Reserved.
          </div>
          <div className={styles.footerSocialMedia}>
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
            <div className={styles.socialMediaItemLong}>
              <IoMdMail
                className={styles.socialMediaItemIcon}
              />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
