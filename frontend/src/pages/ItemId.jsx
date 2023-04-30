import { Alert, LinearProgress, Chip, Button } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "../style/itemId.module.css";
import Favorite from "@mui/icons-material/Favorite";
import useFavoriteStore from "../hooks/useFavoriteStore";

export default function ItemId() {
  const params = useParams();

  const increaseFavorite = useFavoriteStore((state) => state.increaseFavorite);
  const decreaseFavorite = useFavoriteStore((state) => state.decreaseFavorite);

  const [favorite, setFavorite] = useState("inherit");
  const [favoriteId, setFavoriteId] = useState(undefined);

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/gums/${params.id}?populate=*`
  );

  const handleAddingFavorite = async () => {
    await fetch("http://localhost:1337/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          gums: params.id,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => setFavoriteId(() => data.data.id));

      increaseFavorite();
      setFavorite("error");
    
      console.log(favoriteId)
  };

  const handleRemovingFavorite = async () => {
    // console.log(favoriteId);
    await fetch(`http://localhost:1337/api/favorites/${favoriteId}`, {
      method: "DELETE",
    });

    decreaseFavorite();
    setFavorite("inherit");
    setFavoriteId(() => undefined)
  }

  const handleCart = async () => {
    await fetch("http://localhost:1337/api/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          gums: params.id,
        },
      }),
    })
  }

  // console.log(data);

  if (loading) return <LinearProgress />;
  if (error) return <Alert>{error}</Alert>;

  /**
   * Страница отдельного элемента каталога
   * @example
   * // получаем идентификатор элемента
   * params = useParams();
   * // вставляем в элемент каталога
   * <ItemId id={params.id} />
   */
  return (
    <div id={params.id} className={styles.itemId_container}>
      <div>
        <img
          src={`http://localhost:1337${data.attributes.photo.data.attributes.url}`}
          width="500px"
          height="500px"
          alt="gum"
        />
      </div>
      <div className={styles.right_container}>
        <h1>{data.attributes.title}</h1>
        <p>{data.attributes.description}</p>
        <div className={styles.chip_container}>
          {data.attributes.categories.data.map((element) => {
            return (
              <Chip
                key={element.id}
                style={{ marginLeft: "5px" }}
                label={element.attributes.title}
                variant={"outlined"}
                color={"info"}
              />
            );
          })}
        </div>
        <h2>{data.attributes.price} ₽</h2>
        <div className={styles.cart_container}>
          <button onClick={handleCart}>Добавить</button>
          {
            favorite == "inherit" ?
            <Button type="button" variant="filled" onClick={handleAddingFavorite}>
              <Favorite color={"inherit"} />
            </Button>
            :
            <Button type="button" variant="filled" onClick={handleRemovingFavorite}>
              <Favorite color={"error"} />
            </Button>
          }
        </div>
      </div>
    </div>
  );
}
