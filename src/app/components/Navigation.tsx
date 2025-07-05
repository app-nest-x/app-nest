"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 nav-blur rounded-full px-6 py-3 ${className}`}
      >
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <a href="/" className="text-base font-semibold tracking-tight hover:text-primary transition-colors duration-200">
            App Nest
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 text-sm">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-sm md:hidden"
            >
              <div className="bg-background border border-border-subtle rounded-2xl shadow-lg overflow-hidden">
                <div className="py-4">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      className={`block px-6 py-3 text-base transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-foreground font-medium bg-muted/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <div className="border-t border-border-subtle p-4">
                  <a
                    href="/contact"
                    className="btn btn-primary w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 