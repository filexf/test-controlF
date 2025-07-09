import CustomButton from "@/components/ui/CustomButton";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RetourAccueilButton({ onNavigate, className = "" }) {
  const navigate = useNavigate();
  return (
    <CustomButton
      className={`w-full sm:w-auto flex items-center gap-2 justify-center shadow-lg ${className}`}
      onClick={() =>
        typeof onNavigate === "function" ? onNavigate() : navigate("/")
      }
    >
      <House />
      Retour à l'accueil
    </CustomButton>
  );
}
