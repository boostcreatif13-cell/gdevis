"use client";

interface SectionDividerProps {
  variant?: "line" | "spaced" | "minimal";
  className?: string;
}

export default function SectionDivider({ 
  variant = "line",
  className = "" 
}: SectionDividerProps) {
  const variants = {
    line: (
      <div className="w-full py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-primary-200/40 to-transparent"></div>
        </div>
      </div>
    ),
    spaced: (
      <div className="w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary-200/30"></div>
            <div className="mx-4 w-1 h-1 rounded-full bg-primary-300/40"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary-200/30"></div>
          </div>
        </div>
      </div>
    ),
    minimal: (
      <div className="w-full py-10 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-100/20 to-transparent"></div>
        </div>
      </div>
    ),
  };

  return (
    <div className={`relative ${className}`}>
      {variants[variant]}
    </div>
  );
}
