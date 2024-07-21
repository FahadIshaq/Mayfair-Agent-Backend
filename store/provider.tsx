"use client"
import store from "./store";
import {  ReactNode } from "react";
import { FC } from "react";
import { Provider } from "react-redux";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {

  return <Provider store={store}>{children}</Provider>
};

export default Providers;
