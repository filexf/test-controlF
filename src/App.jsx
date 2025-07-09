import logoControlF from "@/assets/logoControlF.png";
import Sidebar from "@/components/layout/Sidebar";
import Accueil from "@/components/pages/Accueil";
import Galerie from "@/components/pages/Galerie";
import NotFound from "@/components/pages/NotFound";
import Projets from "@/components/pages/Projets";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const PAGES = [
  { key: "home", label: "Accueil", path: "/" },
  { key: "projets", label: "Projets", path: "/projets" },
  { key: "galerie", label: "Galerie", path: "/galerie" },
];

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Trouve la page courante à partir du path
  const currentPage =
    PAGES.find((p) => p.path === location.pathname)?.key || "home";

  return (
    <div className="min-h-screen flex flex-col md:block">
      {/* Sidebar desktop sticky/fixed */}
      <aside className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-slate-100 border-r p-4 z-40">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={(key) =>
            navigate(PAGES.find((p) => p.key === key)?.path || "/")
          }
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          PAGES={PAGES}
          logo={logoControlF}
        />
      </aside>
      {/* Sidebar mobile (drawer style) */}
      <div className="md:hidden flex items-center justify-between bg-slate-100 border-b p-4 sticky top-0 z-30">
        <span className="text-2xl font-extrabold tracking-tight text-slate-800">
          ControlF
        </span>
        <button
          className="p-2 rounded hover:bg-slate-200 focus:outline-none"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Drawer overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Drawer sidebar mobile */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-slate-100 border-r p-4 flex-col gap-8 transform transition-transform duration-200 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          boxShadow: sidebarOpen ? "0 0 0 9999px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={(key) =>
            navigate(PAGES.find((p) => p.key === key)?.path || "/")
          }
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          PAGES={PAGES}
          logo={logoControlF}
        />
      </aside>
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center bg-white min-h-screen md:pl-64">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
