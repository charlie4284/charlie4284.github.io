import React, { FC } from "react";
import Terminal from "./Terminal";

type Props = {};

const Homepage: FC<Props> = (props) => {
  return (
    <div
      style={{
        marginTop: "2em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Terminal />
    </div>
  );
};

export default Homepage;
