export type ThemeOption = {
  name: string
  id: string
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

export const themeOptions: ThemeOption[] = [
  {
    name: "Default",
    id: "default",
    colors: {
      primary: "262.1 83.3% 57.8%",
      secondary: "220 14.3% 95.9%",
      accent: "262.1 83.3% 57.8%",
    },
  },
  {
    name: "Ocean",
    id: "ocean",
    colors: {
      primary: "199 89% 48%",
      secondary: "195 75% 90%",
      accent: "220 70% 50%",
    },
  },
  {
    name: "Forest",
    id: "forest",
    colors: {
      primary: "142 71% 45%",
      secondary: "120 60% 95%",
      accent: "160 84% 39%",
    },
  },
  {
    name: "Sunset",
    id: "sunset",
    colors: {
      primary: "25 95% 53%",
      secondary: "48 96% 89%",
      accent: "343 80% 45%",
    },
  },
  {
    name: "Berry",
    id: "berry",
    colors: {
      primary: "339 90% 51%",
      secondary: "340 80% 95%",
      accent: "291 64% 42%",
    },
  },
]

export function getThemeById(id: string): ThemeOption {
  return themeOptions.find((theme) => theme.id === id) || themeOptions[0]
}

