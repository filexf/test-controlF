export default function CustomButton({
  children,
  className = "",
  as,
  ...props
}) {
  const Comp = as === "a" ? "a" : "button";
  return (
    <Comp
      className={`h-10 rounded-md px-6 font-semibold flex items-center gap-2 bg-[#B6F3AC] text-slate-900 shadow-lg hover:bg-[#0C7953] hover:text-white transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
