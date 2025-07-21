import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Target, TrendingUp, ArrowRight, Play, Star } from 'lucide-react';

const AgencyLanding = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Definimos a identidade única da sua marca e posicionamento no mercado",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Digital Marketing",
      description: "Estratégias completas para aumentar sua presença digital e conversões",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Web Development",
      description: "Sites e aplicações web modernas, responsivas e otimizadas",
      image: "https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Creative Design",
      description: "Designs impactantes que comunicam sua mensagem de forma memorável",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const portfolio = [
    {
      client: "TechCorp",
      category: "Brand Identity",
      result: "+300% brand recognition",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      client: "StartupX",
      category: "Digital Campaign",
      result: "+500% conversions",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      client: "E-commerce Plus",
      category: "Web Platform",
      result: "+200% sales",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const stats = [
    { number: "150+", label: "Projetos Entregues" },
    { number: "98%", label: "Satisfação Cliente" },
    { number: "5x", label: "ROI Médio" },
    { number: "24h", label: "Tempo Resposta" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
              <span className="text-xl font-bold">CreativeAgency</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">Sobre</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Fale Conosco
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  Criamos
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400"> Experiências</span>
                  <br />Memoráveis
                </h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Somos uma agência criativa que transforma ideias em realidades digitais impactantes. 
                  Sua marca merece se destacar no mercado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    Ver Nosso Trabalho
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Assista o Vídeo
                  </button>
                </div>
                <div className="flex items-center gap-8 text-purple-100">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Agência Premiada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>150+ Clientes</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Creative Team"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">5.0</span>
                    </div>
                    <p className="text-gray-800 font-semibold">98% Satisfação</p>
                    <p className="text-gray-600 text-sm">dos nossos clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital e acelerar seu crescimento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como ajudamos nossos clientes a alcançar resultados extraordinários.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.client}</h3>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-4">{project.result}</p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2">
                    Ver Case Completo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre Nossa Agência
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Somos uma equipe apaixonada por criar experiências digitais que geram resultados reais. 
                Com mais de 5 anos de experiência, já ajudamos centenas de empresas a crescer.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Foco em Resultados</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Crescimento Sustentável</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Equipe Especializada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Qualidade Premiada</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Conheça Nossa Equipe
              </button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Transformar Sua Marca?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar sua empresa a se destacar no mercado digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Solicite uma Proposta
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Agende uma Reunião
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
                <span className="text-xl font-bold">CreativeAgency</span>
              </div>
              <p className="text-gray-400">
                Transformando ideias em experiências digitais memoráveis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Creative Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@creativeagency.com</li>
                <li>+55 11 99999-9999</li>
                <li>São Paulo, SP</li>
                <li>Rua das Flores, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Creative Agency. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgencyLanding;