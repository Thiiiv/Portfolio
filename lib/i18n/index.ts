"use client"

import { useParams } from "next/navigation"
import { useState, useEffect, useCallback } from "react"
import en from "./locales/en.json"
import fr from "./locales/fr.json"

// Define the structure of our translations
export type Translations = {
  [key: string]: string | Translations | any
}

// Available locales
export const locales = ["en", "fr"]

// Default locale
export const defaultLocale = "en"

// Translations object
const translations: Record<string, Translations> = {
  en,
  fr,
}

// Fix the translation function to properly handle nested keys
const getNestedValue = (obj: any, path: string): string | any => {
  const keys = path.split(".")
  let result = obj

  for (const key of keys) {
    if (result === undefined || result === null) return path
    result = result[key]
  }

  return result
}

/**
 * Custom hook for translations
 */
export function useTranslation() {
  const params = useParams()
  const [locale, setLocale] = useState(defaultLocale)

  // Get the locale from URL params or use default
  useEffect(() => {
    const localeFromParams = params?.locale as string
    if (localeFromParams && locales.includes(localeFromParams)) {
      setLocale(localeFromParams)
    } else {
      // Try to get from localStorage or browser preference
      const savedLocale = localStorage.getItem("locale")
      if (savedLocale && locales.includes(savedLocale)) {
        setLocale(savedLocale)
      } else {
        // Check browser language
        const browserLocale = navigator.language.split("-")[0]
        if (locales.includes(browserLocale)) {
          setLocale(browserLocale)
        }
      }
    }
  }, [params])

  // Translation function
  const t = useCallback(
    (key: string): any => {
      const translation = translations[locale] || translations[defaultLocale]
      return getNestedValue(translation, key) || key
    },
    [locale],
  )

  // Change locale function - optimized to avoid full page reload
  const changeLocale = useCallback((newLocale: string) => {
    if (locales.includes(newLocale)) {
      localStorage.setItem("locale", newLocale)
      setLocale(newLocale)
      // refresh the page to apply the new locale
      window.location.reload()
    }
  }, [])

  return { t, locale, changeLocale }
}

