import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications and mentoring junior developers. Implemented microservices architecture that improved system performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications for various clients. Collaborated with design teams to create pixel-perfect implementations of UI/UX designs.",
      technologies: ["Vue.js", "TypeScript", "Sass", "Figma"],
    },
    {
      type: "work",
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      period: "2015 - 2019",
      description:
        "Graduated with honors. Focused on software engineering, data structures, and algorithms. Active member of the programming club.",
      technologies: ["Java", "Python", "C++", "Database Design"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
            <p className="text-muted-foreground text-lg">My professional journey and educational background</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {exp.type === "work" ? (
                        <Briefcase className="h-5 w-5 text-primary" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
