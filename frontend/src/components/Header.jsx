import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/header.module.css";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import useFavoriteStore from "../hooks/useFavoriteStore";

export default function Header() {
  const favorite = useFavoriteStore((state) => state.favorite);

  return (
    <header className={styles.header_container}>
      <Link to="/catalog" className={styles.link}>
        <h1 className={styles.logo}>Geek Store</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/catalog" className={styles.link}>
              Каталог
            </Link>
          </li>
          <li>
            <Link to="/delivery" className={styles.link}>
              Доставка
            </Link>
          </li>
          <li>
            <Link to="/about_us" className={styles.link}>
              О нас
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/favorite" className={styles.link}>
              <Badge badgeContent={favorite} color="error">
                <Favorite />
              </Badge>
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.link}>
              {/* TODO: fix route */}
              <ShoppingCartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
