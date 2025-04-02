"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Smartphone, BarChart, Database, Briefcase, GraduationCap, Laptop } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import type { Skill } from "@/lib/utils/data"
import { getProjects } from "@/lib/utils/data"

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const { locale } = useTranslation()
  const projects = getProjects(locale)

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-6 w-6" />
      case "Palette":
        return <Palette className="h-6 w-6" />
      case "Server":
        return <Server className="h-6 w-6" />
      case "Smartphone":
        return <Smartphone className="h-6 w-6" />
      case "BarChart":
        return <BarChart className="h-6 w-6" />
      case "Database":
        return <Database className="h-6 w-6" />
      case "Briefcase":
        return <Briefcase className="h-6 w-6" />
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6" />
      case "Laptop":
        return <Laptop className="h-6 w-6" />
      default:
        return <Code className="h-6 w-6" />
    }
  }

  // Get project names from slugs
  const getProjectName = (slug: string) => {
    const project = projects.find((p) => p.slug === slug)
    return project ? project.title : slug
  }

  const { t } = useTranslation()

  return (
    <motion.div variants={item} className="bg-muted p-6 rounded-[1.5rem]">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary/10 p-3 rounded-full">{getIcon(skill.icon)}</div>
        <h3 className="text-xl font-bold">{skill.name}</h3>
      </div>

      <p className="text-muted-foreground mb-6">{skill.description}</p>

      { skill.level !== null &&
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm">{t("skills.proficiency")}</span>
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
          <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      }

      <div>
        <h4 className="text-sm font-medium mb-2">{t("skills.relatedProjects")}:</h4>
        <div className="flex flex-wrap gap-2">
          {skill.projects.map((projectSlug) => (
            <Badge key={projectSlug} variant="outline" >
              <Link href={`/projects/${projectSlug}`}>{getProjectName(projectSlug)}</Link>
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

