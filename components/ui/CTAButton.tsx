import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  className,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-bold",
    secondary:
      "bg-white text-primary-900 border-2 border-primary-600 hover:bg-primary-50 hover:border-primary-700 focus:ring-primary-500 hover:scale-105 transition-all duration-200 font-semibold",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </Link>
  );
}
