interface BackgroundProps {
  isDark: boolean;
}

export function GalaxyBackground({ isDark }: BackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
      <div
        className={`w-full h-full transition-colors duration-300 ${
          isDark ? "bg-[#090d16]" : "bg-[#f8fafc]"
        }`}
      />
    </div>
  );
}
