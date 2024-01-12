"use client";
import { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Link,
} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Sandbox", path: "/sandbox" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent> */}

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`} className="text-center">
            <Link
              className="w-full flex justify-center top-20 pt-10 items-center text-8xl"
              href={item.path}
              color="foreground"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
