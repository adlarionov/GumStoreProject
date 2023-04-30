import React from "react";
import { Card, CardContent, Box, Button } from "@mui/material";

export default function MyCard({ element, handleRemovingFavorite }) {

  return (
    <Card sx={{ minWidth: 1120, marginBottom: "15px" }} key={element.id}>
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
            <h2>{element.attributes.gums.data[0].attributes.price} ₽</h2>
            <Button
              type="button"
              onClick={() => handleRemovingFavorite(element.id)}
            >
              Убрать
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
