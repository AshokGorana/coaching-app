import { ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function NavButton({
  children,
  variant = "primary",
  onClick,
  className = "",
}: NavButtonProps) {
  const baseStyles =
    "text-sm px-6 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<"primary" | "secondary", string> = {
    primary:
      "bg-white text-[#0f1824] hover:bg-gray-100 focus:ring-blue-500 hover:shadow-md transform hover:-translate-y-0.5",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-[#0f1824] focus:ring-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
