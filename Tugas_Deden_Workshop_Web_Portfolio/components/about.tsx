import { Card, CardContent } from "@/components/ui/card"
import { User, Code, Palette, Coffee } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Finding innovative solutions",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">Get to know more about who I am and what I do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <User className="h-32 w-32 text-primary/50" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hello! I'm Deden Jamaludin</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience in creating digital solutions that
                make a difference. I specialize in modern web technologies and have a keen eye for design.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Player</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Continuous Learner</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
