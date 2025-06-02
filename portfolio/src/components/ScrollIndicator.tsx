import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";

interface ScrollIndicatorProps {
  footerRef: React.RefObject<HTMLElement>;
  targetId?: string;
}

const ScrollIndicator = ({ footerRef, targetId }: ScrollIndicatorProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setHidden(footerTop <= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]);

  const handleClick = () => {
    if (targetId) {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down"
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300",
        hidden ? "opacity-0" : "opacity-100"
      )}
    >
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
    </button>
  );
};

export default ScrollIndicator;
