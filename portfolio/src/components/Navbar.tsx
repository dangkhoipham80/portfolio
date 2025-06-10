import { cn } from "../lib/utils";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

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
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fullText = "Phạm Đăng Khôi";

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

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayText === fullText) {
        setIsDeleting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Add 'hidden' for mobile, and 'md:block' to show on medium and larger screens
      className={cn(
        "fixed w-full z-40 transition-all duration-300 hidden md:block", // <-- Changed here
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-foreground/10 shadow-lg"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          whileHover={{ scale: 1.02 }}
          className="text-xl font-bold flex items-center gap-2"
          href="/"
        >
          <span className="relative">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-mono">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-[2px]"
              />
            </span>
            <span className="text-foreground/80 ml-2">Portfolio</span>
          </span>
        </motion.a>

        {/* desktop navigation (already hidden on mobile by the parent 'nav' element) */}
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

        {/* mobile menu button and overlay (these will now never be visible because the parent 'nav' is hidden on mobile) */}
        {/* You can remove these if you want to keep your code clean, as they are effectively not used */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 hidden" // Added 'hidden'
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center hidden", // Added 'hidden'
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.path || "#"}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
