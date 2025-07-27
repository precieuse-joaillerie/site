"use client"
import { useEffect } from "react";

function RedirectStudio() {
  useEffect(() => {
    window.location.href = "https://precieuse.sanity.studio/";
  }, []);
  return null;
}

export default RedirectStudio;
