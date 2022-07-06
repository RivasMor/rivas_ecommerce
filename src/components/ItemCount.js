import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [items, setItems] = useState(1);
  const more = () => {
    if (items < stock) {
      setItems(items + 1);
    }
  };
  const less = () => {
    if (items <= stock && items > initial) {
      setItems(items - 1);
    }
  };
  const onAddLocal = () => {
    onAdd(items);
  };
  const buttonStyles = {
    backgroundColor: "#ab6f45",
    "&:hover": { backgroundColor: "#b9935a", opacity: [0.9, 0.8, 0.7] },
  };

  return (
    <>
      <ButtonGroup variant="outlined" color="secondary" sx={{ margin: "7%" }}>
        <Button sx={{ color: "#b9935a" }} onClick={less}>
          -
        </Button>
        <Button>{items}</Button>
        <Button onClick={more}>+</Button>

        <Button onClick={onAddLocal} variant="contained" sx={buttonStyles}>
          Add to Cart
        </Button>
      </ButtonGroup>
    </>
  );
};
export default ItemCount;
