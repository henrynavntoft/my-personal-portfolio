"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function App() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (isSelected: boolean): void => {
    setTheme(isSelected ? "dark" : "light");
  };

  return (
    <Switch
      checked={theme === "dark"}
      size="lg"
      color="secondary"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleThemeChange(e.target.checked)
      }
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
