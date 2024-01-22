import { Footer, Navbar } from "@/components";
import React from "react";

const MainLayout = ({ children, navUrlsColorIsBlack }) => {
  return (
    <div>
      <Navbar urlsColorIsBlack={navUrlsColorIsBlack}/>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
