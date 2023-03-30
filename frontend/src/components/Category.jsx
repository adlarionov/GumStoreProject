import React, { useState } from "react";
import { Select } from "@mui/material";
import styles from '../style/category.module.css';

export default function Category({ categories }) {
  const [taste, setTaste] = useState('');

  const handleChange = (e) => {
    setTaste(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className={styles.category_container}>
      <h3>Сортировка</h3>
      <Select
        style={{border: '1px solid white'}}
        variant="outlined"
        id='select-taste'
        value={taste}
        label='taste'
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.attributes.title}>
            {category.attributes.title}
          </option>
        ))}
      </Select>
    </div>
  );
}
