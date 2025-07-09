import photo6 from "@/assets/Photos_galerie/Paris_WE_V1-7.webp";
import photo5 from "@/assets/Photos_galerie/Photo_Piscine_Barcelone.webp";
import photo4 from "@/assets/Photos_galerie/reservoir_des_gallets.webp";

import photo3 from "@/assets/Photos_galerie/Photos_HK_chill-114.webp";
import photo2 from "@/assets/Photos_galerie/Photos_HK_chill-128.webp";
import photo1 from "@/assets/Photos_galerie/Photos_HK_chill-29.webp";
import photo9 from "@/assets/Photos_galerie/Tests_photos_USA-147.webp";
import photo11 from "@/assets/Photos_galerie/Tests_photos_USA-154.webp";

import photo10 from "@/assets/Photos_galerie/Tests_photos_USA-71.webp";
import RetourAccueilButton from "@/components/ui/RetourAccueilButton";
import { useNavigate } from "react-router-dom";

export default function Galerie() {
  const navigate = useNavigate();
  const images = [
    { src: photo3, alt: "Hong Kong Chill 114" },
    { src: photo2, alt: "Hong Kong Chill 128" },
    { src: photo1, alt: "Hong Kong Chill 29" },
    { src: photo4, alt: "Reservoir des gallets" },
    { src: photo6, alt: "Paris WE V1-7" },
    { src: photo5, alt: "Piscine Barcelone" },
    { src: photo9, alt: "USA 147" },
    { src: photo10, alt: "USA 71" },
    { src: photo11, alt: "USA 154" },
  ];
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 mt-4 p-8 w-full">
      <h2 className="title text-5xl font-bold mb-4">Galerie</h2>
      <p className="text-center text-gray-700 text-base mb-2">
        Pour finir je vous propose une petite galerie de mes photos préférées
        que j'ai pu réaliser. Afin que vous puissiez en savoir plus sur moi et
        faire un petit peu voyager 😊.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="rounded-lg object-cover h-80 aspect-[2/3] shadow"
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <RetourAccueilButton onNavigate={() => navigate("/")} />
      </div>
    </div>
  );
}
