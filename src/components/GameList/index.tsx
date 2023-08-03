"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import { Item } from "./item";
import useDeviceDetect from "@/utils/useDeviceDetect";
export type Game = {
  id: number;
  img: string;
  url: string;
  favorite: boolean;
};

const gameLists: Game[] = [
  {
    id: 0,
    img: "/assets/bannerGame/5_card_poker.png",
    url: "/",
    favorite: true,
  },
  {
    id: 1,
    img: "/assets/bannerGame/7up_7down.png",
    url: "/",
    favorite: false,
  },
  {
    id: 2,
    img: "/assets/bannerGame/32_card.png",
    url: "/",
    favorite: false,
  },
  {
    id: 3,
    img: "/assets/bannerGame/andar_bahar.png",
    url: "/",
    favorite: false,
  },
  {
    id: 4,
    img: "/assets/bannerGame/baccarat.png",
    url: "/",
    favorite: false,
  },
  {
    id: 5,
    img: "/assets/bannerGame/baibuu.png",
    url: "/",
    favorite: false,
  },
  {
    id: 6,
    img: "/assets/bannerGame/baicao.png",
    url: "/",
    favorite: false,
  },
  {
    id: 7,
    img: "/assets/bannerGame/belangkai.png",
    url: "/",
    favorite: false,
  },
  {
    id: 8,
    img: "/assets/bannerGame/baccarat.png",
    url: "/",
    favorite: false,
  },
];

const Desktop = () => {
  return (
    <Swiper
      className={styles["swiper"]}
      spaceBetween={20}
      slidesPerView={7}
      loop={true}
      freeMode={true}
      modules={[FreeMode]}
    >
      {gameLists &&
        gameLists?.map((el) => (
          <SwiperSlide key={el?.id}>
            <Item el={el} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
const Mobile = () => {
  return (
    <React.Fragment>
      {gameLists && gameLists?.map((el) => <Item key={el?.id} el={el} />)}
    </React.Fragment>
  );
};

export default function GameList() {
  const ref = React.useRef<HTMLInputElement>(null);
  const { isMobile } = useDeviceDetect();

  return (
    <React.Fragment>
      <div
        id="game-list"
        ref={ref}
        className={`${styles["game-list"]} ${isMobile ? styles["mobile"] : ""}`}
      >
        {!isMobile && <Desktop />}
        {isMobile && <Mobile />}
      </div>
    </React.Fragment>
  );
}
