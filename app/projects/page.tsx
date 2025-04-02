"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/molecules/ProjectCard"
import { MaterialShape } from "@/components/atoms/MaterialShape"
import BackToTop from "@/components/molecules/BackToTop"
import { useTranslation } from "@/lib/i18n"
import { useEffect } from "react"
import { getProjects } from "@/lib/utils/data"

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.72, 0.32, 0, 1],
      },
    },
  }

  const { t, locale } = useTranslation()

  // Get projects data based on current locale
  const projects = getProjects(locale)

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container relative py-16 md:py-24">
      {/* Decorative shape - Using rounded shape only */}
      <div className="absolute -z-10 top-20 right-10">
        <MaterialShape type="rounded" className="w-32 h-32" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1] }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("projects.title")}</h1>
        <p className="text-lg text-muted-foreground">{t("projects.subtitle")}</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      <BackToTop />
    </div>
  )
}

