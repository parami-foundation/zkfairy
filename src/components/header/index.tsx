import React from "react";
import styles from "./style.less";
import classNames from "classnames";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              openAccountModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  className={styles.connectWallet}
                  onClick={() => {
                    if (ready && !connected) {
                      openConnectModal();
                    } else if (ready && connected) {
                      openAccountModal();
                    }
                  }}
                >
                  {connected ? (
                    <span>{`${account?.address?.slice(0, 6)}...${account?.address?.slice(-4)}`}</span>
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </div>
              );
            }}
          </ConnectButton.Custom>
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
