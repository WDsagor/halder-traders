"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CustomProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <div className="mt-[-60px]">{children}</div>
      <Footer></Footer>
    </Provider>
  );
};

export default CustomProvider;
