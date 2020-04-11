import React from "react";
import styles from "./index.module.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeCtx, useTheme } from "contexts/Theme";
import SideMenu from "components/SideMenu";
import Homepage from "containers/Homepage";
import ContactPage from "containers/ContactPage";

const routes = [
  {
    icon: "",
    name: "Home",
    path: "/",
    component: Homepage,
  },
  {
    icon: "",
    name: "Portfolio",
    path: "/portfolio",
    component: Homepage,
  },
  {
    icon: "",
    name: "Notes",
    path: "/notes",
    component: Homepage,
  },
  {
    icon: "",
    name: "Contact",
    path: "/contact",
    component: ContactPage,
  },
];

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      <div className={styles.App} style={{ backgroundColor: theme.Background }}>
        <SideMenu items={routes} />
        <div className={styles.Page}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.name}
                component={route.component}
                path={route.path}
                exact
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </ThemeCtx.Provider>
  );
}

export default App;
