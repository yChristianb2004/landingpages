import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Users, Target, TrendingUp, CheckCircle, Play, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const StartupLanding = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lançamento Rápido",
      description: "Do conceito ao mercado em semanas, não meses"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança Garantida",
      description: "Proteção enterprise desde o primeiro dia"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Escalabilidade Global",
      description: "Infraestrutura pronta para milhões de usuários"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidade Ativa",
      description: "Junte-se a milhares de empreendedores"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Validação da Ideia",
      description: "Testamos seu conceito com nossos especialistas e comunidade"
    },
    {
      number: "02",
      title: "Desenvolvimento MVP",
      description: "Criamos um produto mínimo viável em tempo recorde"
    },
    {
      number: "03",
      title: "Lançamento e Tração",
      description: "Ajudamos você a ganhar seus primeiros usuários"
    },
    {
      number: "04",
      title: "Escala e Crescimento",
      description: "Suporte contínuo para expandir seu negócio"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, InnovateTech",
      content: "Em 3 meses saímos da ideia para 10k usuários. Incrível!",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Santos",
      role: "Founder, HealthApp",
      content: "O suporte da equipe foi fundamental para nosso sucesso.",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "João Costa",
      role: "CTO, EduPlatform",
      content: "Melhor decisão que tomamos. Recomendo para todos!",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <Rocket className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">LaunchPad</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-gray-600 hover:text-red-600 transition-colors">Como Funciona</a>
              <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-red-600 transition-colors">Depoimentos</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Começar Agora
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Rocket className="w-5 h-5" />
                  <span className="text-sm font-medium">Plataforma de Lançamento</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  Transforme Sua
                  <span className="text-yellow-300"> Ideia</span>
                  <br />em Realidade
                </h1>
                <p className="text-xl text-red-100 mb-8 leading-relaxed">
                  A plataforma completa para empreendedores que querem sair do zero ao sucesso. 
                  Valide, desenvolva e lance sua startup em tempo recorde.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Começar Gratuitamente
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Ver Demo
                  </button>
                </div>
                <div className="flex items-center gap-8 text-red-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Gratuito para começar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>1000+ startups lançadas</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Startup Launch"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-bold">95% Taxa de Sucesso</p>
                        <p className="text-gray-600 text-sm">Nos primeiros 6 meses</p>
                      </div>
                    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Startups Lançadas" },
              { number: "$50M+", label: "Capital Levantado" },
              { number: "95%", label: "Taxa de Sucesso" },
              { number: "30 dias", label: "Tempo Médio MVP" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e comprovado para transformar sua ideia em um negócio de sucesso.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que Escolher LaunchPad?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temos tudo que você precisa para transformar sua ideia em um negócio próspero.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-red-100 text-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como outros empreendedores transformaram suas ideias em negócios prósperos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
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
                <p className="text-gray-700 italic text-lg">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Fique por Dentro das Novidades
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Receba dicas exclusivas, estudos de caso e novidades do mundo das startups.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
              >
                Inscrever-se
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Lançar sua Startup?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empreendedores que já transformaram suas ideias em negócios de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Começar Gratuitamente
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-8 h-8 text-red-600" />
                <span className="text-2xl font-bold">LaunchPad</span>
              </div>
              <p className="text-gray-400">
                A plataforma completa para empreendedores transformarem ideias em negócios.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LaunchPad. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupLanding;