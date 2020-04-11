import React, { FC } from "react";
import styles from "./index.module.css";
import DaytaSeminar from "assets/dayta.jpeg";

const Terminal: FC<any> = () => {
  return (
    <div
      className={styles.Terminal}
      style={{
        maxWidth: 800,
        width: "100%",
        borderRadius: 5,
        boxShadow: "-4px 6px 28px 0px rgba(0,0,0,0.75)",
      }}
    >
      <TerminalBanner />
      <TerminalText />
    </div>
  );
};

const TerminalBanner = () => (
  <div
    style={{
      width: "100%",
      height: "1.5em",
      backgroundColor: "#d2d3d6",
      borderRadius: 5,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      position: "relative",
    }}
  >
    <ButtonSegment />
  </div>
);

const ButtonSegment = () => (
  <div
    style={{
      marginLeft: "1em",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    }}
  >
    <CloseButton />
    <MinimizeButton />
    <ExpandButton />
    <div style={{ margin: "auto" }}>$HOME</div>
  </div>
);

const CloseButton = () => (
  <div
    style={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      position: "absolute",
      backgroundColor: "#FF3D33",
    }}
  />
);

const MinimizeButton = () => (
  <div
    style={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      position: "absolute",
      left: 36,
      backgroundColor: "#FAD02C",
    }}
  />
);

const ExpandButton = () => (
  <div
    style={{
      width: 14,
      height: 14,
      borderRadius: "50%",
      position: "absolute",
      left: 56,
      backgroundColor: "#C8DF52",
    }}
  />
);

const TerminalText = () => (
  <div
    style={{
      backgroundColor: "#1e1e1e",
      paddingTop: "1em",
      display: "flex",
      flexDirection: "column",
      color: "#fff",
      padding: 8,
      lineHeight: "1.5em",
    }}
  >
    <div
      style={{
        alignItems: "baseline",
        display: "flex",
      }}
    >
      <BaseText /> $HOME <div id={styles.cursor} />
    </div>
    <span>bash: /HongKong/NorthPoint: Is a directory</span>
    <span>
      South Korean national &nbsp;
      <span role="img" aria-label={"korean-flag"}>
        🇰🇷
      </span>
      , childhood in Slovakia &nbsp;
      <span role="img" aria-label={"slovakia-flag"}>
        🇸🇰
      </span>
      &nbsp; & studying/working in HongKong &nbsp;
      <span role="img" aria-label={"hk-flag"}>
        🇭🇰
      </span>
    </span>
    <span>
      <BaseText />
      whoami
    </span>
    <span>British International School of Bratislava class of 2013</span>
    <span>
      Bachelor of Computer Engineering (CPEG) at Hong Kong University of Science
      and Technology
    </span>
    <span>ROK Marine Corps 1195</span>
    <span>Korean Red Cross Lifeguard</span>
    <span>Ex-DJ</span>
    <span>
      Head Software engineer @ &nbsp;
      <a href="https://dayta.ai/" style={{ color: "#fff" }}>
        Dayta-ai
      </a>
    </span>
    <div style={{ maxWidth: 500, width: "100%" }}>
      <img src={DaytaSeminar} alt="Dayta-seminar" style={{ width: "100%" }} />
    </div>
    <span>
      <BaseText />
      kubectl describe pod what-i-like-to-do
    </span>
    <span>
      I write code and read code. I believe software engineering to be an
      elegant art of creating solutions. <br />
      What gets me up in the morning is mostly curiosity. You can take a look at
      my github Codiary repo to see what I wonder, how I wonder and why I
      wonder. <br />
      (Menu svg icon by @Rachel Chu) // hoverable
    </span>
    <span>
      <BaseText />
      weapons of choice
    </span>
    <span>
      Golang(gRPC, REST, software, ...etc) + assembly, Javascript(ReactJS,
      NodeJS, D3JS), Python(mostly ML & calculation heavy work), Kubernetes,
      Docker, AWS(DynamoDB, Cognito, ...) ...etc
    </span>
  </div>
);

const BaseText = () => <span style={{ color: "#2098d1" }}>Yanks@Home:</span>;

export default Terminal;
