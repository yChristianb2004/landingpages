import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Palette, Zap, Globe, Users, ShoppingCart } from 'lucide-react';

const Home = () => {
  const landingPages = [
    {
      id: 'saas',
      title: 'SaaS Landing Page',
      description: 'Página moderna para produto SaaS com pricing tiers, testimonials e CTAs otimizados',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 'agency',
      title: 'Digital Agency',
      description: 'Landing page para agência digital com portfolio de cases e serviços',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      description: 'Loja online com catálogo de produtos, carrinho e checkout otimizado',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      id: 'portfolio',
      title: 'Creative Portfolio',
      description: 'Portfolio criativo para freelancers e profissionais criativos',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-orange-500'
    },
    {
      id: 'startup',
      title: 'Startup Launch',
      description: 'Landing page para lançamento de startup com lead capture e validação',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-red-500'
    },
    {
      id: 'fitness',
      title: 'Fitness App',
      description: 'App de fitness com treinos personalizados, tracking e comunidade ativa',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-emerald-500'
    },
    {
      id: 'crypto',
      title: 'Crypto Exchange',
      description: 'Plataforma de trading de criptomoedas com dashboard avançado e segurança',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery',
      description: 'App de delivery de comida com interface intuitiva e sistema de pedidos',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'bg-pink-500'
    },
    {
      id: 'travel',
      title: 'Travel Booking',
      description: 'Plataforma de reservas de viagem com busca avançada e experiências únicas',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-cyan-500'
    },
    {
      id: 'game',
      title: 'Gaming Platform',
      description: 'Plataforma de jogos online com torneios, rankings e comunidade gamer',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative section-padding">
          <div className="container-max text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Portfolio de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Landing Pages</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
              Demonstração das minhas habilidades em desenvolvimento web através de landing pages funcionais e otimizadas para conversão
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 text-white">
                <Code className="w-5 h-5" />
                <span>React & TypeScript</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 text-white">
                <Palette className="w-5 h-5" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 text-white">
                <Users className="w-5 h-5" />
                <span>UX/UI Design</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Projetos do Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPages.map((page, index) => (
              <div
                key={page.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${page.color} text-white`}>
                      {page.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{page.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {page.description}
                  </p>
                  
                  <Link
                    to={`/${page.id}`}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Ver Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white section-padding">
        <div className="container-max text-center">
          <p className="text-gray-400">
            © 2024 Portfolio Landing Pages - Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;