import React from "react";
import Header from "../components/Header/Header";

function OnlyHeaderLayout(props) {
  return (
    <div>
      <Header />
      <>{props.children}</>
    </div>
  );
}

export default OnlyHeaderLayout;
