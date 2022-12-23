import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
const History = () => {
  const [Data, setData] = useState();
  const [trigger, setTrigger] = useState(true);

  const fetchData = async () => {
    try {
      const user = await axios.post("/user/updateuser");
      const res = await axios.get("/user/order", {
        id: user._id,
      });
      console.log(res);
      let orders = [];
      for (let i = 0; i < res.data.data.length; i++) {
        let element = {};
        element.transactionId = res.data.data[i].razorpay.paymentId;
        element.orderId = res.data.data[i].razorpay.orderId;
        element.orderDate = new Date(
          res.data.data[i].createdAt
        ).toLocaleDateString("en-US");
        element.amount = res.data.data[i].amount;
        let tq = 0;
        for (let j = 0; j < res.data.data[i].cart.items.length; j++)
          tq += res.data.data[i].cart.items[j].quantity;
        element.quantity = tq;
        element.returnDate = new Date(
          res.data.data[i].returndate
        ).toLocaleDateString("en-US");
        orders.push(element);
      }
      setData(orders);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const data = {
    columns: [
      {
        label: "Order Id",
        field: "orderId",
        sort: "asc",
      },
      {
        label: "Product Quantity",
        field: "quantity",
        sort: "asc",
      },
      {
        label: "Amount",
        field: "amount",
        sort: "asc",
      },
      {
        label: "Transaction ID",
        field: "transactionId",
        sort: "asc",
      },
      {
        label: "Order Date",
        field: "orderDate",
        sort: "asc",
      },
      {
        label: "Return Date",
        field: "returnDate",
        sort: "asc",
      },
    ],
    rows: Data,
  };

  return (
    <div className="history">
      <div className="customerTableArea overflow-hidden p-5">
        <MDBDataTable
          striped
          data={data}
          entries={8}
          entriesOptions={[4, 8, 12]}
        />
      </div>
    </div>
  );
};

export default History;
