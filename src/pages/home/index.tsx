import React from "react";
import styles from "./style.less";
import { Col, Row } from "antd";
import { ReactComponent as BannerCircle } from '@/assets/home/bannerCircle.svg';
import { ReactComponent as AboutArrow } from '@/assets/home/aboutArrow.svg';
import { ReactComponent as CardCharacter } from '@/assets/home/card/character.svg';
import { ReactComponent as CardBuilding } from '@/assets/home/card/building.svg';
import { ReactComponent as CardEquipment } from '@/assets/home/card/equipment.svg';
import { ReactComponent as CardMore } from '@/assets/home/card/more.svg';
import { ReactComponent as MoreBackground } from '@/assets/home/moreBackground.svg';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeWrapper}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerWrapper}>
            <div className={styles.bannerSlogan}>
              <div className={styles.bannerSloganLeft}>
                The Gaming Platform
              </div>
              <div className={styles.bannerSloganRight}>
                For Bitcoin Ecosystem
              </div>
            </div>
            <div className={styles.bannerTitle}>
              ZKFairy
            </div>
          </div>
          <div className={styles.bannerBackground} />
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutBackground}>
            <BannerCircle className={styles.aboutCircle} />
            <div className={styles.aboutIcon}>
              <img
                src={require('@/assets/home/ring.png')}
                alt="aboutIcon"
                className={styles.aboutIconImg}
              />
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutHeader}>
              <div className={styles.aboutLeft}>
                <AboutArrow
                  className={styles.aboutLeftImg}
                />
              </div>
              <div className={styles.aboutTitle}>
                Bridging the Game Ecosystem<br />
                Between Bitcoin and EVMs
              </div>
              <div className={styles.aboutRight}>
                <AboutArrow
                  className={styles.aboutRightImg}
                />
              </div>
            </div>
            <div className={styles.aboutContent}>
              Welcome to ZKFairy, the innovative gaming platform where Bitcoin assels come to life! Embark on a journey filled with Japanese comic art-inspired characters, engaging in a unique mix of simulation and educational ga-meplay. Our platform offers a fair-launch tokenization systern and integrates Bitcoin's layer 2 solutions, enhancing playability and earning opportunities. Dive into a world where your BRC-20 and BRC-420 tokens, along with Ordinals NFTs, open doors to new adventures, all within a secure, player-driven economy. Join BTC Maid for a thrilling blend of entertainment, education, and earning exploration!
            </div>
            <div className={styles.aboutCard}>
              <Row
                className={styles.aboutCardRow}
                gutter={[16, 16]}
              >
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>CHARACTER</span>
                    </div>
                    <CardCharacter
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>BUILDING</span>
                    </div>
                    <CardBuilding
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>EQUIPMENT</span>
                    </div>
                    <CardEquipment
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>AND MORE</span>
                    </div>
                    <CardMore
                      className={styles.aboutCardItemImg}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.moreContainer}>
          <div className={styles.moreBackground}>
            <div className={styles.moreBackgroundPng}>
              <img
                src={require('@/assets/home/moreBackground.png')}
                alt="moreBackground"
                className={styles.moreBackgroundPngImg}
              />
            </div>
            <MoreBackground className={styles.moreBackgroundImg} />
          </div>
          <div className={styles.moreWrapper}>
            <div className={styles.moreHeader}>
              <div className={styles.moreLeft}>
                <AboutArrow
                  className={styles.moreLeftImg}
                />
              </div>
              <div className={styles.moreTitle}>
                And more
              </div>
              <div className={styles.moreRight}>
                <AboutArrow
                  className={styles.moreRightImg}
                />
              </div>
            </div>
            <div className={styles.moreContent}>
              Assemble an adventure team to explore the world, defeat mnsters, and discover treasures.
            </div>
            <div className={styles.moreCard}>
              <div className={styles.moreCardLeft}>
                <img
                  src={require('@/assets/home/moreArrow.png')}
                  alt="moreArrow"
                  className={styles.moreCardLeftImg}
                />
              </div>
              <div className={styles.moreCardSlider}>
                <div className={styles.moreCardSliderBorder}>
                  <img
                    src={require('@/assets/home/moreBorder.png')}
                    alt="moreBorder"
                    className={styles.moreCardSliderBorderImg}
                  />
                </div>
                <div className={styles.moreCardSliderContent}>
                  <div className={styles.moreCardSliderItem}>
                    <img
                      src={require('@/assets/demo/1.png')}
                      alt="moreCard1"
                      className={styles.moreCardSliderItemImg}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.moreCardRight}>
                <img
                  src={require('@/assets/home/moreArrow.png')}
                  alt="moreArrow"
                  className={styles.moreCardRightImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
