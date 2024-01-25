import type { Metadata } from "next";
import React, { Children } from "react";

export const metadata: Metadata = {
  title: "Conditions Générales de Services| Sébastien Morazzani-Marigny",
  description: "Conditions Générales de Services",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
