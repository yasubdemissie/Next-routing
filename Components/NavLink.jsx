"use client";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <li>
      <a className={`${path.startsWith(href) ? "active" : ""}`} href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavLink;
