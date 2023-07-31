"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
export default function Home() {
  useEffect(() => {
    console.log("in useEffect");
  }, []);
  return <main className={styles.main}>Home Page</main>;
}
