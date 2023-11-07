"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newIsSelected: boolean) => {
    setTheme(newIsSelected ? "dark" : "light");
  };

  return (
    <Switch
      isSelected={theme === "dark"}
      size="lg"
      color="secondary"
      onValueChange={handleThemeChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
}
