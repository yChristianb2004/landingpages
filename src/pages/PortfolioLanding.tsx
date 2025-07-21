import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Instagram, Code, Palette, Zap } from 'lucide-react';

const PortfolioLanding = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Next.js', level: 88 }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo e integração com pagamentos.',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Firebase', 'Vuex', 'CSS3'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Assistente de chat com inteligência artificial para atendimento ao cliente.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'OpenAI', 'FastAPI', 'React'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Website responsivo de portfolio com animações e design moderno.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel'],
      github: '#',
      live: '#'
    }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações web modernas e responsivas'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e experiências do usuário'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Otimização',
      description: 'Melhoria de performance e SEO para melhores resultados'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO, StartupX',
      content: 'Trabalho excepcional! Entregou exatamente o que precisávamos.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'João Santos',
      role: 'Founder, TechCorp',
      content: 'Profissional dedicado e com excelente qualidade técnica.',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Costa',
      role: 'Product Manager',
      content: 'Superou nossas expectativas em todos os aspectos do projeto.',
      avatar: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">Sobre</a>
              <a href="#projects" className="text-gray-600 hover:text-orange-600 transition-colors">Projetos</a>
              <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Serviços</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Olá, eu sou
                  <span className="text-yellow-300"> Alex</span>
                  <br />Desenvolvedor
                </h1>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Especialista em criar experiências digitais incríveis. Transformo ideias em código 
                  com design moderno e funcionalidade impecável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download CV
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
                    Ver Projetos
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Developer"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                      <div className="text-gray-600">Projetos</div>
                      <div className="text-gray-600">Concluídos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre Mim
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sou um desenvolvedor full-stack apaixonado por criar soluções digitais inovadoras. 
                Com mais de 5 anos de experiência, já desenvolvi projetos para startups e grandes empresas.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-orange-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meus Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente, demonstrando diferentes tecnologias e abordagens.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Código
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meus Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofereço soluções completas para suas necessidades digitais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-orange-100 text-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Depoimentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que meus clientes dizem sobre meu trabalho.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Estou sempre aberto a novos desafios e projetos interessantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-8">Entre em Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-orange-100">alex@developer.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-orange-100">+55 11 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-orange-100">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Sua mensagem"
                    rows={4}
                    className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>
                <button className="w-full bg-white text-orange-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2024 Alex Developer. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLanding;