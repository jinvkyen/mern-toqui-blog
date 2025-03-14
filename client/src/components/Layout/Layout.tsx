import React from "react";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen w-screen flex flex-col bg-toquiPrimary'>
      <Header />
      <main className='flex-grow'>{children}</main>
    </div>
  );
};

export default Layout;
