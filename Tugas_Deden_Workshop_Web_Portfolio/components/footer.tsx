import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">DEDEN JAMALUDIN</h3>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer passionate about creating amazing digital experiences.
              </p>
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

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
                <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>deden.jamaludin@example.com</p>
                <p>+62 812-3456-7890</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> by Deden Jamaludin © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
