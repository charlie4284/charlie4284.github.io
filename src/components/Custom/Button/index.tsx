import React, { FC, useContext } from "react";
import { ThemeCtx } from "contexts/Theme";
import styles from "./index.module.css";

const Button: FC<any> = ({ children, ...props }) => {
  const { theme } = useContext(ThemeCtx);
  return (
    <button
      className={styles.CustomButton}
      style={{
        color: theme.Text,
        backgroundColor: theme.Background,
        border: "none",
        boxShadow: "none",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
