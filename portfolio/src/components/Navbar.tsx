import { cn } from "../lib/utils";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  {
    name: "More",
    path: "#",
    items: [
      { name: "Career Journey", path: "/career-journey" },
      { name: "Achievements and Awards", path: "/achievements" },
      { name: "Blog", path: "/blog" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Resume", path: "/resume" },
      { name: "Contributions", path: "/contributions" },
      { name: "Contact", path: "/contact" },
      { name: "Activity", path: "/activity" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-foreground/10 shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="/"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Pham Dang Khoi</span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) =>
            item.items ? (
              <div key={key} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-lg text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-200",
                      isDropdownOpen ? "rotate-180" : ""
                    )}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-background/95 backdrop-blur-md border border-foreground/10 py-2">
                    {item.items.map((subItem, subKey) => (
                      <a
                        key={subKey}
                        href={subItem.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={key}
                href={item.path}
                className="text-lg text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) =>
              item.items ? (
                <div key={key} className="flex flex-col items-center space-y-4">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-lg text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        isDropdownOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="flex flex-col items-center space-y-4">
                      {item.items.map((subItem, subKey) => (
                        <a
                          key={subKey}
                          href={subItem.path}
                          className="text-lg text-foreground hover:text-primary transition-colors duration-300"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={key}
                  href={item.path}
                  className="text-lg text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
