"use client"
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export const initializeGTM = (gtmId : string) => {
  TagManager.initialize({ gtmId });
};

export const useGTM = (gtmId : string) => {
  useEffect(() => {
    initializeGTM(gtmId);
  }, [gtmId]);
};