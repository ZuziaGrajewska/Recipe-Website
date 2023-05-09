import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import RecipeIndex from "./RecipeIndex";
import Layout from "./Layout.jsx";
import HomeNav from "./HomeNav.jsx";

function NavBar() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeNav />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="RecipeIndex" element={<RecipeIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }


  
  export default NavBar;
  