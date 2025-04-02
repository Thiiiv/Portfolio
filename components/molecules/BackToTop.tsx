import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/lib/i18n"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [footerTop, setFooterTop] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Get the footer position
      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        setFooterTop(footerRect.top - window.innerHeight + 100) // 100px buffer
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility() // Call once to initialize

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className="fixed right-8 z-30 transition-all duration-300"
      style={{
        bottom: "2rem",
        transform: footerTop < 0 ? `translateY(${footerTop}px)` : "translateY(0)",
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.72, 0.32, 0, 1] }}
          >
            <Button size="icon" className="rounded-full h-12 w-12 shadow-lg" onClick={scrollToTop}>
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">{t("backToTop")}</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

