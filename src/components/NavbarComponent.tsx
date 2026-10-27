"use client"

import { menuList } from "@/lib/menu-list";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathName = usePathname(); // /products
  return (
    <nav>
      {
         menuList.map((p)=> (
           <Link key={p.name} href={p.url} 
            style={
              // ternary expression 
              // expression ? true : false 
              p.url === pathName ? ({color: 'red'}): ({color: 'black'})
              }
           > {p.name} </Link>
         ))
      }
    </nav>
  )
}
