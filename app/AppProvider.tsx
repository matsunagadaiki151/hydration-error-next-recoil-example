"use client";

import React from "react";
import { RecoilRoot } from "recoil";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default AppProvider;
