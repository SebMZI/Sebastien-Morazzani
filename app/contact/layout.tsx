import type { Metadata } from "next";
import React, { Children } from "react";

export const metadata: Metadata = {
  title: "Contact | Sébastien Morazzani-Marigny",
  description:
    "Contact | Sébastien Morazzani-Marigny. Parlons de votre futur projet. Il est important d'échanger afin de mieux comprendre vos besoins et vos attentes pour délivrer un site web exceptionel.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
