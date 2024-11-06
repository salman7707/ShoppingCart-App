"use client"
import store from "@/lib/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface storeProvideProps {
    children:ReactNode;
}

const storeProvider : React.FC<storeProvideProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default storeProvider;