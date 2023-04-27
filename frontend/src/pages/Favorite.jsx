import React from "react";
import useFetch from "../hooks/useFetch";
import {
  Box,
  Button,
  Card,
  LinearProgress,
  Alert,
  CardContent,
} from "@mui/material";

export default function Favorite() {

  const { data, error, loading, setData } = useFetch(
    `http://localhost:1337/api/favorites?populate=*`
  );
  
  const handleRemovingFavorite = async (id) => {
    // console.log(favoriteId);
    await fetch(`http://localhost:1337/api/favorites/${id}`, {
      method: "DELETE",
    }).then(setData(data => data.filter(el => el.id !== id)));
  }
  console.log(data);

  if (loading) return <LinearProgress />;
  if (error) return <Alert>{error}</Alert>;

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={3}
      >
        <h1>Избранное</h1>
      </Box>
      <Box>
        {data ? (
          data.map((element) => (
            <Card
              sx={{ minWidth: 1120, marginBottom: "15px" }}
              key={element.id}
            >
              <CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <h2 style={{ paddingBottom: "10px" }}>
                      {element.attributes.gums.data[0].attributes.title}
                    </h2>
                    <p style={{ fontSize: "14px" }}>
                      {element.attributes.gums.data[0].attributes.description}
                    </p>
                  </Box>
                  <Box textAlign={"right"}>
                    <h2>
                      {element.attributes.gums.data[0].attributes.price} ₽
                    </h2>
                    <Button type="button" onClick={() => handleRemovingFavorite(element.id)}>
                      Убрать
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <h2>Ничего не добавлено</h2>
        )}
      </Box>
    </Box>
  );
}
