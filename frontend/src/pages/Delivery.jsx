import React from "react";
import styles from "../style/delivery.module.css";
import { YMaps, Map, Placemark, Circle } from "@pbe/react-yandex-maps";

export default function Delivery() {
  return (
    <YMaps query={{ lang: "ru_RU" }}>
      <div className={styles.delivery_container}>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
          width="1100px"
          height="700px"
        >
          <Placemark geometry={[55.751574, 37.57569]} />
          <Circle
            geometry={[[55.755, 37.62], 50000]}
            options={{
              draggable: false,
              fillColor: "#06b50077",
              strokeColor: "#06b55066",
              strokeOpacity: 0.8,
              strokeWidth: 5,
            }}
          />
          <Circle
            geometry={[[55.755, 37.62], 20000]}
            options={{
              draggable: false,
              fillColor: "#ff942977",
              strokeColor: "#ff902166",
              strokeOpacity: 0.8,
              strokeWidth: 5,
            }}
          />
          <Circle
            geometry={[[55.755, 37.62], 10000]}
            options={{
              draggable: false,
              fillColor: "#DB709377",
              strokeColor: "#990066",
              strokeOpacity: 0.8,
              strokeWidth: 5,
            }}
          />
        </Map>
        <div className={styles.text_container}>
            <ul>
                <li>Красная зона - 350 рублей.</li>
                <li>Оранжевая зона - 500 рублей.</li>
                <li>Зеленая зона - 700 рублей.</li>
            </ul>
          <address>
            Наш адрес: г. Москва, Московская улица, дом 6/9. Вторая дверь
          </address>
          <p>Магазин открыт каждый день с 12:00 до 21:00!</p>
        </div>
      </div>
    </YMaps>
  );
}
