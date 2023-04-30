import React from "react";
import useFetch from "../hooks/useFetch";
import { Box, LinearProgress, Alert } from "@mui/material";
import MyCard from "../components/MyCard";

export default function Favorite() { 

  const { data, error, loading, setData } = useFetch(
    `http://localhost:1337/api/favorites?populate=*`
  );

  const handleRemovingFavorite = async (id) => {
    // console.log(favoriteId);
    await fetch(`http://localhost:1337/api/favorites/${id}`, {
      method: "DELETE",
    }).then(setData((data) => data.filter((el) => el.id !== id)));
  };
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
            <MyCard
              key={element.id}
              element={element}
              handleRemovingFavorite={handleRemovingFavorite}
            />
          ))
        ) : (
          <h2 style={{color: "white"}}>Ничего не добавлено..</h2>
        )}
      </Box>
    </Box>
  );
}
