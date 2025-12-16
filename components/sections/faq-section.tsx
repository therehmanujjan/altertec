"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { fadeInUp } from "@/lib/animations"

export function FAQSection() {
  return (
    <SectionWrapper id="faq" className="bg-background/50">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with us."
      />

      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  )
}
