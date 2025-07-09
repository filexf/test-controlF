import CustomButton from "@/components/ui/CustomButton";

export default function HomeNavButton({
  onClick,
  icon,
  children,
  className = "",
}) {
  return (
    <CustomButton
      className={`w-full sm:w-auto flex items-center justify-center gap-2 text-lg ${className}`}
      onClick={onClick}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </CustomButton>
  );
}
