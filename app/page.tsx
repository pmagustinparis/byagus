"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ExternalLink, Twitter, Github, Menu, X, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const products = [
    {
      name: "ProblemFinder",
      description: "Validate startup ideas instantly using AI.",
      url: "https://problemfinder.ai",
      color: "from-violet-500 to-purple-500",
      icon: "🤖",
    },
    {
      name: "DetectordeIA",
      description: "Detect AI-generated content with high accuracy.",
      url: "https://detectordeia.ai",
      color: "from-rose-500 to-pink-500",
      icon: "🔍",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-zinc-100">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500"
          >
            byagus
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#products" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              href="https://twitter.com/builtbyagus"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com/pmagustinparis"
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:buildbyagus@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#products"
                className="text-sm text-zinc-400 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="text-sm text-zinc-400 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-4 py-2">
                <Link
                  href="https://twitter.com/builtbyagus"
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://github.com/pmagustinparis"
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="mailto:buildbyagus@gmail.com"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32 md:pt-32 md:pb-40">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
              Product Manager → Indie Hacker
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Hey, I'm Agustín <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
              After years building software for others, I'm now building for myself. I create simple, useful products —
              fast, focused, and driven by real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="#products"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                See my products
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition-colors text-center"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-800 flex items-center gap-2 text-zinc-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              Currently building new micro-SaaS products
            </div>
          </motion.div>
        </section>

        {/* Code-inspired divider */}
        <div className="w-full overflow-hidden py-8 bg-zinc-900/50">
          <div className="container mx-auto px-4">
            <div className="text-zinc-600 font-mono text-sm overflow-x-auto whitespace-nowrap">
              <span className="text-emerald-500">const</span> <span className="text-purple-400">agus</span> = {"{"}
              <span className="text-amber-400">role</span>: <span className="text-emerald-300">"indie hacker"</span>,
              <span className="text-amber-400">focus</span>:{" "}
              <span className="text-emerald-300">"building useful products"</span>,
              <span className="text-amber-400">location</span>: <span className="text-emerald-300">"Argentina"</span>{" "}
              {"}"};
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section id="products" className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Products</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Simple tools solving real problems. Each product is designed to be focused, useful, and easy to use.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={item}
                className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  className={product.color}
                ></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl">{product.icon}</div>
                    <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.color}`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-zinc-400 mb-6">{product.description}</p>
                  <Link
                    href={product.url}
                    target="_blank"
                    className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    Visit site
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            className="max-w-3xl mx-auto bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-zinc-400">Have a question or want to collaborate? Feel free to reach out.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:hello@byagus.com"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Send me an email
              </Link>
              <Link
                href="https://twitter.com/builtbyagus"
                target="_blank"
                className="px-6 py-3 flex items-center justify-center gap-2 bg-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                DM on Twitter
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-500 mb-6">
            Built by Agustín Paris — Indie hacking with <span className="text-red-500">❤️</span> from Argentina.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://twitter.com/builtbyagus"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com/pmagustinparis"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:buildbyagus@gmail.com"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
