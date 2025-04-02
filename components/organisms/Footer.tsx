"use client"

import Link from "next/link"
import { MaterialShape } from "@/components/atoms/MaterialShape"
import { useTranslation } from "@/lib/i18n"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-muted py-12 mt-24 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -z-10 top-10 right-10">
        <MaterialShape type="pill" className="w-32 h-12" />
      </div>
      <div className="absolute -z-10 bottom-10 left-10">
        <MaterialShape type="settings" className="w-16 h-16" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              Portfolio
            </Link>
            <p className="text-muted-foreground max-w-md">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.skills")}
                </Link>
              </li>
              <li>
                <Link href="/journey" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.journey")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t("contact.info.followMe")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Thivakar JEYASEELAN. {t("footer.rights")}
            </p>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">{t("footer.builtWith")}</p>
              <div className="flex gap-3">
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className="sr-only">Next.js</span>
                  <svg height="20" viewBox="0 0 180 180" fill="currentColor">
                    <path d="M 80.95 163.2 L 30.16 129.8 L 30.15 76.03 L 80.92 109.5 L 80.95 163.2 Z M 87.65 109.5 L 138.5 76.03 L 138.5 129.8 L 87.65 163.2 L 87.65 109.5 Z M 84.33 50.15 L 33.48 83.57 L 33.48 29.8 L 84.33 63.2 L 84.33 50.15 Z M 84.33 70.03 L 33.48 103.5 L 33.48 90.4 L 84.33 56.97 L 84.33 70.03 Z M 135.1 83.57 L 84.33 50.15 L 84.33 63.2 L 135.1 29.8 L 135.1 83.57 Z M 135.1 90.4 L 135.1 103.5 L 84.33 70.03 L 84.33 56.97 L 135.1 90.4 Z" />
                  </svg>
                </a>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className="sr-only">Tailwind CSS</span>
                  <svg height="20" viewBox="0 0 53 33" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className="sr-only">Framer Motion</span>
                  <svg height="20" viewBox="0 0 14 21" fill="currentColor">
                    <path d="M0 0h14v7H7zm0 7h7l7 7H7zm0 7h7v7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

