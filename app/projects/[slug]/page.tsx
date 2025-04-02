"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { MaterialShape } from "@/components/atoms/MaterialShape"
import BackToTop from "@/components/molecules/BackToTop"
import { useTranslation } from "@/lib/i18n"
import { getProjectBySlug } from "@/lib/utils/data"
import { GalleryItem } from "@/components/organisms/GalleryItem"

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, locale } = useTranslation()

  // Get the project by slug and current locale
  const projectSlug = Array.isArray(slug) ? slug[0] : slug
  const project = getProjectBySlug(projectSlug as string, locale)

  if (!project) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("projects.notFound")}</h1>
        <p className="mb-8">{t("projects.notFoundText")}</p>
        <Button asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t("projects.backToProjects")}
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container relative py-16">
      {/* Decorative shapes */}
      <div className="absolute -z-10 top-40 right-10">
        <MaterialShape type="rounded" className="w-40 h-40" />
      </div>
      <div className="absolute -z-10 bottom-60 left-10">
        <MaterialShape type="settings" className="w-24 h-24" />
      </div>

      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("projects.backToProjects")}
        </Link>
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="rounded-[2rem] overflow-hidden aspect-video relative">
          {project.image !== null
            ?
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            :
            <h3 className="w-full h-full flex items-center justify-center font-bold text-2xl bg-background border border-primary rounded-[2rem] text-primary">
              {project.title}
            </h3>
          }
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-4">{t("projects.overview")}</h2>
          <p className="text-muted-foreground mb-8">{project.fullDescription}</p>

          <h2 className="text-2xl font-bold mb-4">{t("projects.gallery")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {project.gallery.map((image: string, index: number) => (
                image !== null ?
                <GalleryItem
                  key={index}
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                />
                :
                <div key={index} className="w-full h-full flex items-center justify-center rounded-lg p-3 border border-primary bg-background">
                  <h3 className="font-bold text-2xl text-center text-primary">
                    {t("projects.noImage")}
                  </h3>
                </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-muted p-6 rounded-[1.5rem]">
            <h2 className="text-xl font-bold mb-4">{t("projects.tools")}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool: string) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">{t("projects.skills")}</h2>
            <ul className="space-y-2 mb-8">
              {project.skillsApplied.map((skill: string) => (
                <li key={skill} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              {project.link !== null && 
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t("projects.visitProject")}
                  </a>
                </Button>
              }
              {project.github !== null &&
                <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {t("projects.viewSourceCode")}
                </a>
              </Button>
              }
            </div>
          </div>
        </motion.div>
      </div>

      <BackToTop />
    </div>
  )
}

