import { Box, LinearProgress, Alert, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import useFetch from "../hooks/useFetch";
import MyCard from "../components/MyCard";

export default function Cart() {
  const [dataId, setDataId] = useState([]);
  const [total, setTotal] = useState(0);

  const { data, error, loading, setData } = useFetch(
    "http://localhost:1337/api/carts?populate=*"
  );

  useEffect(() => {
    if (data) {
      data.map((element) => setDataId((prev) => [...prev, element.id]));
      data.map((element) =>
        setTotal(
          (prev) => prev + element.attributes.gums.data[0].attributes.price
        )
      );
    }
  }, [data]);

  // console.log(data);
  const handleRemovingFavorite = async (id) => {
    // console.log(favoriteId);
    await fetch(`http://localhost:1337/api/carts/${id}`, {
      method: "DELETE",
    }).then(setData((data) => data.filter((el) => el.id !== id)));
  };

  const handleFormSubmit = async ({ name, address }) => {
    fetch("http://localhost:1337/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          credential: name,
          address: address,
          gums: dataId,
        },
      }),
    }).then(dataId.map((element) => handleRemovingFavorite(element)));
  };

  const formik = useFormik({
    initialValues: {
      name: "example",
      address: "example",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.address !== "" && values.name !== "" && total != 0)
        handleFormSubmit(values);
      else 
        alert("Пустая корзина")
      resetForm({ values: { address: "", name: "" } });
    },
  });

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
        <h1>Корзина</h1>
      </Box>
      <Box marginBottom={3}>
        {data ? (
          data.map((element) => (
            <MyCard
              key={element.id}
              element={element}
              handleRemovingFavorite={handleRemovingFavorite}
            />
          ))
        ) : (
          <h2 style={{ color: "white" }}>Ничего не добавлено...</h2>
        )}
      </Box>
      <h2 style={{ marginBottom: "40px" }}>Общая сумма: {total} ₽</h2>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{
              backgroundColor: "white",
              width: "300px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            variant="filled"
            id="name"
            name="name"
            label="ФИО"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextField
            sx={{
              backgroundColor: "white",
              width: "300px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            variant="filled"
            id="address"
            name="address"
            label="Адрес"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <Button
            sx={{ backgroundColor: "#ef476f", padding: "15.5px 30px" }}
            variant="contained"
            type="submit"
          >
            Отправить
          </Button>
        </form>
      </Box>
    </Box>
  );
}
