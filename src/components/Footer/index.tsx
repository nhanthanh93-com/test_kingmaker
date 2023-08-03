import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
type NavbarItem = {
  id: number;
  path: string;
  name: string;
};

const navItems: NavbarItem[] = [
  {
    id: 0,
    path: "/",
    name: "KM Shop",
  },
  {
    id: 1,
    path: "/",
    name: "Mission",
  },
  {
    id: 2,
    path: "/",
    name: "Mini Game",
  },
  {
    id: 3,
    path: "/",
    name: "News",
  },
  {
    id: 4,
    path: "/",
    name: "Inbox",
  },
  {
    id: 5,
    path: "/",
    name: "Ranking",
  },
];

export default function Footer() {
  return (
    <React.Fragment>
      <div className={`${styles["footer"]}`}>
        <div className={`${styles["daily-rewards"]} ${styles["image"]}`}>
          <Link href={"/daily-rewards"}>
            <div className={`${styles["back"]} ${styles["image"]}`}></div>
            <div className={`${styles["gem"]} ${styles["image"]}`}></div>
            <div className={`${styles["front"]} ${styles["image"]}`}></div>
            <div className={`${styles["notice"]} ${styles["image"]}`}></div>
          </Link>
        </div>

        <div className={styles["footer-items"]}>
          {navItems &&
            navItems?.map((item: NavbarItem) => (
              <div key={item?.id} className={styles["footer-items--item"]}>
                <Link href={item?.path}>
                  <div className={`${styles["img"]} ${styles["image"]}`}></div>
                  <div className={`${styles["text"]}`}>
                    <span>{item?.name}</span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}
