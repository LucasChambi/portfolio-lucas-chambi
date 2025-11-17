'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Github, Mail, Linkedin } from 'lucide-react'

const skills = [
  { name: 'PHP', color: 'bg-[#474A8A]', icon: './assets/php.png' },
  { name: 'JavaScript', color: 'bg-[#FFE100] text-black', icon: './assets/js.png' },
  { name: 'HTML', color: 'bg-[#F1892D]', icon: './assets/html.png' },
  { name: 'REACT', color: 'bg-[#00C4C1]', icon: './assets/atom.png' },
  { name: 'TailwindCSS', color: 'bg-[#5FBCFF]', icon: './assets/css.png' },
  { name: 'CSS', color: 'bg-[#5400C1]', icon: './assets/css.png' },
  { name: 'Next.JS', color: 'bg-black', icon: '▲' },
  { name: 'GitHub', color: 'bg-[#202020]', icon: './assets/github.png' },
  { name: 'Git', color: 'bg-[#C54F00]', icon: './assets/social.png' },
  { name: 'MySQL', color: 'bg-[#006ECE]', icon: './assets/mysql-database.png' },
]
const isImage = (icon: string) => {
  if (typeof icon !== 'string') return false;
  return icon.endsWith('.png') || icon.endsWith('.svg') || icon.endsWith('.jpg');
};
const projects = [
  {
    title: 'Art',
    description: 'Um projeto em que cada obra de arte é concebida com esmero e originalidade.',
    image: '/art.png',
    link: 'https://lokiiigo.github.io/Art/',
    tags: ['Web Design', 'Art'],
  },
  {
    title: 'Blog de Programação',
    description: 'Site de blog onde usuários sem conhecimento prévio podem aprender sobre Linguagens de Programação e Lógica.',
    image: '/blog.png',
    link: 'https://github.com/LokiiiGo/Blog',
    tags: ['Blog', 'Educação'],
  },
  {
    title: 'QuizArt',
    description: 'Um jogo de perguntas sobre Movimentos Artísticos para trabalho de artes.',
    image: '/quizart.png',
    link: 'https://lokiiigo.github.io/Quiz-Art/',
    tags: ['Game', 'Educação'],
  },
  {
    title: 'Restaurant Tagline',
    description: 'Um projeto de criação de site sobre um restaurante com gastronomia totalmente inovadora.',
    image: '/restaurant-tagline.png',
    link: 'https://lokiiigo.github.io/RestaurantTagline/',
    tags: ['Restaurant', 'Web Design'],
  },
]

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">

      {/* Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            LBC
          </motion.div>
          <div className="flex gap-8">
            {['Home', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-black mb-6 text-balance"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 text-muted-foreground"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Lucas Bruno Calle Chambi
            </motion.h2>
            <motion.p
              className="text-2xl md:text-3xl text-muted-foreground mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Desenvolvedor Web
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg glass">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg glass">
                Contato
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-center">
              <span className="bg-clip-text text-white bg-gradient-to-r from-primary to-secondary">
                Sobre Mim
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="glass-dark border-2 border-primary/20 p-12">
                <div className="p-0">
                  <p className="text-xl md:text-2xl leading-relaxed text-center text-muted-foreground">
                    Sou um desenvolvedor web com foco em front-end e tenho experiência em criar interfaces de usuário
                    <span className="text-primary font-semibold"> atraentes e funcionais</span>.
                    Tenho paixão por tecnologia e estou sempre buscando aprender
                    <span className="text-secondary font-semibold"> novas habilidades</span>.
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-24"
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">Minhas Habilidades</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`${skill.color} p-6 rounded-2xl text-center font-bold text-white shadow-2xl cursor-pointer`}
            >
              {/* AQUI ESTÁ A CORREÇÃO: Renderização Condicional */}
              <div className="text-4xl mb-2 flex justify-center items-center">
                {isImage(skill.icon) ? (
                  // Se for um caminho de imagem, renderiza a tag <img>
                  // Adicione w-10 h-10 (ou w-12 h-12 para text-4xl) para dar o tamanho
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  // Caso contrário (emoji/caractere), renderiza como texto
                  skill.icon
                )}
              </div>
              <div className="text-sm">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <section id="projetos" className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
              <span className="bg-clip-text text-white bg-gradient-to-r from-secondary to-accent">
                Meus Projetos
              </span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <Card className="glass-dark border-2 border-secondary/20 overflow-hidden">
                <div className="p-0">
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={projects[currentProject].image || "/placeholder.svg"}
                        alt={projects[currentProject].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-12">
                      <div className="flex gap-2 mb-4">
                        {projects[currentProject].tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-4xl font-bold mb-4">{projects[currentProject].title}</h3>
                      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {projects[currentProject].description}
                      </p>
                      <Button
                        size="lg"
                        className="rounded-full gap-2 glass" variant="outline"
                        onPress={() =>
                          window.open(projects[currentProject].link, '_blank', 'noopener,noreferrer')
                        }
                      >
                        Ver Projeto
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </Card>

              {/* Navigation Buttons */}
              <Button
                onPress={prevProject}
                size="lg"
                variant="outline"
                className="absolute top-1/2 -left-6 -translate-y-1/2 rounded-full w-12 h-12 glass z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onPress={nextProject}
                size="lg"
                variant="outline"
                className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-full w-12 h-12 glass z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-primary w-12' : 'bg-muted'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-clip-text text-white bg-gradient-to-r from-accent to-primary">
                Vamos Conversar?
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e colaborações. Entre em contato!
            </p>
            <div className="flex gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            &copy; 2025 Lucas Bruno Calle Chambi.
          </p>
        </div>
      </footer>
    </div>
  )
}