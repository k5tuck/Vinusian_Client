import React from "react";
import "../LayoutBody/post_login.css";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

function LayoutBody({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}

export default LayoutBody;
