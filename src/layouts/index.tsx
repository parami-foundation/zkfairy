import { Outlet } from "@umijs/max";
import styles from "./style.less";
import { ConfigProvider, theme } from "antd";
import { THEME_CONFIG } from "@/constants/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useModel } from "@umijs/max";
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from "react";

const Layout: React.FC = () => {
  const { wagmiDefaultConfig, queryClient } = useModel('useWagmi');

  return (
    <>
      {!!wagmiDefaultConfig && !!queryClient && (
        <WagmiProvider
          config={wagmiDefaultConfig}
        >
          <QueryClientProvider
            client={queryClient}
          >
            <RainbowKitProvider
              theme={lightTheme()}
            >
              <ConfigProvider
                theme={{
                  algorithm: theme.darkAlgorithm,
                  token: {
                    wireframe: false,
                    colorPrimary: THEME_CONFIG.colorPrimary,
                    borderRadius: THEME_CONFIG.borderRadius,
                    boxShadow: THEME_CONFIG.boxShadow,
                  },
                }}
              >
                <div className={styles.layoutContainer}>
                  <div className={styles.wrapperContainer}>
                    <Header />
                    <Outlet />
                    <Footer />
                  </div>
                </div>
              </ConfigProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      )}
    </>
  )
};

export default Layout;
