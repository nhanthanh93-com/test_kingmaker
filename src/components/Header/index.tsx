"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import useDeviceDetect from "@/utils/useDeviceDetect";

export default function Header() {
  const { isMobile } = useDeviceDetect();
  return (
    <React.Fragment>
      <div className={`${styles["header"]}`}>
        <div className={`${styles["container"]}`}>
          <div className={`${styles["reward"]}`}>
            <span className={`${styles["number"]}`}>360,146,334</span>
            <span className={`${styles["code"]}`}>THB</span>
          </div>

          <div className={`${styles["area-left"]}`}>
            <div className={`${styles["profile"]}`}>
              <div
                className={`${styles["profile-avatar"]}`}
                style={{
                  backgroundImage: `url('/assets/NewAsset/profile_imgtemp7.png')`,
                }}
              ></div>
            </div>

            <div className={`${styles["info"]}`}>
              <div className={`${styles["info-name"]}`}>
                <span className={`${styles["info-name--level"]}`}>Lv.1</span>
                <span className={`${styles["info-name--nickname"]}`}>
                  Kingmaker#1
                </span>
              </div>
              <div className={`${styles["info-bets"]}`}>
                <span>0 / 20 Bets</span>
              </div>
            </div>

            <div className={`${styles["resource"]}`}>
              <div className={`${styles["resource-item"]}`}>
                <Image
                  src={"/assets/NewAsset/icon_coin.png"}
                  height={44}
                  width={40}
                  alt="icon"
                />
                <span>91.50</span>
              </div>
              <div className={`${styles["resource-item"]}`}>
                <Image
                  src={"/assets/NewAsset/icon_diamond.png"}
                  height={44}
                  width={40}
                  alt="icon"
                />
                <span>2,082</span>
              </div>
            </div>
          </div>
          <div className={`${styles["area-right"]}`}>
            <div className={`${styles["deposit"]}`}>
              <div className={`${styles["deposit-bg"]}`}>
                <div className={`${styles["deposit-bg--text"]}`}>
                  <span>Debosit</span>
                  <span>Withdrawal</span>
                </div>
              </div>
            </div>
            <div className={`${styles["main-button"]}`}>
              <div className={styles["icon"]}></div>
              <span>Mainpage</span>
            </div>
            <div className={`${styles["menu"]}`}>
              <button></button>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className={`${styles["header-bottom"]}`}>
          <div className={`${styles["container"]}`}>
            <div className={`${styles["area-left"]}`}>
              <div className={`${styles["profile"]}`}>
                <div
                  className={`${styles["profile-avatar"]}`}
                  style={{
                    backgroundImage: `url('/assets/NewAsset/profile_imgtemp7.png')`,
                  }}
                ></div>
              </div>

              <div className={`${styles["info"]}`}>
                <div className={`${styles["info-name"]}`}>
                  <span className={`${styles["info-name--level"]}`}>Lv.1</span>
                  <span className={`${styles["info-name--nickname"]}`}>
                    Kingmaker#1
                  </span>
                </div>
                <div className={`${styles["info-bets"]}`}>
                  <span>0 / 20 Bets</span>
                </div>
              </div>
            </div>
            <div className={`${styles["area-right"]}`}>
              <div className={`${styles["deposit"]}`}>
                <div className={`${styles["deposit-bg"]}`}>
                  <div className={`${styles["deposit-bg--text"]}`}>
                    <span>Debosit / Withdrawal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
