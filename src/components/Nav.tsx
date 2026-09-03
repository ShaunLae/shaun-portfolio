import { useState } from "react";
import type { NavLink } from "../types";

interface NavProps {
  brand: string;
  links: NavLink[];
}

export function Nav({ brand, links }: NavProps) {
  const [open, setOpen] = useState(false);
  const dotIndex = brand.indexOf(".");
  const brandLead = dotIndex === -1 ? brand : brand.slice(0, dotIndex);
  const brandRest = dotIndex === -1 ? "" : brand.slice(dotIndex + 1);

  return (
    <header className="sticky top-0 z-50 border-b border-borderGlass bg-base/65 backdrop-blur-[16px] saturate-[140%]">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-7 py-4">
        <a href="#top" className="font-display text-[1.15rem] font-semibold tracking-[0.01em] no-underline">
          {brandLead}
          <span className="text-olive">.</span>
          {brandRest}
        </a>
        <button
          type="button"
          className="cursor-pointer border-0 bg-transparent text-[1.5rem] leading-none text-text sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
        <ul
          className={`list-none gap-7 ${
            open
              ? "fixed inset-x-0 top-16 z-50 flex flex-col gap-3.5 border-b border-borderGlass bg-base/97 px-7 py-6 sm:static sm:flex-row sm:border-0 sm:bg-transparent sm:p-0"
              : "hidden sm:flex"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.92rem] text-textMuted no-underline transition-colors duration-200 hover:text-oliveDeep"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
