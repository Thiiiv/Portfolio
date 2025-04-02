"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

// Define available themes
const themes = [
  { name: "light", icon: Sun },
  { name: "dark", icon: Moon },
  { name: "system", icon: Laptop },
]

// Define color themes
const colorThemes = [
  { name: "purple", color: "hsl(262.1 83.3% 57.8%)" },
  { name: "blue", color: "hsl(221.2 83.2% 53.3%)" },
  { name: "green", color: "hsl(142.1 76.2% 36.3%)" },
  { name: "orange", color: "hsl(24.6 95% 53.1%)" },
]

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeColorTheme, setActiveColorTheme] = useState("purple")
  const { t } = useTranslation()

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)

    // Get saved color theme
    const savedColorTheme = localStorage.getItem("colorTheme") || "purple"
    setActiveColorTheme(savedColorTheme)

    // Apply the color theme
    document.documentElement.setAttribute("data-theme", savedColorTheme)
  }, [])

  const handleColorThemeChange = (themeName: string) => {
    setActiveColorTheme(themeName)
    localStorage.setItem("colorTheme", themeName)
    document.documentElement.setAttribute("data-theme", themeName)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  // Get the current theme icon
  const getCurrentThemeIcon = () => {
    const currentTheme = themes.find((t) => t.name === theme) || themes[0]
    const Icon = currentTheme.icon
    return <Icon className="h-5 w-5" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
          {getCurrentThemeIcon()}
          <span className="sr-only">Select theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("theme.appearance")}</DropdownMenuLabel>
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.name}
              onClick={() => setTheme(themeOption.name)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Icon className={`h-4 w-4 ${theme === themeOption.name ? "text-primary" : ""}`} />
              <span className={theme === themeOption.name ? "font-medium" : ""}>{t(`theme.${themeOption.name}`)}</span>
              {theme === themeOption.name && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
          )
        })}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>{t("theme.colorThemes")}</DropdownMenuLabel>

        {colorThemes.map((colorTheme) => (
          <DropdownMenuItem
            key={colorTheme.name}
            onClick={() => handleColorThemeChange(colorTheme.name)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colorTheme.color }} />
            <span className={activeColorTheme === colorTheme.name ? "font-medium" : ""}>
              {t(`theme.${colorTheme.name}`)}
            </span>
            {activeColorTheme === colorTheme.name && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

