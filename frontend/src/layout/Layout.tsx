import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />

      <div className="flex-grow-1">
        <Navbar />

        <main className="p-4">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
