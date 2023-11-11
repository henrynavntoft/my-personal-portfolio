import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleThemeChange = (newIsSelected: boolean) => {
    setTheme(newIsSelected ? "dark" : "light");
  };

  if (!isClient) return null; // Render nothing on the server

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
