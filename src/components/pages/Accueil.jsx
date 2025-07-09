import FigmaIcon from "@/assets/icons/Figma.svg";
import reactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/Tailwind-CSS.svg";
import HomeNavButton from "@/components/ui/HomeNavButton";
import { FolderCode, Images } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Composant TechStackIcon
function TechStackIcon({ name, icon }) {
  return (
    <div className="border-2 mb-1 flex items-center gap-3 rounded-3xl border-gray-200 bg-slate-50 px-6 py-1.5 shadow-md transition-all min-w-0 max-w-full">
      <img src={icon} alt={name} className="h-6 w-6 flex-shrink-0" />
      <p className="text-md font-bold truncate max-w-[6rem] sm:max-w-none">
        {name}
      </p>
    </div>
  );
}

export default function Accueil() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-8 w-full ">
      {/* Carte principale avec le titre */}
      <div
        className="flex flex-col bg-white rounded-xl border-4 shadow-lg p-12 mb-8 gap-6"
        style={{ borderColor: "#F2DFD7" }}
      >
        <h1 className="text-4xl text-center sm:text-5xl font-extrabold tracking-tight title mb-6">
          Bienvenue sur la Homepage
        </h1>
        <p className="text-gray-600 text-center text-lg leading-relaxed max-w-2xl mx-auto flex flex-wrap gap-x-2 gap-y-2 items-center justify-center">
          Voilà l'application du test technique que j'ai réalisé avec
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center">
          <span className="inline-block align-middle">
            <TechStackIcon name="React" icon={reactIcon} />
          </span>

          <span className="inline-block align-middle">
            <TechStackIcon name="Tailwind" icon={TailwindIcon} />
          </span>
          <span className="inline-block align-middle">
            <TechStackIcon name="Figma" icon={FigmaIcon} />
          </span>
        </div>

        <p className="text-gray-600 text-center text-lg leading-relaxed max-w-2xl mx-auto flex flex-wrap gap-x-2 gap-y-2 items-center justify-center">
          J'ai essayé d'améliorer le projet en mettant 2 pages en plus. J'ai
          rendu l'application responsive et j'ai surtout essayé de mettre en
          place la charte graphique de control F dans le design.
        </p>
        <h2 className="text-3xl title font-bold text-center my-6">
          Explorez le contenu
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <HomeNavButton
            onClick={() => navigate("/projets")}
            icon={<FolderCode />}
            className="font-semibold text-base sm:text-lg"
          >
            Voir les Projets
          </HomeNavButton>
          <HomeNavButton
            onClick={() => navigate("/galerie")}
            icon={<Images />}
            className="font-semibold text-base sm:text-lg"
          >
            Voir la Galerie
          </HomeNavButton>
        </div>
      </div>
    </div>
  );
}
