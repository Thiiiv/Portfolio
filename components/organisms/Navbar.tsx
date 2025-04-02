"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "@/lib/i18n"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.journey"), path: "/journey" },
    { name: t("nav.contact"), path: "/contact" },
  ]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-background/60 backdrop-blur-lg shadow-md" : "py-5 bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between">

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                pathname === item.path ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "px-4 py-2 rounded-full text-lg font-medium transition-colors",
                      pathname === item.path ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

