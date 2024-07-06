import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

export function Menu() {
  return (
    <Menubar className="sm:hidden">
      <MenubarMenu>
        <MenubarTrigger>
          <IoMenuOutline className="h-auto w-6" />
        </MenubarTrigger>
        <MenubarContent>
          <Link href={"/user"}>
            <MenubarItem >User</MenubarItem>
          </Link>
          <Link href={"/home"}>
            <MenubarItem>Home</MenubarItem>
          </Link>
          <Link href={"/discover"}>
            <MenubarItem>Discover</MenubarItem>
          </Link>

          <Link href={"/filter"}>
            <MenubarItem>Filter</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
