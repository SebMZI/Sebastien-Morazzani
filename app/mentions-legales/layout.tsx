import type { Metadata } from "next";
import React, { Children } from "react";

export const metadata: Metadata = {
  title: "Mentions Légales| Sébastien Morazzani-Marigny",
  description: "Mentions Légales",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
