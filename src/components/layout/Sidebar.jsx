import {
  FolderCode,
  Github,
  Globe,
  House,
  Images,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function SidebarLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="text-black hover:text-neutral-700"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export default function Sidebar({ currentPage, PAGES, logo }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col items-center gap-2 mt-4 mb-4">
          <img
            src={logo}
            alt="Avatar"
            className="w-16 h-16 rounded-full border"
          />
          <span className="text-2xl font-extrabold tracking-tight text-green-900">
            ControlF
          </span>
        </div>
        <nav className="mt-12 w-full">
          <ul className="flex flex-col gap-2">
            {PAGES.map((page) => (
              <li key={page.key}>
                <Link
                  to={page.path}
                  className={`w-full block text-center py-2 pr-3 rounded transition ${
                    currentPage === page.key
                      ? "font-bold text-slate-900"
                      : "hover:bg-slate-200"
                  }`}
                  aria-current={currentPage === page.key ? "page" : undefined}
                >
                  <span className="inline-flex items-center gap-2">
                    {page.key === "home" && <House />}
                    {page.key === "projets" && <FolderCode />}
                    {page.key === "galerie" && <Images />}
                    {page.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Liens externes en bas de la sidebar */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-6">
        <SidebarLink href="https://github.com/filexf" aria-label="GitHub">
          <Github />
        </SidebarLink>
        <SidebarLink
          href="https://www.linkedin.com/in/felix-orain/"
          aria-label="Linkedin"
        >
          <Linkedin />
        </SidebarLink>
        <SidebarLink
          href="https://filexf.github.io/felix-portfolio/#/"
          aria-label="Portfolio"
        >
          <Globe />
        </SidebarLink>
      </div>
    </div>
  );
}
