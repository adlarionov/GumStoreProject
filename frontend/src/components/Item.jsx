import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/item.module.css";

export default function Item({ id, imageSrc, gum }) {
  const handleCart = async () => {
    await fetch("http://localhost:1337/api/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          gums: id,
        },
      }),
    });
  };

  return (
    <li key={id} className={styles.catalog_item}>
      <Link to={`/catalog/${id}`} id={id} style={{ textDecoration: "none" }}>
        <div style={{ margin: "0 auto", marginBottom: "10px" }}>
          <img
            src={`http://localhost:1337${imageSrc}`}
            width="250px"
            height="250px"
            alt="gum"
          />
        </div>
      </Link>

      <h3 style={{ margin: "auto 0", lineHeight: "25px" }}>{gum.title}</h3>
      <div className={styles.catalog_buy}>
        <button onClick={handleCart}>Купить</button>
        <h3>{gum.price} ₽</h3>
      </div>
    </li>
  );
}
