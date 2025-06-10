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
      { name: "Contact", path: "#contact" },
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
      // Close desktop dropdown if click outside (only when mobile menu is closed)
      if (
        !isMenuOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }

      // Close mobile menu if click outside and menu is open
      if (
        isMenuOpen &&
        !(event.target as HTMLElement).closest(
          'button[aria-label="Open Menu"], button[aria-label="Close Menu"], nav'
        )
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // Add isMenuOpen to dependency array to re-run effect when menu state changes

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // Close desktop dropdown when mobile menu is opened/closed
    setIsDropdownOpen(false);
  };

  const handleMobileNavLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu when a navigation link is clicked
    setIsDropdownOpen(false); // Ensure dropdown is also closed
  };

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
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown when a sub-item is clicked
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

        {/* mobile nav toggle button (hamburger/X icon) */}
        <button
          onClick={toggleMobileMenu}
          className={cn(
            "md:hidden p-2 text-foreground z-50",
            isMenuOpen && "hidden"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <Menu size={24} />
        </button>

        {/* mobile navigation overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md md:hidden"
          >
            <button
              onClick={toggleMobileMenu}
              className="absolute top-5 right-5 p-2 text-foreground"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-8 text-xl text-center">
              {navItems
                .filter((item) => !item.items)
                .map((item, key) => (
                  <a
                    key={key}
                    href={item.path || "#"}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                    onClick={handleMobileNavLinkClick}
                  >
                    {item.name}
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
