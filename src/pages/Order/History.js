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
      setData(res.data.data);
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
        label: "Image",
        field: "image",
        sort: "asc",
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Phone No.",
        field: "phone",
        sort: "asc",
      },
      {
        label: "Address",
        field: "Address",
        sort: "asc",
      },
    ],
    rows: Data
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
