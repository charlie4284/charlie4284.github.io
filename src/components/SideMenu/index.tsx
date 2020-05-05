import React, { FC, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "components/Custom/Button";
import { ThemeCtx } from "contexts/Theme";
import styles from "./index.module.css";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron.svg";
import { ReactComponent as FaceIcon } from "assets/icons/face.svg";
import Faceimg from "assets/face.png";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as InstaIcon } from "assets/icons/instagram.svg";
import { ReactComponent as SoundcloudIcon } from "assets/icons/soundcloud.svg";
import { ReactComponent as EmailIcon } from "assets/icons/email.svg";
import GithubImg from "assets/icons/github32.png";

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
      <ContactIconSet />
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

const ContactIconSet = () => (
  <div
    style={{
      position: "absolute",
      bottom: "1em",
      height: "1em",
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <a href="https://github.com/charlie4284" style={{ flex: 1 }}>
      <img src={GithubImg} alt="github" height={"100%"} />
    </a>
    <a href="https://www.facebook.com/okeydokeydonkey" style={{ flex: 1 }}>
      <FacebookIcon height="100%" />
    </a>
    <a href="https://www.instagram.com/yoon.yanks/" style={{ flex: 1 }}>
      <InstaIcon height="100%" />
    </a>
    <a href="https://soundcloud.com/okeydokeydonkey" style={{ flex: 1 }}>
      <SoundcloudIcon height="100%" />
    </a>
    <EmailIcon
      height="100%"
      style={{ cursor: "pointer" }}
      onClick={() => emailToClipboard()}
    />
  </div>
);

function emailToClipboard() {
  navigator.clipboard.writeText("charlie4284@gmail.com");
  alert("Email copied to clipboard");
}

export default SideMenu;
