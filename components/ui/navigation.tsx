"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const languages = [
    { code: "FR", label: "Français" },
    { code: "EN", label: "English" },
    { code: "PT", label: "Português" },
  ];

  const navItems = [
    {
      name:
        currentLanguage === "EN"
          ? "Home"
          : currentLanguage === "PT"
          ? "Início"
          : "Accueil",
      href: "/",
    },
    {
      name:
        currentLanguage === "EN"
          ? "The Jewellery"
          : currentLanguage === "PT"
          ? "A Joalharia"
          : "La Joaillerie",
      href: "/joaillerie",
    },
    {
      name:
        currentLanguage === "EN"
          ? "Custom-Made"
          : currentLanguage === "PT"
          ? "Feito sob Medida"
          : "Le Sur-Mesure",
      href: "/sur-mesure",
    },
    {
      name:
        currentLanguage === "EN"
          ? "The Brand"
          : currentLanguage === "PT"
          ? "A Marca"
          : "La Marque",
      href: "/histoire",
      subItems: [
        {
          name:
            currentLanguage === "EN"
              ? "History"
              : currentLanguage === "PT"
              ? "História"
              : "Histoire",
          href: "/histoire?tab=histoire",
        },
        {
          name:
            currentLanguage === "EN"
              ? "Expertise"
              : currentLanguage === "PT"
              ? "Saber-fazer"
              : "Savoir-faire",
          href: "/histoire?tab=savoir-faire",
        },
        {
          name:
            currentLanguage === "EN"
              ? "Values"
              : currentLanguage === "PT"
              ? "Valores"
              : "Valeurs",
          href: "/histoire?tab=valeurs",
        },
        {
          name:
            currentLanguage === "EN"
              ? "Manifesto"
              : currentLanguage === "PT"
              ? "Manifesto"
              : "Manifeste",
          href: "/histoire?tab=manifeste",
        },
      ],
    },
    {
      name:
        currentLanguage === "EN"
          ? "Blog"
          : currentLanguage === "PT"
          ? "Blogue"
          : "Blog",
      href: "/blog",
      subItems: [
        {
          name:
            currentLanguage === "EN"
              ? "Articles"
              : currentLanguage === "PT"
              ? "Artigos"
              : "Articles",
          href: "/blog",
        },
        {
          name:
            currentLanguage === "EN"
              ? "Lexicon"
              : currentLanguage === "PT"
              ? "Léxico"
              : "Lexique",
          href: "/blog/lexique",
        },
        {
          name:
            currentLanguage === "EN"
              ? "FAQ"
              : currentLanguage === "PT"
              ? "Perguntas frequentes"
              : "FAQ",
          href: "/blog/faq",
        },
      ],
    },
    {
      name:
        currentLanguage === "EN"
          ? "Contact"
          : currentLanguage === "PT"
          ? "Contato"
          : "Contact",
      href: "/contact",
    },
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    // Ici vous pourrez ajouter la logique de changement de langue
    console.log("Language changed to:", langCode);
  };
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-powder/95 backdrop-blur-sm border-b border-teal/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/pw/AP1GczN-3a9_LeHNgsvpWA6afAeF-jo__RBDLC3pDGWYVvtok-Kpq7zdGkFgzu9x1WVObNQ_nJqK8bD1jADKwgIAQKU_Is_B-48PNlZapcQ4Un8qyEZfYntMlx6Vxpcn14021rCNlQGmugJOIaNyYbVPSYsn=w840-h297-s-no-gm?authuser=0"
              alt="Précieuse"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-teal hover:text-rust transition-colors font-medium"
                    >
                      {item.name}
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-teal/10 py-2 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-teal hover:bg-powder/50 hover:text-rust transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-teal hover:text-rust transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-teal hover:text-rust transition-colors flex items-center gap-1"
                >
                  <Globe className="w-4 h-4" />
                  {currentLanguage}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-powder border-teal/20"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "cursor-pointer hover:bg-rust/10 text-teal",
                      currentLanguage === lang.code && "bg-rust/20 font-medium"
                    )}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-teal"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-teal/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-teal hover:text-rust transition-colors font-medium text-left w-full"
                      >
                        {item.name}
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-teal hover:text-rust transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-teal hover:text-rust transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-teal/20">
              <p className="text-sm font-medium text-teal mb-2">
                Langue / Language
              </p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={
                      currentLanguage === lang.code ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "text-xs",
                      currentLanguage === lang.code
                        ? "bg-rust text-white hover:bg-rust/90"
                        : "border-teal/30 text-teal hover:bg-rust/10"
                    )}
                  >
                    {lang.code}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
