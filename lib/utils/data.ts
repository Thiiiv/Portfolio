import projectsData from "@/lib/data/projects.json"
import skillsData from "@/lib/data/skills.json"
import journeyData from "@/lib/data/journey.json"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
  fullDescription: string
  gallery: string[]
  tools: string[]
  skillsApplied: string[]
  link: string
  github: string
}

export interface Skill {
  id: string
  name: string
  description: string
  projects: string[]
  icon: string
  level: number
}

export interface TimelineEvent {
  id: string
  title: string
  organization: string
  period: string
  description: string
  icon: string
}

export interface Journey {
  experience: TimelineEvent[]
  education: TimelineEvent[]
}

export const getProjects = (locale: string): Project[] => {
  return (projectsData as Record<string, Project[]>)[locale] || (projectsData as Record<string, Project[]>)["en"]
}

export const getProjectBySlug = (slug: string, locale: string): Project | undefined => {
  const projects = getProjects(locale)
  return projects.find((project) => project.slug === slug)
}

export const getSkills = (locale: string): Skill[] => {
  return (skillsData as Record<string, Skill[]>)[locale] || (skillsData as Record<string, Skill[]>)["en"]
}

export const getJourney = (locale: string): Journey => {
  return (journeyData as Record<string, Journey>)[locale] || (journeyData as Record<string, Journey>)["en"]
}

