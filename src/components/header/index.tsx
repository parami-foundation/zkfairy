import React from "react";
import styles from "./style.less";
import classNames from "classnames";
import { useModel } from "@umijs/max";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header: React.FC = () => {
  const { headerTab, setHeaderTab } = useModel("useSetting");

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
              className={classNames(styles.headerNavItem, headerTab === "home" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("home");
                window.location.href = "#banner";
              }}
            >
              Home
            </div>
            <div
              className={classNames(styles.headerNavItem, headerTab === "about" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("about");
                window.location.href = "#about";
              }}
            >
              About
            </div>
            <div
              className={classNames(styles.headerNavItem, headerTab === "token" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("token");
                window.location.href = "#token";
              }}
            >
              Token
            </div>
            <div className={styles.headerNavItem}>
              NFT
            </div>
            <div
              className={classNames(styles.headerNavItem, headerTab === "journey" && styles.headerNavItemActive)}
              onClick={() => {
                setHeaderTab("journey");
                window.location.href = "#journey";
              }}
            >
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
                    } else {
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
