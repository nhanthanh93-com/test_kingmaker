import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Game } from ".";

type ItemProps = PropsWithChildren & {
  el?: Game;
};

export const Item = ({ el }: ItemProps) => {
  const [favorite, setFavorite] = React.useState(el?.favorite);

  const handleToggle = () => {
    setFavorite(!favorite);
  };
  return (
    <React.Fragment>
      <div className={`${styles["game-list--item"]}`}>
        <div
          className={`${styles["favorite"]} ${
            favorite ? styles["active"] : ""
          } `}
          onClick={handleToggle}
        ></div>
        <Link href={el?.url || "/"}>
          <Image
            src={el?.img || "/assets/bannerGame/default.png"}
            alt="JackPot"
            width={390}
            height={560}
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

Item.displayName = "Item";
