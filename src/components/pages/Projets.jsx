import carbonImg from "@/assets/Photos_projets/Carbon_Savings_simulator.webp";
import portfolioImg from "@/assets/Photos_projets/Photo-GGB-Squared.webp";
import watchlistImg from "@/assets/Photos_projets/Watchlist_Cover.webp";
import CustomButton from "@/components/ui/CustomButton";
import RetourAccueilButton from "@/components/ui/RetourAccueilButton";
import { FolderCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Projets() {
  const navigate = useNavigate();
  const projets = [
    {
      title: "Carbon Savings Simulator",
      desc: "<strong>Carbon Savings Simulator</strong> permet d'estimer et de réduire l'empreinte carbone d'un événement. L'application propose une interface simple pour simuler l'impact de chaque choix logistique et obtenir des conseils pour organiser des événements plus responsables.",
      img: carbonImg,
      link: "https://carbon-savings-simulator.vercel.app/",
    },
    {
      title: "Movies Watchlist",
      desc: "<strong>Movies Watchlist</strong> vous aide à gérer tous les films que vous souhaitez voir. Ajoutez vos envies, découvrez des recommandations personnalisées et profitez d'une interface moderne pour organiser vos soirées cinéma.",
      img: watchlistImg,
      link: "https://movie-web-kickstart.vercel.app/",
    },
    {
      title: "Portfolio",
      desc: "<strong>Mon Portfolio</strong> présente mon parcours, mes projets web et mes compétences. Naviguez dans un design moderne et responsive pour découvrir mon univers de développeur frontend et mes réalisations phares.",
      img: portfolioImg,
      link: "https://filexf.github.io/felix-portfolio/#/",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 p-8 w-full">
      <h2 className="text-5xl title font-bold mt-4 mb-4">Mes Projets</h2>
      <p className="text-center text-gray-700 text-base mb-2">
      Voici une sélection de mes projets frontend dont je suis le plus satisfait. Afin que vous ayez une meilleure idée de mes compétences      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {projets.map((proj, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 border-4"
            style={{ borderColor: "#F2DFD7" }}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="rounded-md object-cover w-full h-32 mb-2"
            />
            <h3 className="font-semibold text-lg text-center text-slate-900">
              {proj.title}
            </h3>
            <div
              className="text-gray-600 text-sm flex-1"
              dangerouslySetInnerHTML={{ __html: proj.desc }}
            />
            <CustomButton
              className="mt-2 py-2 rounded text-sm font-semibold flex justify-center items-center gap-2 bg-green-950 text-white hover:bg-green-900"
              as="a"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FolderCode className="w-4 h-4" />
              Voir le projet
            </CustomButton>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <RetourAccueilButton onNavigate={() => navigate("/")} />
      </div>
    </div>
  );
}
