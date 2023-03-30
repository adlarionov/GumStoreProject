import React from "react";
import styles from "../style/footer.module.css";
import { Link } from "react-router-dom";
import { GitHub, Telegram, Map } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_contacts}>
        <a href="tel:+79151234567">+7(915)123-45-67</a>
        <address>г. Москва, Московская улица, дом 6/9</address>
      </div>
      <div>
        <Link to="/catalog" className={styles.link}>
          <h1 className={styles.logo}>Geek Store</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://github.com/payne3105">
              <GitHub />
            </a>
          </li>
          <li>
            <a href="https://telegram.org/adlarionov">
              <Telegram />
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/P1bK6RF3CmYhBSaRA">
              <Map />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
