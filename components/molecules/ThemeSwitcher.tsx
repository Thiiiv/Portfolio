"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { themeOptions, getThemeById } from "@/lib/theme-config"
import { useTranslation } from "@/lib/i18n"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentColorTheme, setCurrentColorTheme] = useState("default")
  const { t } = useTranslation()

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("customTheme")
    if (savedTheme) {
      setCurrentColorTheme(JSON.parse(savedTheme))
    }
  }, [])

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = getThemeById(themeId)

    // Save theme selection to localStorage
    localStorage.setItem("customTheme", JSON.stringify(themeId))
    setCurrentColorTheme(themeId)

    // Apply theme colors to CSS variables
    document.documentElement.style.setProperty("--primary", selectedTheme.colors.primary)
    document.documentElement.style.setProperty("--secondary", selectedTheme.colors.secondary)
    document.documentElement.style.setProperty("--accent", selectedTheme.colors.accent)
  }

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Choose theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Themes</DropdownMenuLabel>

        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onClick={() => handleThemeChange(option.id)}
            className="flex items-center gap-2"
          >
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${option.colors.primary})` }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${option.colors.accent})` }} />
            </div>
            <span>{option.name}</span>
            {currentColorTheme === option.id && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

