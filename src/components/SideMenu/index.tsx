import React, { FC, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "components/Custom/Button";
import { ThemeCtx } from "contexts/Theme";
import styles from "./index.module.css";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron.svg";
import { ReactComponent as FaceIcon } from "assets/icons/face.svg";
import Faceimg from "assets/face.png";

interface MenuItem {
  icon: string;
  name: string;
  path: string;
}

type MenuProps = { items: Array<MenuItem> };

const SideMenu: FC<MenuProps> = ({ items }) => {
  const { theme } = useContext(ThemeCtx);
  const [hovered, setHovered] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.SideMenu}
      style={
        open
          ? { left: 0, backgroundColor: theme.Background }
          : { left: -240, backgroundColor: theme.Background }
      }
    >
      <div
        className={styles.SideMenuButton}
        style={{ backgroundColor: theme.Background }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <ChevronIcon
          style={{
            width: 16,
            height: 16,
            transform: open ? "" : "rotate(180deg)",
          }}
          stroke={theme.Primary}
          fill={theme.Primary}
        />
      </div>
      <div className={styles.ProfileImg}>
        <img src={Faceimg} alt="profile_img" id={styles.ProfileImage} />
        <FaceIcon />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginBottom: "0.5em" }}>YangSoo Yoon</h1>
        <p style={{ marginTop: 0 }}>
          Full stack developer & software engineer/architect
        </p>
      </div>
      {items.map((item) => (
        <Item
          key={item.name}
          icon={item.icon}
          name={item.name}
          path={item.path}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

interface ItemProps extends MenuItem {
  hovered: string;
  setHovered: React.Dispatch<React.SetStateAction<string>>;
}

const Item: FC<ItemProps> = ({ icon, name, path, hovered, setHovered }) => {
  const { theme } = useContext(ThemeCtx);
  return (
    <Link to={path}>
      <Button
        onMouseEnter={() => setHovered(name)}
        onMouseLeave={() => setHovered("")}
        style={{
          backgroundColor: theme.Background,
          border: "none",
          padding: 0,
          marginBottom: "1em",
        }}
      >
        {name}
      </Button>
    </Link>
  );
};

export default SideMenu;
