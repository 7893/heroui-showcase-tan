"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ShowcasePanel from "@/components/ShowcasePanel";

export default function Home() {
  const [active, setActive] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar active={active} onSelect={setActive} />
        <ShowcasePanel active={active} />
      </div>
    </div>
  );
}
