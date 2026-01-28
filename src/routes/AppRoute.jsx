import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>

        {/* not found route */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
};

export default AppRoute;
