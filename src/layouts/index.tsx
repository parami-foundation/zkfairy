import { Outlet } from "@umijs/max";
import styles from "./style.less";
import { ConfigProvider, theme } from "antd";
import { THEME_CONFIG } from "@/constants/theme";
import Header from "@/components/header";

const Layout: React.FC = () => {
  return (
    <>
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
          </div>
        </div>
      </ConfigProvider>
    </>
  )
};

export default Layout;
