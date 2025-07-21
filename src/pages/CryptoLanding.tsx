import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown, Shield, Zap, Globe, BarChart3, Wallet, ArrowRight, Star, Lock, Users } from 'lucide-react';

const CryptoLanding = () => {
  const [cryptoPrices, setCryptoPrices] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 45234.67, change: 2.34, positive: true },
    { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -1.23, positive: false },
    { symbol: 'ADA', name: 'Cardano', price: 1.23, change: 5.67, positive: true },
    { symbol: 'DOT', name: 'Polkadot', price: 23.45, change: -0.89, positive: false }
  ]);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Máxima",
      description: "Proteção militar com autenticação multi-fator e cold storage"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Trading Instantâneo",
      description: "Execute ordens em milissegundos com nossa engine avançada"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Avançado",
      description: "Ferramentas profissionais de análise técnica e fundamental"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Suporte Global",
      description: "Atendimento 24/7 em mais de 50 idiomas"
    }
  ];

  const tradingFeatures = [
    "Spot Trading",
    "Futures & Derivatives", 
    "Margin Trading",
    "DeFi Staking",
    "NFT Marketplace",
    "P2P Trading"
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Crypto Trader",
      content: "A melhor plataforma que já usei. Interface intuitiva e execução rápida.",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      profit: "+234%"
    },
    {
      name: "Sarah Kim",
      role: "DeFi Investor",
      content: "Staking rewards incríveis e suporte excepcional. Recomendo!",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
      profit: "+156%"
    },
    {
      name: "Marcus Silva",
      role: "Portfolio Manager",
      content: "Ferramentas profissionais que me ajudam a maximizar retornos.",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150",
      profit: "+189%"
    }
  ];

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrices(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price + (Math.random() - 0.5) * 100,
        change: (Math.random() - 0.5) * 10,
        positive: Math.random() > 0.5
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CryptoX</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#trading" className="text-gray-400 hover:text-yellow-400 transition-colors">Trading</a>
              <a href="#features" className="text-gray-400 hover:text-yellow-400 transition-colors">Features</a>
              <a href="#security" className="text-gray-400 hover:text-yellow-400 transition-colors">Segurança</a>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Começar Trading
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-yellow-900/10 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Lock className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">Exchange Licenciada</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  O Futuro do
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Trading</span>
                  <br />Está Aqui
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Negocie Bitcoin, Ethereum e mais de 500 criptomoedas com segurança institucional, 
                  taxas baixas e execução instantânea. Sua porta de entrada para o futuro financeiro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Criar Conta Grátis
                  </button>
                  <button className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-200">
                    Ver Demo
                  </button>
                </div>
                <div className="flex items-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>5M+ usuários</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span>$50B+ volume</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6">Preços em Tempo Real</h3>
                  <div className="space-y-4">
                    {cryptoPrices.map((crypto, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            {crypto.symbol.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white font-semibold">{crypto.symbol}</p>
                            <p className="text-gray-400 text-sm">{crypto.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold">${crypto.price.toLocaleString()}</p>
                          <div className={`flex items-center gap-1 ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
                            {crypto.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                            <span className="text-sm">{crypto.positive ? '+' : ''}{crypto.change.toFixed(2)}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features Section */}
      <section id="trading" className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ferramentas de Trading Profissional
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tudo que você precisa para maximizar seus lucros no mercado cripto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-yellow-500/20 text-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature}</h3>
                <p className="text-gray-400 mb-4">
                  Ferramentas avançadas para {feature.toLowerCase()} com execução instantânea.
                </p>
                <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors flex items-center gap-2 mx-auto">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Por que Escolher CryptoX?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A plataforma mais segura e completa para seus investimentos em criptomoedas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-yellow-500/20 text-yellow-400 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-6">
                Segurança de Nível Bancário
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Seus fundos estão protegidos por tecnologia militar, cold storage e seguro institucional. 
                Nunca houve um hack bem-sucedido em nossa plataforma.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "98% dos fundos em cold storage",
                  "Autenticação multi-fator obrigatória",
                  "Seguro de até $250M por usuário",
                  "Auditoria de segurança trimestral"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-1">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Saiba Mais Sobre Segurança
              </button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Security"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Traders de Sucesso
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Veja como nossos usuários estão maximizando seus lucros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-green-400 font-bold">{testimonial.profit} lucro</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece a Investir Hoje!
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhões de investidores que já descobriram o futuro das finanças.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Criar Conta Grátis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
              Baixar App Mobile
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding border-t border-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">CryptoX</span>
              </div>
              <p className="text-gray-400">
                A plataforma mais segura e completa para trading de criptomoedas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Trading</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Spot Trading</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Futures</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Margin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DeFi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CryptoX. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CryptoLanding;