import React from "react";
import Header from "../../components/client/Header";
import Footer from "../../components/client/Footer";
import { mobile } from "../../enum";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <a href={`https://wa.me/${mobile}`} target="blank">
        <span className="fix-whatsapp-icon d-flex align-items-center justify-content-center">
          <i className="ri-whatsapp-line text-color-white fs-24"></i>
        </span>
      </a>
      <Footer />
    </main>
  );
};

export default Layout;
