import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles";
import axios from "axios";

function ProductDetails(props) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  async function fetchData() {
    try {
      const res = await axios.get("/user/getcart");
      setCart(res.data.data.user.cart.items);
      let t = 0;
      for (let i = 0; i < res.data.data.user.cart.items.length; i++)
        t +=
          res.data.data.user.cart.items[i].quantity *
            res.data.data.user.cart.items[i].productId.rentalprice *
            res.data.data.user.cart.items[i].duration +
          res.data.data.user.cart.items[i].productId.deposit;
      setTotal(t);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <List disablePadding>
      {cart.map((product) => (
        <ListItem className={classes.listItem} key={product.productId.name}>
          <ListItemText primary="Name" secondary={product.productId.name} />
          <ListItemText primary="Quantity" secondary={product.quantity} />
          <ListItemText primary="Duration" secondary={product.duration} />
          <ListItemText primary="Rental Price" secondary={`₹ ${product.productId.rentalprice}`} />
          <ListItemText primary="Deposit" secondary={`₹ ${product.productId.deposit}`} />
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" className={classes.total}>
          ₹ {total}
        </Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
