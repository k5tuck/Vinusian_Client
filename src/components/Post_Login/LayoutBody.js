import React from "react";
// import "./Post_Login.css";
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
