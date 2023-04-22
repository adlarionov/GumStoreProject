import React, { useState } from "react";
import { MenuItem, Select, Button, Box } from "@mui/material";
import styles from "../style/category.module.css";
import useFetch from "../hooks/useFetch";

export default function Category({ onCategoryChange }) {
  const { data, error } = useFetch("http://localhost:1337/api/categories");

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onCategoryChange(e.target.value);
  };

  const handleReset = () => {
    setValue("");
    onCategoryChange("")
  };

  if (error) return <div>{error}</div>;

  return (
    <div className={styles.category_container}>
      <h3>Сортировка</h3>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Select
          sx={{
            borderRadius: "6px",
            width: "150px",
            backgroundColor: "white",
            color: "black",
          }}
          variant="outlined"
          id="select-taste"
          value={value}
          placeholder="Сортировка"
          onChange={handleChange}
        >
          {data?.map((category) => (
            <MenuItem key={category.id} value={category.attributes.title}>
              {category.attributes.title}
            </MenuItem>
          ))}
        </Select>
        <Button
          sx={{ padding: "14px 20px", backgroundColor: "#ef476f" }}
          variant="contained"
          color="primary"
          disabled={!value}
          onClick={handleReset}
        >
          Сбросить
        </Button>
      </Box>
    </div>
  );
}
