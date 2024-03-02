import React from "react";
import { useModel } from "@umijs/max";
import styles from "./style.less";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Tooltip } from "antd";

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
          <div className={styles.footerSocialMediaMobile}>
            <Tooltip
              placement="top"
              title={"Coming Soon"}
            >
              <div className={styles.socialMediaItem}>
                <FaTelegramPlane
                  className={styles.socialMediaItemIcon}
                />
              </div>
            </Tooltip>
            <div
              className={styles.socialMediaItem}
              onClick={() => window.open("https://twitter.com/ZKFairy", "_blank")}
            >
              <FaXTwitter
                className={styles.socialMediaItemIcon}
              />
            </div>
            <Tooltip
              placement="top"
              title={"Coming Soon"}
            >
              <div className={styles.socialMediaItemLong}>
                <IoMdMail
                  className={styles.socialMediaItemIcon}
                />
                <span>Contact Us</span>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.footerCopyRight}>
            © {new Date().getFullYear()} ZKFairy Protocol. All Rights Reserved.
          </div>
          <div className={styles.footerSocialMedia}>
            <Tooltip
              placement="top"
              title={"Coming Soon"}
            >
              <div className={styles.socialMediaItem}>
                <FaTelegramPlane
                  className={styles.socialMediaItemIcon}
                />
              </div>
            </Tooltip>
            <div
              className={styles.socialMediaItem}
              onClick={() => window.open("https://twitter.com/ZKFairy", "_blank")}
            >
              <FaXTwitter
                className={styles.socialMediaItemIcon}
              />
            </div>
            <Tooltip
              placement="top"
              title={"Coming Soon"}
            >
              <div className={styles.socialMediaItemLong}>
                <IoMdMail
                  className={styles.socialMediaItemIcon}
                />
                <span>Contact Us</span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
