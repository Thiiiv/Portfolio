"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={item} className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="overflow-hidden rounded-[2rem] mb-4 aspect-[16/9] bg-muted">
        { project.image !== null
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
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

