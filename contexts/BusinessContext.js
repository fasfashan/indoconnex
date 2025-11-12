"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BusinessContext = createContext();

export function BusinessProvider({ children }) {
  const [userBusinessPages, setUserBusinessPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("userBusinessPages");
      if (saved) {
        try {
          setUserBusinessPages(JSON.parse(saved));
        } catch (error) {
          console.error("Error loading business pages:", error);
        }
      }
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage whenever userBusinessPages changes
  useEffect(() => {
    if (typeof window !== "undefined" && !isLoading) {
      localStorage.setItem(
        "userBusinessPages",
        JSON.stringify(userBusinessPages)
      );
    }
  }, [userBusinessPages, isLoading]);

  const createBusinessPage = (businessData) => {
    const newBusiness = {
      id: Date.now().toString(),
      ...businessData,
      createdAt: new Date().toISOString(),
    };
    setUserBusinessPages((prev) => [...prev, newBusiness]);
    return newBusiness;
  };

  const hasBusinessPage = userBusinessPages.length > 0;

  const value = {
    userBusinessPages,
    hasBusinessPage,
    isLoading,
    createBusinessPage,
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusinessContext() {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error("useBusinessContext must be used within BusinessProvider");
  }
  return context;
}
