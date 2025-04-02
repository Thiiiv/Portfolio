"use client"

import { motion } from "framer-motion"
import { MaterialShape } from "@/components/atoms/MaterialShape"
import ContactForm from "@/components/organisms/ContactForm"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { useEffect } from "react"

export default function Contact() {
  const { t } = useTranslation();
  
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container relative py-16 md:py-24">
      {/* Decorative shape - Pill shape only */}
      <div className="absolute -z-10 top-20 right-10">
        <MaterialShape type="pill" className="w-32 h-12" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1] }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("contact.title")}</h1>
        <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1], delay: 0.2 }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.72, 0.32, 0, 1], delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-muted p-8 rounded-[1.5rem] h-full">
            <h2 className="text-2xl font-bold mb-6">{t("contact.info.title")}</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t("contact.info.email")}</h3>
                  <p className="text-muted-foreground">thivakar.jeyaseelan@edu.esiee.fr</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t("contact.info.phone")}</h3>
                  <p className="text-muted-foreground">(+33) 6 65 25 06 66</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t("contact.info.location")}</h3>
                  <p className="text-muted-foreground">Noisy le Grand, France</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-medium mb-4">{t("contact.info.followMe")}</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/thivakar-jeyaseelan-76b209268?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDAIhVfyiSumaB89GXKtZxw%3D%3D" className="bg-background p-3 rounded-full hover:bg-primary/10 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
              

