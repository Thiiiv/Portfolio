"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code, Palette, Laptop } from "lucide-react"

interface TimelineEvent {
  id: string
  title: string
  organization: string
  period: string
  description: string
  icon: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="h-6 w-6" />
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6" />
      case "Code":
        return <Code className="h-6 w-6" />
      case "Palette":
        return <Palette className="h-6 w-6" />
      case "Laptop":
        return <Laptop className="h-6 w-6" />
      default:
        return <Briefcase className="h-6 w-6" />
    }
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-muted-foreground/30" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 bg-primary p-2 rounded-full">{getIcon(event.icon)}</div>

            <div className="bg-muted p-6 rounded-[1.5rem]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <span className="text-sm text-muted-foreground">{event.period}</span>
              </div>
              <p className="text-primary font-medium mb-4">{event.organization}</p>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

