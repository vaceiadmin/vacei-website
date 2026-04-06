"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Globe, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LOCALE_COOKIE,
  LOCALE_STORAGE_KEY,
  locales,
  type Locale,
} from "@/lib/i18n-config";
import { stripLocaleFromPathname, withLocale } from "@/lib/localized-path";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const current: Locale =
    first && locales.includes(first as Locale)
      ? (first as Locale)
      : (i18n.language as Locale);

  const bare = stripLocaleFromPathname(pathname);

  function setLocale(next: Locale) {
    if (next === current) {
      setIsOpen(false);
      return;
    }
    const target = withLocale(next, bare === "/" ? "/" : bare);
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${maxAge};SameSite=Lax`;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setIsOpen(false);
    router.push(target);
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Used a bright high-contrast theme so it's always very visible over dark or light sections
  return (
    <div 
      ref={dropdownRef}
      className={cn(
        "fixed bottom-6 left-6 lg:bottom-8 lg:left-8 z-[100]", 
        className
      )}
    >
      {/* Dropdown Menu (Opens Upward) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 mb-4 w-48 bg-white border border-slate-200/60 rounded-2xl p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] origin-bottom-left"
          >
            <div className="flex flex-col gap-1">
              {locales.map((loc) => {
                const isSelected = current === loc;
                return (
                  <button
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={cn(
                      "flex items-center justify-between w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all",
                      isSelected 
                        ? "bg-blue-50 text-blue-700" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span>{t(`language.${loc}`)}</span>
                    {isSelected && <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2.5 bg-white border border-slate-200/60 rounded-full pl-2 pr-4 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_-15px_rgba(37,99,235,0.4)] hover:border-blue-200 transition-all duration-300 group",
          isOpen ? "bg-slate-50 ring-4 ring-blue-500/10 border-blue-200" : ""
        )}
        aria-label="Change Language"
        aria-expanded={isOpen}
      >
        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors">
          <Globe className="w-4 h-4" />
        </div>
        <span className="text-sm font-bold text-slate-800 tracking-wide">
          {t(`language.${current}`)}
        </span>
        <ChevronUp 
          className={cn(
            "w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform duration-300 ml-1",
            isOpen ? "rotate-180" : ""
          )} 
        />
      </button>
    </div>
  );
}
