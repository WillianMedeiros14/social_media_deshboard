import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from "styled-components";

import GlobalTheme from "./styles/globals";
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Dashboard } from './screens/Dashboard';

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Fragment>
        <GlobalTheme />
        <Dashboard handlePress={toggleTheme} themeDark={theme === "dark" ? true : false }/>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
