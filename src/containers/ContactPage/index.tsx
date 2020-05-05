import React, { FC } from "react";

type Props = {};

const ContactPage: FC<Props> = (props) => {
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
      You can contact me via the links at the bottom the sidebar !
    </div>
  );
};

export default ContactPage;
