"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle2, Loader2 } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useTranslation()

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
      message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-muted p-8 rounded-[1.5rem] text-center"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{t("contact.success.title")}</h2>
        <p className="text-muted-foreground mb-6">{t("contact.success.description")}</p>
        <Button onClick={() => setIsSubmitted(false)}>{t("contact.success.sendAnother")}</Button>
      </motion.div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.namePlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.emailPlaceholder")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.subject")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contact.form.subjectPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.message")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="min-h-[150px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
        </Button>
      </form>
    </Form>
  )
}

