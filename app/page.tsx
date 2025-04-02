"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { MaterialShape } from "@/components/atoms/MaterialShape"
import { useTranslation } from "@/lib/i18n"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="container relative">
      {/* Decorative shapes */}
      <div className="absolute -z-10 top-20 right-10">
        <MaterialShape type="pill" className="w-32 h-12" />
      </div>
      <div className="absolute -z-10 bottom-40 left-10">
        <MaterialShape type="settings" className="w-24 h-24" />
      </div>

      {/* Hero section */}
      <section className="py-8 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-6">
              {t("home.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{t("home.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  {t("home.viewProjects")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">{t("home.getInTouch")}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-background shadow-xl bg-muted relative">
              <Image
                src="/my_photo.jpg"
                alt="Portfolio Owner"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
                style={{
                  zIndex: 1000,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex flex-col bg-primary px-4 py-4 rounded-[1rem] text-center">
                  <p className="text-white font-medium text-lg">Thivakar JEYASEELAN</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[2.5rem] bg-primary/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Introduction section */}
      <section className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.aboutTitle")}</h2>
          <p className="text-lg text-muted-foreground mb-8 text-left">{t("home.aboutText")}</p>
          <Button variant="outline" asChild>
            <Link href="/journey">{t("home.myJourney")}</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

