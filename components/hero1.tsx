"use client"
import { motion } from "framer-motion"

import LogoLoop from "@/components/logo-loop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
]

/**
 * Altertec AI – SalesRocket-style Hero (TypeScript + React)
 * - Client Component (required for framer-motion)
 * - TailwindCSS utility classes
 * - Accessible semantics and ARIA labels
 */

interface AltertecHeroProps {
  logoSrc?: string // defaults to "/logo1.png"
}

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const fadeUpSofter = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const chipInView = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AltertecHero({ logoSrc = "/logo1.png" }: AltertecHeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white" aria-labelledby="hero-heading">
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AltertecAI_HERO-rltyZTdBqlONT7JXqalPKGhGLCaCAd.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Global dim overlay for readability over video */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-16 lg:px-8">
        {/* Copy column remains above video */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
          {/* Eyebrow */}
          <motion.span
            variants={fadeUpSofter}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] uppercase tracking-wide text-white/80"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2l2.39 4.84L20 8l-4 3.9.95 5.53L12 15.77 7.05 17.43 8 13 4 9l5.61-.16L12 2z"
                fill="currentColor"
              />
            </svg>
            AI for SMEs
          </motion.span>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-br from-white to-white/20 bg-clip-text text-transparent">
              AI Transformation for SMEs
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUpSofter}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            Altertec AI helps small and medium-sized businesses move beyond the hype of AI into real, measurable
            transformation. From workflow automation to custom AI products, we design solutions that save time, cut
            costs, and drive growth.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUpSofter} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="/contact"
              aria-label="Book your free AI audit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-[#E60000] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/20 transition-colors hover:bg-[#cc0000] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E60000] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book Your Free AI Audit
            </motion.a>
            <motion.a
              href="#process"
              aria-label="See how it works"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-white/15 bg-white/0 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* Social proof chip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={chipInView}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2"
          >
            <div className="flex -space-x-2">
              {[
                "https://framerusercontent.com/images/EWqUB3u1QqK5yVxS0bcN3gy7Rk.png",
                "https://framerusercontent.com/images/6zFDILuc1VYmY0uZSEDZJsduNuk.png",
                "https://framerusercontent.com/images/JOd4sUbFjk1O7ZYSPGkdbnXDTz0.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src || "/placeholder.svg"}
                  alt="User avatar"
                  className="h-7 w-7 rounded-full ring-2 ring-black object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-white/80">+4.7K Users</span>
          </motion.div>

          {/* Trusted by (optional) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={chipInView}
            className="mt-10 flex flex-wrap items-center gap-6 text-white/50"
          >
            <span className="text-xs uppercase tracking-wider">Trusted by</span>
            <div className="flex items-center gap-4 opacity-80">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-24 rounded bg-white/5" aria-hidden="true" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-auto"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <img src="/logo1.png" alt="Hero visual" className="h-fit w-full object-cover mt-32" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div style={{ height: "150px", position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  )
}
