import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./navigation";
import { Projects } from "./projects";
import { Separator } from "./ui/separator";
import { CoffeeIcon } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <div className="flex items-center gap-2 text-blue-700 font-bold">
        <Link href="/">
          <CoffeeIcon className="text-blue-700 items-center justify-center" /> BuildMonday
        </Link>
      </div>
      <Separator className="my-4" />
      <Navigation />
      <Separator className="my-4" />
      <Projects />
    </aside>
  );
};
