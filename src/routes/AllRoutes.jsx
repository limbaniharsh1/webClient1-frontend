import React from "react";
import { CLIENT } from "./routeConstants";
import Home from "../pages/client/home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/client/aboutUs";
import Accreditation from "../pages/client/accreditation";
import ContactUs from "../pages/client/contactUs";
import Participation from "../pages/client/participation";
import clientLayout from "../pages/client/Layout";
import Layout from "../pages/client/Layout";

const AllRoutes = () => {
  const client = CLIENT;
  const clientRoutes = [
    { path: client.INDEX, component: <Home /> },
    { path: client.ABOUT_US, component: <AboutUs /> },
    { path: client.ACCREDITATION, component: <Accreditation /> },
    { path: client.CONTACT_US, component: <ContactUs /> },
    { path: client.PARTICIPATION, component: <Participation /> },
  ];

  return (
    <Routes>
      {clientRoutes?.map((item, index) => {
        const path = item.path;
        const component = item.component;
        return (
          <Route
            key={index}
            path={path}
            element={<Layout>{component}</Layout>}
          />
        );
      })}
    </Routes>
  );
};

export default AllRoutes;
