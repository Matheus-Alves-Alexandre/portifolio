"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTheme } from "./UseTheme";

export default function ThemeChange() {
  const { theme, setTheme } = useTheme();
  const themes = [
    "dark",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "forest",
    "lofi",
    "black",
    "luxury",
    "dracula",
    "business",
    "night",
    "coffee",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDevelopment = process.env.NODE_ENV === "development";

      if (isDevelopment) {
        console.warn = () => {};
      }
    }
    localStorage.setItem("theme", theme as string);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  return (
    <div className="flex px-2 py-4 bg-base-100 text-base-content">
      <div className="dropdown  ">
        <label tabIndex={0} className="m-1 btn">
          {theme}
        </label>
        <ul
          tabIndex={0}
          className=" shadow-xl menu-vertical dropdown-content flex flex-col z-10 h-60 min-w-max overflow-scroll overflow-x-hidden bg-base-100 rounded-box "
        >
          {themes.map((theme, index) => (
            <li key={index}>
              <button
                className=" btn  flex justify-center items-center overflow-clip text-md mx-1 my-1 rounded-md hover:text-neutral-focus hover:bg-neutral-content"
                onClick={() => {
                  setTheme(theme);
                }}
              >
                <span>{theme}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
