'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Github, Mail, Linkedin } from 'lucide-react'
import { Esteban } from 'next/font/google'
const skills = [
  { name: 'HTML', color: 'bg-orange-500', icon: './assets/html.png' },
  { name: 'CSS', color: 'bg-[#2093E6]', icon: './assets/css.png' },
  { name: 'JavaScript', color: 'bg-[#FFE100] text-black', icon: './assets/js.png' },
  { name: 'REACT', color: 'bg-[#2C2C2C]', icon: './assets/react.png' },
  { name: 'TailwindCSS', color: 'bg-slate-950', icon: './assets/tailwindcss.png' },
  { name: 'Next.JS', color: 'bg-black', icon: '▲' },
  { name: 'PHP', color: 'bg-[#787CB5]', icon: './assets/php.png' },
  { name: 'MySQL', color: 'bg-[#00758f]', icon: './assets/mysql-database.png' },
  { name: 'GitHub', bgColor: "text-[#fff]", color: 'bg-[#000]', icon: './assets/github.png' },
  { name: 'Git', color: 'bg-orange-700', icon: './assets/git-git.png' },
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
    link: 'https://github.com/LokiiiGo/art',
    tags: [/* 'Web Design', 'Arte', */ 'html', 'css', 'bootstrap'],
  },
  {
    title: 'Blog de Programação',
    description: 'Introdução ao Mundo da Programação',
    image: '/blog.png',
    link: 'https://github.com/LokiiiGo/blog',
    tags: [/* 'Blog', 'Educação', */ 'php', 'bootstrap'],
  },
  {
    title: 'QuizArt',
    description: 'Um jogo de perguntas sobre Movimentos Artísticos.',
    image: '/quizart.png',
    link: 'https://github.com/LokiiiGo/quiz-art',
    tags: [/* 'Game', 'Educação', */ 'html', 'tailwindcss', 'js'],
  },
  {
    title: 'Restaurant Tagline',
    description: 'Um projeto de criação de site de um restaurante com gastronomia inovadora.',
    image: '/restaurant-tagline.png',
    link: 'https://github.com/LokiiiGo/restaurant-tagline',
    tags: [/* 'Restaurante', 'Web Design', */ 'html', 'css', 'js'],
  },
  {
    title: 'Cyber Security Intelligence',
    description: 'Painel de ameaças em tempo real',
    image: '/cyber.png',
    link: 'https://github.com/LokiiiGo/cyber-security-intelligence',
    tags: [/* 'Sistemas de Segurança', 'Cyber',*/ 'next.js', 'tailwindcss', 'react'],
  },
  {
    title: "Stokki Life",
    description: "Gerenciamento de estoque para microempreendedores",
    image: "/stokki-life.png",
    link: "https://github.com/stokki-life-tcc",
    tags: [/* 'Esroque', 'Microepreededor'*/ 'laravel', 'mysql', 'tailwindcss'],
  }
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
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >

          </motion.div>
          <div className="flex gap-8">
            {['Home', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.00 }}
                whileHover={{ scale: 1.5, color: 'var(--color-primary)' }}
                className="text-sm transition-colors hover:text-primary font-extrabold"
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
              {/* A estrutura de botões está em correção */}
              {/* 
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg glass">
                Ver Projetos
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg glass">
                Contato
              </Button>
              */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção - Sobre */}
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

          {/* Habilidades */}
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
                  transition={{ delay: index * 0.00 }} /* Ajuste o atraso conforme necessário */
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${skill.color} p-6 rounded-2xl text-center font-bold text-white shadow-2xl cursor-pointer`}
                >
                  <div className="text-4xl mb-2 flex justify-center items-center">
                    {isImage(skill.icon) ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      skill.icon
                    )}
                  </div>
                  <div className="text-sm">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção - Projetos */}
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
                        src={projects[currentProject].image ?? "/seta-direita.png"}
                        alt={projects[currentProject].title}
                      />
                    </div>
                    <div className="p-12">
                      <div className="flex gap-2 mb-4">
                        {projects[currentProject].tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-1xl mb-4">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
                      <p className="text-1xl text-muted-foreground mb-8 leading-relaxed">
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

              {/* Botões de Navegação */}
              <Button
                onPress={prevProject}
                size="lx"
                variant="outline"
                className="absolute top-1/2 -left-6 bg-black -translate-y-1/2 rounded-full w-8 h-8 glass z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <Button
                onPress={nextProject}
                size="lx"
                variant="outline"
                className="absolute top-1/2 -right-6 bg-black -translate-y-1/2 rounded-full w-8 h-8 glass z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-primary w-12' : 'bg-muted'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de contato */}
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
            {/* Ícone de Perfil Adicionado Aqui */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12" 
            >
              {/* Alteração de foto em breve */}
              <img
                src="/foto-lucas-chambi.jfif"
                alt="Foto de Perfil de Lucas Bruno Calle Chambi"
                className="w-60 h-60 rounded-2xl object-cover mx-auto border-4 border-primary shadow-lg"
              />
            </motion.div>
            {/* Fim do Ícone de Perfil */}

            <div className="flex gap-2 justify-center">
              {/* possível mudança no email */}
              <a href="mailto: lucascalle880@gmail.com">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                </motion.div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/lucas-calle-6677ba333/" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </motion.div>
              </a>
              
              {/* Github */}
              <a href="https://github.com/LokiiiGo" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                    <Github className="w-4 h-4" />
                    Github
                  </Button>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-2xl">
            &copy; Portifólio - Lucas Chambi. Todos os Direitos Reservados
          </p>
        </div>
      </footer>
    </div>
  )
}