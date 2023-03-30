import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/item.module.css";

export default function Item({ id, imageSrc, gum }) {
  return (
    <Link to={`/catalog/${id}`} id={id} style={{ textDecoration: "none" }}>
      <li key={id} className={styles.catalog_item}>
        <div style={{ margin: "0 auto", marginBottom: "10px" }}>
          <img
            src={`http://localhost:1337${imageSrc}`}
            width="250px"
            height="250px"
            alt="gum"
          />
        </div>
        <h3 style={{ margin: "auto 0", lineHeight: "25px" }}>{gum.title}</h3>
        <div className={styles.catalog_buy}>
          <button>Купить</button>
          <h3>{gum.price} ₽</h3>
        </div>
      </li>
    </Link>
  );
}
