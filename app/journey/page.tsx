"use client"

import { motion } from "framer-motion"
import { MaterialShape } from "@/components/atoms/MaterialShape"
import Timeline from "@/components/organisms/Timeline"
import { useTranslation } from "@/lib/i18n"
import { useEffect } from "react"
import { getJourney } from "@/lib/utils/data"

export default function Journey() {
  const { t, locale } = useTranslation()

  // Get journey data based on current locale
  const journey = getJourney(locale)

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container relative py-16 md:py-24">
      {/* Decorative shape - Settings icon only */}
      <div className="absolute -z-10 top-20 right-10">
        <MaterialShape type="settings" className="w-24 h-24" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1] }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("journey.title")}</h1>
        <p className="text-lg text-muted-foreground">{t("journey.subtitle")}</p>
      </motion.div>

      <div className="grid gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1], delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t("journey.experience")}</h2>
          <Timeline events={journey.experience} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1], delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{t("journey.education")}</h2>
          <Timeline events={journey.education} />
        </motion.div>
      </div>
    </div>
  )
}

