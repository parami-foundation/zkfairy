import React, { useEffect, useRef } from "react";
import styles from "./style.less";
import { Carousel, Col, Row } from "antd";
import { ReactComponent as BannerCircle } from '@/assets/home/bannerCircle.svg';
import { ReactComponent as AboutArrow } from '@/assets/home/aboutArrow.svg';
import { ReactComponent as MoreBackground } from '@/assets/home/moreBackground.svg';
import { ReactComponent as TokenCard } from '@/assets/home/tokenCard.svg';
import { ReactComponent as JourneyPop1 } from '@/assets/home/journey/pop1.svg';
import { ReactComponent as JourneyPop2 } from '@/assets/home/journey/pop2.svg';
import { ReactComponent as JourneyPop3 } from '@/assets/home/journey/pop3.svg';
import { ReactComponent as JourneyPop4 } from '@/assets/home/journey/pop4.svg';
import classNames from "classnames";
import { ReactComponent as PlayNowButton } from '@/assets/home/playNow.svg';
import { ReactComponent as WatchTrailerButton } from '@/assets/home/watchTrailer.svg';
import YouTube from 'react-youtube';
import { CarouselRef } from "antd/es/carousel";

const Home: React.FC = () => {
  const [playQueue, setPlayQueue] = React.useState<number[]>([0, 1, 2, 3]);

  const characterVideoRef = useRef<HTMLVideoElement>(null);
  const buildingVideoRef = useRef<HTMLVideoElement>(null);
  const equipmentVideoRef = useRef<HTMLVideoElement>(null);
  const moreVideoRef = useRef<HTMLVideoElement>(null);

  const moreCardSliderContentCarouselRef = useRef<CarouselRef>(null);

  // Play video one by one in a loop, and switch to the next video when the current video ends
  useEffect(() => {
    const playNext = (index: number) => {
      if (index === 0) {
        characterVideoRef.current?.play();
      } else if (index === 1) {
        buildingVideoRef.current?.play();
      } else if (index === 2) {
        equipmentVideoRef.current?.play();
      } else if (index === 3) {
        moreVideoRef.current?.play();
      }
    };

    const onEnded = (index: number) => {
      const nextIndex = (index + 1) % 4;
      setPlayQueue((prev) => {
        const next = [...prev];
        next.push(next.shift() as number);
        return next;
      });
      playNext(nextIndex);
    };

    characterVideoRef.current?.addEventListener('ended', () => {
      onEnded(0);
    });
    buildingVideoRef.current?.addEventListener('ended', () => {
      onEnded(1);
    });
    equipmentVideoRef.current?.addEventListener('ended', () => {
      onEnded(2);
    });
    moreVideoRef.current?.addEventListener('ended', () => {
      onEnded(3);
    });

    playNext(playQueue[0]);

    return () => {
      characterVideoRef.current?.removeEventListener('ended', () => {
        onEnded(0);
      });
      buildingVideoRef.current?.removeEventListener('ended', () => {
        onEnded(1);
      });
      equipmentVideoRef.current?.removeEventListener('ended', () => {
        onEnded(2);
      });
      moreVideoRef.current?.removeEventListener('ended', () => {
        onEnded(3);
      });
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.bannerBackground} />
      <div className={styles.plumeBackground} />
      <div className={styles.homeWrapper}>
        <div className={styles.bannerContainer} id="banner">
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
        </div>

        <div className={styles.aboutContainer} id="about">
          <BannerCircle className={styles.aboutCircle} />
          <div className={styles.aboutIcon}>
            <img
              src={require('@/assets/home/ring.png')}
              alt="aboutIcon"
              className={styles.aboutIconImg}
            />
          </div>
          <div className={styles.aboutBackground} />
          <div className={styles.playContainer}>
            <div className={styles.playWrapper}>
              <div className={styles.playBackground}>
                <img
                  src={require('@/assets/home/playBackground.png')}
                  alt="playBackground"
                  className={styles.playBackgroundImg}
                />
              </div>
              <div className={styles.playContent}>
                <div className={styles.playCover}>
                  <video
                    autoPlay
                    muted
                    controls={false}
                    className={styles.playCoverImg}
                  >
                    <source src={require('@/assets/demo/play.mp4')} type="video/mp4" />
                    <source src={require('@/assets/demo/play.webm')} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={styles.playCoverMaskUp} />
                  <div className={styles.playCoverMaskDown} />
                  <div className={styles.playCoverIcon1}>
                    <img
                      src={require('@/assets/home/playIcon1.png')}
                      alt="playIcon1"
                      className={styles.playCoverIconImg}
                    />
                  </div>
                  <div className={styles.playCoverIcon2}>
                    <img
                      src={require('@/assets/home/playIcon2.png')}
                      alt="playIcon2"
                      className={styles.playCoverIconImg}
                    />
                  </div>
                </div>
                <div className={styles.playText}>
                  <div className={styles.playTextTitle}>
                    Monopoly Built on ZKFair
                  </div>
                  <div className={styles.playTextContent}>
                    Embark on a journey where gaming meets crypto in ZKFairy. Immerse yourself in a dynamic world of monopoly and trading, where every move counts and every decision shapes your fate. Join forces with friends, negotiate deals, and conquer the market in ZKFairy – the premier destination for crypto gamers!
                  </div>
                  <div className={styles.playTextButton}>
                    <PlayNowButton
                      className={styles.playTextButtonItem}
                      onClick={() => {
                        window.open('https://game.zkfairy.com');
                      }}
                    />
                    <WatchTrailerButton
                      className={styles.playTextButtonItem}
                    />
                  </div>
                </div>
              </div>
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
                    <video
                      muted
                      controls={false}
                      className={styles.aboutCardItemImg}
                      ref={characterVideoRef}
                    >
                      <source src={require('@/assets/home/card/character.mp4')} type="video/mp4" />
                      <source src={require('@/assets/home/card/character.webm')} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>BUILDING</span>
                    </div>
                    <video
                      muted
                      controls={false}
                      className={styles.aboutCardItemImg}
                      ref={buildingVideoRef}
                    >
                      <source src={require('@/assets/home/card/building.mp4')} type="video/mp4" />
                      <source src={require('@/assets/home/card/building.webm')} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>EQUIPMENT</span>
                    </div>
                    <video
                      muted
                      controls={false}
                      className={styles.aboutCardItemImg}
                      ref={equipmentVideoRef}
                    >
                      <source src={require('@/assets/home/card/equipment.mp4')} type="video/mp4" />
                      <source src={require('@/assets/home/card/equipment.webm')} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                  <div className={styles.aboutCardItem}>
                    <div className={styles.aboutCardItemTitle}>
                      <span>AND MORE</span>
                    </div>
                    <video
                      muted
                      controls={false}
                      className={styles.aboutCardItemImg}
                      ref={moreVideoRef}
                    >
                      <source src={require('@/assets/home/card/more.mp4')} type="video/mp4" />
                      <source src={require('@/assets/home/card/more.webm')} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className={styles.moreContainer} id="more">
          <MoreBackground className={styles.moreBackgroundImg} />
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
              <div
                className={styles.moreCardLeft}
                onClick={() => {
                  moreCardSliderContentCarouselRef.current?.prev();
                }}
              >
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
                  <Carousel
                    effect="fade"
                    className={styles.moreCardSliderContentCarousel}
                    ref={moreCardSliderContentCarouselRef}
                  >
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="d0p2giltCYY"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="_VtN2NFCAd4"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="-DWkuA6tTq8"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="AV1H8gUDvDo"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="IXwTZURK4n4"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="RU7mSGqf3h4"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                    <div className={styles.moreCardSliderItem}>
                      <YouTube
                        videoId="P8F6ksMajzA"
                        className={styles.moreCardSliderItemImg}
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div
                className={styles.moreCardRight}
                onClick={() => {
                  moreCardSliderContentCarouselRef.current?.next();
                }}
              >
                <img
                  src={require('@/assets/home/moreArrow.png')}
                  alt="moreArrow"
                  className={styles.moreCardRightImg}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tokenContainer} id="token">
          <img
            src={require('@/assets/home/tokenBackground.png')}
            alt="tokenBackground"
            className={styles.tokenBackgroundImg}
          />
          <div className={styles.tokenWrapper}>
            <div className={styles.tokenHeader}>
              <div className={styles.tokenLeft}>
                <AboutArrow
                  className={styles.tokenLeftImg}
                />
              </div>
              <div className={styles.tokenTitle}>
                ZKFairy Token
              </div>
              <div className={styles.tokenRight}>
                <AboutArrow
                  className={styles.tokenRightImg}
                />
              </div>
            </div>
            <div className={styles.tokenContent}>
              <TokenCard className={styles.tokenContentImg} />
              <div className={styles.tokenCardBody}>
                <div className={styles.tokenContentText}>
                  <b>"Forge Your Legacy in ZKFairy's Universe"</b><br />
                  In ZKFairy's world, adventure and innovation intertwine through the seamless integration of crypto mechanics and Zero-Knowledge Proofs, ensuring privacy and security in every transaction and battle. Dive into an epic where your prowess and decisions ripple through a blockchain-backed universe, pioneering a gaming experience where every victory is recorded, every asset is truly yours, and every quest advances not just your story, but the blockchain itself.
                </div>
                <img
                  src={require('@/assets/home/tokenMedal.png')}
                  alt="tokenMedal"
                  className={styles.tokenContentMedal}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.journeyContainer} id="journey">
          <div className={styles.journeyBackground}>
            <img
              src={require('@/assets/home/journeyBackground.png')}
              alt="journeyBackground"
              className={styles.journeyBackgroundImg}
            />
            <div className={styles.journeyBackgroundColor} />
            <div className={styles.journeyBackgroundStar} />
            <div className={styles.journeyBackgroundFooter}>
              <img
                src={require('@/assets/home/journeyFooter.png')}
                alt="journeyFooter"
                className={styles.journeyBackgroundFooterImg}
              />
            </div>
          </div>
          <div className={styles.journeyWrapper}>
            <div className={styles.journeyHeader}>
              <div className={styles.journeyLeft}>
                <AboutArrow
                  className={styles.journeyLeftImg}
                />
              </div>
              <div className={styles.journeyTitle}>
                ZKFairy World
              </div>
              <div className={styles.journeyRight}>
                <AboutArrow
                  className={styles.journeyRightImg}
                />
              </div>
            </div>
            <div className={styles.journeyContent}>
              The world journey of btc maid has already begun. Come and join this exciting adventure together!
            </div>
            <Carousel
              autoplay
              effect="fade"
              dotPosition="bottom"
              autoplaySpeed={5000}
              className={styles.journeyCarousel}
              dots={{ className: styles.journeyCarouselDots }}
            >
              <div className={styles.journeyCard}>
                <div className={styles.journeyCardCharacter}>
                  <img
                    src={require('@/assets/home/journey/character1.png')}
                    alt="journeyGirl"
                    className={styles.journeyCardCharacterImg}
                  />
                </div>
                <div className={styles.journeyCardPops}>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem1)}>
                    <JourneyPop1
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Hehe... Is this a mark? A sign that I belong to you?</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem2)}>
                    <JourneyPop1
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Do you need a few pieces of sturdy and durable armor?</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem3)}>
                    <JourneyPop1
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Today is the food festival. Have something to eat, anyway can also satisfy an appetite first.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.journeyCard}>
                <div className={styles.journeyCardCharacter}>
                  <img
                    src={require('@/assets/home/journey/character2.png')}
                    alt="journeyGirl"
                    className={styles.journeyCardCharacterImg}
                  />
                </div>
                <div className={styles.journeyCardPops}>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem1)}>
                    <JourneyPop2
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>It's been a long time since someone has touched me... But it wouldn't matter with you, sir.</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem2)}>
                    <JourneyPop2
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Welcome to the Wonderful General Store. We have a wide variety of items here. Come on in and take a look.</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem3)}>
                    <JourneyPop2
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>It seems like today is a sale on accessories. If you have someone to give a gift to, this would be a great opportunity.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.journeyCard}>
                <div className={styles.journeyCardCharacter}>
                  <img
                    src={require('@/assets/home/journey/character3.png')}
                    alt="journeyGirl"
                    className={styles.journeyCardCharacterImg}
                  />
                </div>
                <div className={styles.journeyCardPops}>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem1)}>
                    <JourneyPop3
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Welcome, customers. We don't have everything, but we've got most things.</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem2)}>
                    <JourneyPop3
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Today we have some mysterious memorabilia for sale that you won't find anywhere else.</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem3)}>
                    <JourneyPop3
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>I mean, you don't go around doing that to just anybody, do you? If it's only me. Well, that's okay then.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.journeyCard}>
                <div className={styles.journeyCardCharacter}>
                  <img
                    src={require('@/assets/home/journey/character4.png')}
                    alt="journeyGirl"
                    className={styles.journeyCardCharacterImg}
                  />
                </div>
                <div className={styles.journeyCardPops}>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem1)}>
                    <JourneyPop4
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Hhaha, it's itchy. Did I get something on my hair?</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem2)}>
                    <JourneyPop4
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Welcome! The Wonderful General Store has a dazzling array of goods; you name it, we've got it.</p>
                    </div>
                  </div>
                  <div className={classNames(styles.journeyCardPopsItem, styles.journeyCardPopsItem3)}>
                    <JourneyPop4
                      className={styles.journeyCardPopsItemImg}
                    />
                    <div className={styles.journeyCardPopsItemText}>
                      <p>Would you like to try some dessert? There's a special offer today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
