"use client";
import store from "@/lib/store/store";
import React, { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import "aos/dist/aos.css";
import AOS from "aos";

interface StoreProvideProps {
  children: ReactNode;
}

const StoreProvider: React.FC<StoreProvideProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
