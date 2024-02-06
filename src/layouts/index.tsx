import { Outlet } from "@umijs/max";
import styles from "./style.less";
import { ConfigProvider, theme } from "antd";
import { THEME_CONFIG } from "@/constants/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useModel } from "@umijs/max";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";

const Layout: React.FC = () => {
  const { wagmiConfig, wagmiChains } = useModel('useWagmi');

  return (
    <>
      {!!wagmiConfig && (
        <WagmiConfig
          config={wagmiConfig}
        >
          <RainbowKitProvider
            chains={wagmiChains}
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
        </WagmiConfig>
      )}
    </>
  )
};

export default Layout;
