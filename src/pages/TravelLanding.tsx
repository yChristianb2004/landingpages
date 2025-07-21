import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, Search, Star, Plane, Hotel, Car, Camera, Globe, Heart, ArrowRight } from 'lucide-react';

const TravelLanding = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const destinations = [
    {
      name: "Paris, França",
      price: "R$ 2.499",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      description: "Cidade do amor e da luz"
    },
    {
      name: "Tokyo, Japão", 
      price: "R$ 3.299",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      description: "Tradição e modernidade"
    },
    {
      name: "Santorini, Grécia",
      price: "R$ 2.899",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      description: "Paraíso no Mar Egeu"
    },
    {
      name: "Bali, Indonésia",
      price: "R$ 2.199",
      image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      description: "Ilha dos deuses"
    },
    {
      name: "New York, EUA",
      price: "R$ 2.799",
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      description: "A cidade que nunca dorme"
    },
    {
      name: "Dubai, EAU",
      price: "R$ 3.499",
      image: "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      description: "Luxo no deserto"
    }
  ];

  const experiences = [
    {
      title: "Safari no Quênia",
      location: "Masai Mara",
      price: "R$ 4.999",
      duration: "7 dias",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9
    },
    {
      title: "Aurora Boreal",
      location: "Islândia",
      price: "R$ 3.799",
      duration: "5 dias",
      image: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8
    },
    {
      title: "Mergulho em Maldivas",
      location: "Ilhas Maldivas",
      price: "R$ 5.499",
      duration: "6 dias",
      image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      location: "São Paulo",
      content: "Viagem incrível! Tudo organizado perfeitamente, desde o voo até os passeios.",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      trip: "Paris, França"
    },
    {
      name: "Carlos Santos",
      location: "Rio de Janeiro", 
      content: "Experiência única! O atendimento foi excepcional e os destinos surpreendentes.",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      trip: "Tokyo, Japão"
    },
    {
      name: "Maria Costa",
      location: "Belo Horizonte",
      content: "Superou todas as expectativas! Já estou planejando a próxima viagem.",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      trip: "Bali, Indonésia"
    }
  ];

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Voos",
      description: "Melhores preços e horários"
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotéis",
      description: "Acomodações selecionadas"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transfers",
      description: "Transporte confortável"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Experiências",
      description: "Momentos inesquecíveis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">WanderLust</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#destinations" className="text-gray-600 hover:text-cyan-600 transition-colors">Destinos</a>
              <a href="#experiences" className="text-gray-600 hover:text-cyan-600 transition-colors">Experiências</a>
              <a href="#about" className="text-gray-600 hover:text-cyan-600 transition-colors">Sobre</a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Planejar Viagem
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-slide-up">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  Descubra o
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Mundo</span>
                  <br />Conosco
                </h1>
                <p className="text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Transforme seus sonhos de viagem em realidade. Oferecemos experiências únicas, 
                  destinos incríveis e momentos inesquecíveis ao redor do mundo.
                </p>
                
                {/* Search Form */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto mb-8">
                  <div className="flex flex-wrap gap-4 mb-6">
                    {['flights', 'hotels', 'packages'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                          activeTab === tab
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {tab === 'flights' ? '✈️ Voos' : tab === 'hotels' ? '🏨 Hotéis' : '📦 Pacotes'}
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="De onde?"
                        className="bg-transparent border-none outline-none text-gray-900 flex-1"
                      />
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Para onde?"
                        className="bg-transparent border-none outline-none text-gray-900 flex-1"
                      />
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        className="bg-transparent border-none outline-none text-gray-900 flex-1"
                      />
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <select className="bg-transparent border-none outline-none text-gray-900 flex-1">
                        <option>1 Passageiro</option>
                        <option>2 Passageiros</option>
                        <option>3+ Passageiros</option>
                      </select>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 mt-6 flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Buscar Viagens
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-8 text-cyan-100">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>150+ destinos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    <span>4.9 avaliação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>100k+ viajantes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-cyan-100 text-cyan-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Destinos Populares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore os destinos mais procurados pelos nossos viajantes e descubra lugares incríveis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <p className="text-white/80">{destination.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600">{destination.rating}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">A partir de</p>
                      <p className="text-2xl font-bold text-cyan-600">{destination.price}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-200 transform hover:scale-105">
                    Ver Pacotes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experiências Únicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Viva momentos inesquecíveis com nossas experiências exclusivas ao redor do mundo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600 text-sm">{experience.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{experience.location} • {experience.duration}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">A partir de</p>
                      <p className="text-2xl font-bold text-cyan-600">{experience.price}</p>
                    </div>
                    <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>
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
              O que Nossos Viajantes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de pessoas que viveram experiências incríveis conosco.
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
                    <p className="text-gray-600">{testimonial.location}</p>
                    <p className="text-cyan-600 text-sm">{testimonial.trip}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Sua Próxima Aventura?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Deixe-nos planejar a viagem dos seus sonhos. Experiências únicas te aguardam!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Planejar Viagem
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-200">
              Falar com Especialista
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
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">WanderLust</span>
              </div>
              <p className="text-gray-400">
                Transformando sonhos de viagem em realidade há mais de 10 anos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Europa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ásia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">América</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Oceania</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Voos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotéis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pacotes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Experiências</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@wanderlust.com</li>
                <li>0800 123 4567</li>
                <li>WhatsApp: (11) 99999-9999</li>
                <li>Atendimento 24h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WanderLust. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelLanding;