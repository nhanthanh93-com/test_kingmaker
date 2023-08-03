"use client";
import React from "react";
import styles from "./page.module.scss";
import GameList from "@/components/GameList";
export default function Home() {
  return (
    <React.Fragment>
      <main className={styles["main"]}>
        <GameList />
      </main>
    </React.Fragment>
  );
}
