import { Alert, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import Category from "../components/Category";
import Item from "../components/Item";
import useFetch from "../hooks/useFetch";
import styles from "../style/catalog.module.css";

export default function Catalog() {
  const [categories, setCategories] = useState([]);

  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/gums?populate=photo"
  );

  console.log(data);

  if (loading) return <LinearProgress />;
  if (error) return <Alert>{error}</Alert>;

  return (
    <div>
      <h1 className={styles.catalog_title}>Каталог</h1>
      {/* <Category categories={categories} /> */}

      <ul className={styles.catalog_list}>
        {data.map((element) => (
          <Item
            id={element.id}
            key={element.id}
            imageSrc={element.attributes.photo.data.attributes.url}
            gum={{
              title: element.attributes.title,
              price: element.attributes.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
}
