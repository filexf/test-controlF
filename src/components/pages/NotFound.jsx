import RetourAccueilButton from "@/components/ui/RetourAccueilButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-7xl font-extrabold text-green-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page non trouvée</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <RetourAccueilButton onNavigate={() => navigate("/")} />
    </div>
  );
}
