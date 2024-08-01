"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store";
import { PropsWithChildren } from "react";

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
