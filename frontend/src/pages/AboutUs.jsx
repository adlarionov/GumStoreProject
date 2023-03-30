import React from "react";
import styles from "../style/aboutUs.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function AboutUs() {
  return (
    <YMaps query={{ lang: "ru_RU" }}>
      <div className={styles.about_container}>
        <address>
          Наш адрес: г. Москва, Московская улица, дом 6/9. Вторая дверь
        </address>
        <p>Магазин открыт каждый день с 12:00 до 21:00!</p>
        <p>
          Телефон:<a href="tel:+71231231231">+7(915)123-45-67</a>
        </p>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 16 }}
          width="1100px"
          height="550px"
        >
          <Placemark geometry={[55.751574, 37.575690]} />
        </Map>
      </div>
    </YMaps>
  );
}
