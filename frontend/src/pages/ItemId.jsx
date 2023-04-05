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

  const [favorite, setFavorite] = useState("inherit"); // TODO: add favorite

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/gums/${params.id}?populate=*`
  );

  const addFavorite = () => {
    if (favorite === "inherit") {
      increaseFavorite();
      setFavorite("error");
    } else {
      decreaseFavorite();
      setFavorite("inherit");
    }
  };

  console.log(data);

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
          <button>Добавить</button>
          <Button type="button" variant="filled" onClick={addFavorite}>
            <Favorite color={favorite} />
          </Button>
        </div>
      </div>
    </div>
  );
}
