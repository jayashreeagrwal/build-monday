import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./navigation";
import { Projects } from "./projects";
import { Separator } from "./ui/separator";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={39} />
        </Link>
        <p className="font-bold text-lg"></p>
      </div>
      <Separator className="my-4" />
      <Navigation />
      <Separator className="my-4" />
      <Projects />
    </aside>
  );
};
