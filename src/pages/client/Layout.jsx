import React from "react";
import Header from "../../components/client/Header";
import Footer from "../../components/client/Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
