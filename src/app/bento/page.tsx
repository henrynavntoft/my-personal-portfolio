"use client";

import { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);
import ThemeSwitcher from "../components/themeSwitcher";

export default function Bento() {
  const [layouts, setLayouts] = useState<{ lg: Layout[] }>({
    lg: [
      { i: "a", x: 0, y: 0, w: 2, h: 2 },
      { i: "b", x: 2, y: 0, w: 1, h: 4 },
      { i: "c", x: 3, y: 0, w: 1, h: 2 },
      { i: "d", x: 0, y: 0, w: 2, h: 2 },
    ],
  });

  const onLayoutChange = (newLayout: Layout[], layouts: { lg: Layout[] }) => {
    setLayouts({ lg: newLayout });
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      onLayoutChange={onLayoutChange}
      breakpoints={{ lg: 800, sm: 600 }}
      cols={{ lg: 4, sm: 2 }}
      rowHeight={150}
      containerPadding={[50, 50]}
      isResizable={true}
      isDraggable={true}
    >
      <div
        key="a"
        className="p-10 bg-foreground text-background rounded-3xl shadow-md hover:shadow-xl transition"
      >
        <h1>Henry Navntoft</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quia
          impedit iure adipisci quisquam laborum sed numquam, repudiandae
          doloribus asperiores.
        </p>
      </div>
      <div
        key="b"
        className="bg-foreground text-background flex justify-center rounded-3xl shadow-md hover:shadow-xl transition"
      ></div>
      <div
        key="c"
        className="bg-foreground text-background flex justify-center rounded-3xl shadow-md hover:shadow-xl transition"
      >
        <ThemeSwitcher />
      </div>
      <div
        key="d"
        className="bg-foreground text-background flex justify-center rounded-3xl shadow-md hover:shadow-xl transition"
      ></div>
    </ResponsiveGridLayout>
  );
}
