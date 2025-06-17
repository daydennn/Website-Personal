"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  User,
  Code,
  Palette,
  Coffee,
  Send,
  Heart,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    alert("Pesan berhasil dikirim!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PHP",
    "MySQL",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
  ]

  const projects = [
    {
      title: "Website E-Commerce",
      description: "Platform jual beli online dengan fitur lengkap dan pembayaran terintegrasi",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi untuk mengelola tugas dan proyek tim dengan real-time updates",
      tech: ["Vue.js", "Express", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio responsif dengan desain modern dan animasi smooth",
      tech: ["Next.js", "Tailwind CSS"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">DEDEN JAMALUDIN</h1>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t mt-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" className="py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
                <a href="#skills" className="py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </a>
                <a href="#projects" className="py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
                <a href="#contact" className="py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Hi, Saya <span className="text-yellow-300 drop-shadow-lg">DEDEN JAMALUDIN</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Full Stack Developer yang passionate dalam menciptakan solusi digital yang amazing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Hubungi Saya
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                Download CV
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:deden@example.com">
                  <Mail className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Tentang Saya</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-80 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-2xl">
                  <User className="h-24 w-24 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Hello! Saya Deden Jamaludin</h3>

                <p className="text-muted-foreground mb-6">
                  Ketika tidak coding, saya suka mempelajari teknologi baru, berkontribusi pada open-source projects,
                  dan berbagi pengetahuan dengan komunitas developer.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg text-white shadow-lg">
                    <Code className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Clean Code</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg text-white shadow-lg">
                    <Palette className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">UI/UX Design</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-500 to-red-400 rounded-lg text-white shadow-lg">
                    <Coffee className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Problem Solver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Skills & Keahlian</h2>
            <p className="text-purple-100 mb-12">Teknologi dan tools yang saya kuasai</p>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  className={`text-sm px-4 py-2 font-semibold shadow-lg ${
                    index % 6 === 0
                      ? "bg-red-500 hover:bg-red-600"
                      : index % 6 === 1
                        ? "bg-blue-500 hover:bg-blue-600"
                        : index % 6 === 2
                          ? "bg-green-500 hover:bg-green-600"
                          : index % 6 === 3
                            ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                            : index % 6 === 4
                              ? "bg-purple-500 hover:bg-purple-600"
                              : "bg-pink-500 hover:bg-pink-600"
                  } text-white transition-all duration-300 hover:scale-105`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Projects Terbaru</h2>
              <p className="text-blue-100">Beberapa project yang telah saya kerjakan</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    index % 3 === 0
                      ? "bg-gradient-to-br from-red-400 to-pink-500"
                      : index % 3 === 1
                        ? "bg-gradient-to-br from-green-400 to-blue-500"
                        : "bg-gradient-to-br from-yellow-400 to-orange-500"
                  } text-white border-0`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Hubungi Saya</h2>
              <p className="text-blue-100">Mari diskusikan project Anda atau sekedar say hello</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Mari Terhubung</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${0 === 0 ? "bg-red-500" : 0 === 1 ? "bg-green-500" : "bg-blue-500"}`}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">cutedenz15@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${1 === 0 ? "bg-red-500" : 1 === 1 ? "bg-green-500" : "bg-blue-500"}`}
                    >
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-muted-foreground">+62 858-7146-1786</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${2 === 0 ? "bg-red-500" : 2 === 1 ? "bg-green-500" : "bg-blue-500"}`}
                    >
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-muted-foreground">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <CardDescription>Isi form di bawah dan saya akan membalas secepatnya</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Anda"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Pesan Anda..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-primary">DEDEN JAMALUDIN</h3>
              <p className="text-muted-foreground text-sm">Full Stack Developer</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:deden@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="border-t mt-6 pt-6">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> by Deden Jamaludin © 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
