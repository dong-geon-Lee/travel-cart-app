import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fcfcfc;
    width: 100vw;
    height: 100vh;
    position: relative;
  }
`;

const GlobalStyles = () => {
  return <Global styles={style} />;
};

export default GlobalStyles;
