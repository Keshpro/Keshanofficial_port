"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@keshanpandi.me",
      href: "mailto:hello@keshanpandi.me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0771844491",
      href: "tel:0771844491",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Matale, Sri Lanka",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#2a3548] bg-[#10182c] px-6 py-28"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Steel-blue glow */}
        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#4a6fa5]/10 blur-[150px]" />

        {/* Gold glow */}
        <div className="absolute right-[-15%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>


      <div className="relative mx-auto max-w-6xl">

        {/* =========================================
            TOP LABEL
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
            <Sparkles size={16} className="text-[#D4AF37]" />
          </div>

          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#8b96ab]/60">
            Let&apos;s Connect
          </span>
        </motion.div>


        {/* =========================================
            MAIN HEADING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <h2 className="text-5xl font-black tracking-tight text-[#e8eaf0] md:text-7xl">
            Have a project
            <br />

            <span className="bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#c4a02f] bg-clip-text text-transparent">
              in mind?
            </span>
          </h2>

          <div className="mt-7 flex justify-center">
            <div className="h-[3px] w-20 rounded-full bg-[#D4AF37]" />
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#8b96ab] md:text-base">
            I&apos;m currently looking for internship opportunities and
            interesting projects. Whether you have an idea, an opportunity,
            or simply want to connect — my inbox is open.
          </p>

        </motion.div>


        {/* =========================================
            AVAILABILITY
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-5 py-2.5"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-emerald-300/70">
            Open to internship opportunities
          </span>
        </motion.div>


        {/* =========================================
            CONTACT CARDS
        ========================================= */}

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">

          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >

                <Link
                  href={item.href}
                  className="group relative flex h-full min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border border-[#2a3548] bg-[#0d1424]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-[#0d1424]"
                >

                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/0 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/10" />

                  {/* Icon */}
                  <div className="relative flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#0a0e1a]">
                      <Icon size={18} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#8b96ab]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                    />

                  </div>


                  {/* Info */}
                  <div className="relative mt-8">

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8b96ab]/60">
                      {item.label}
                    </p>

                    <p className="mt-2 break-words text-sm font-semibold text-[#a8b2c4] transition-colors duration-300 group-hover:text-[#e8eaf0]">
                      {item.value}
                    </p>

                  </div>

                </Link>

              </motion.div>
            );
          })}

        </div>


        {/* =========================================
            BIG EMAIL CTA
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5"
        >

          <a
            href="mailto:hello@keshanpandi.me"
            className="group relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[28px] border border-[#D4AF37]/15 bg-gradient-to-r from-[#D4AF37]/[0.08] to-[#c4a02f]/[0.04] p-8 text-center transition-all duration-500 hover:border-[#D4AF37]/30 md:flex-row md:p-10 md:text-left"
          >

            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/0 blur-[100px] transition-all duration-700 group-hover:bg-[#D4AF37]/10" />

            <div className="relative">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]/70">
                Start a conversation
              </p>

              <p className="mt-3 text-xl font-bold text-[#e8eaf0] md:text-2xl">
                hello@keshanpandi.me
              </p>

            </div>


            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-[#0a0e1a] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <ArrowUpRight size={22} />
            </div>

          </a>

        </motion.div>


        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#8b96ab]/40">
            Based in Sri Lanka · Available Worldwide
          </p>
        </motion.div>

      </div>
    </section>
  );
}