import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function Search({ onSearchChange }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    onSearchChange(value);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      gap={1}
      alignItems={"center"}
    >
      <TextField
        sx={{ width: "250px", borderRadius: "8px" }}
        style={{ backgroundColor: "white" }}
        variant="filled"
        value={value}
        label={"Название"}
        onChange={handleChange}
      />
      <Button
        sx={{ padding: "16px 20px" }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Поиск
      </Button>
    </Box>
  );
}
