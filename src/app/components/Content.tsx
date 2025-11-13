"use client";
import { useEffect, useState } from "react";
import MainContent from "./MainContent";
export default function Content() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "i") ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "S") ||
        (e.ctrlKey && e.key === "s") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextmenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return <>{showContent && <MainContent />}</>;
}
