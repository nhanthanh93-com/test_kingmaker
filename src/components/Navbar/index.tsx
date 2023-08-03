import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
type NavbarItem = {
  id: number;
  path: string;
  name: string;
  img: string;
};

const nabvarItems: NavbarItem[] = [
  {
    id: 1,
    path: "/",
    name: "home",
    img: "/assets/NewAsset/icon_home.png",
  },
  {
    id: 2,
    path: "/",
    name: "favorite",
    img: "/assets/NewAsset/icon_favorite.png",
  },
  {
    id: 3,
    path: "/",
    name: "reload",
    img: "/assets/NewAsset/icon_reload.png",
  },
];

export default function Navbar() {
  return (
    <React.Fragment>
      <div className={styles["navbar"]}>
        <div className={styles["area-left"]}>
          {nabvarItems &&
            nabvarItems?.map((el) => (
              <Link key={el?.id} href={el?.path}>
                <Image src={el.img} width={48} height={48} alt={el?.name} />
              </Link>
            ))}
        </div>
        <div className={styles["area-right"]}>
          <Image
            src={`/assets/NewAsset/icon_search.png`}
            width={48}
            height={48}
            alt={"search"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
