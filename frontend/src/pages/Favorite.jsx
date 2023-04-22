import React from "react";
import useFavoriteStore from "../hooks/useFavoriteStore";
import { Box, Button } from "@mui/material";

export default function Favorite() {
  const removeAllFavorite = useFavoriteStore(
    (state) => state.removeAllFavorite
  );

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <h1>Избранное</h1>
      <Button
        onClick={removeAllFavorite}
        variant="contained"
        sx={{ backgroundColor: "#ef476f" }}
      >
        Убрать Все
      </Button>
    </Box>
  );
}
