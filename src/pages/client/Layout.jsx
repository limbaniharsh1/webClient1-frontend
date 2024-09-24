import React from "react";
import Header from "../../components/client/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
