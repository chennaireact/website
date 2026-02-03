"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ScrollLogoContextType {
  isLogoDocked: boolean;
  setIsLogoDocked: (value: boolean) => void;
  targetRect: DOMRect | null;
  setTargetRect: (rect: DOMRect | null) => void;
}

const ScrollLogoContext = createContext<ScrollLogoContextType | undefined>(undefined);

export function ScrollLogoProvider({ children }: { children: ReactNode }) {
  const [isLogoDocked, setIsLogoDocked] = useState(false);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  return <ScrollLogoContext.Provider value={{ isLogoDocked, setIsLogoDocked, targetRect, setTargetRect }}>{children}</ScrollLogoContext.Provider>;
}

export function useScrollLogo() {
  const context = useContext(ScrollLogoContext);
  if (context === undefined) {
    throw new Error("useScrollLogo must be used within a ScrollLogoProvider");
  }
  return context;
}
