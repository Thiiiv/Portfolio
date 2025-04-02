"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useTranslation, locales } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLocale(lang)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className={locale === lang ? "font-medium" : ""}>{lang === "en" ? "English" : "Français"}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

