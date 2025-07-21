import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Users, Target, Trophy, Calendar, Clock, Star, ArrowRight, CheckCircle, Zap, Heart } from 'lucide-react';

const FitnessLanding = () => {
  const [activeWorkout, setActiveWorkout] = useState(0);

  const workoutPlans = [
    {
      name: "Beginner",
      duration: "4 weeks",
      workouts: "3x/week",
      difficulty: "Easy",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Intermediate",
      duration: "6 weeks", 
      workouts: "4x/week",
      difficulty: "Medium",
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Advanced",
      duration: "8 weeks",
      workouts: "5x/week", 
      difficulty: "Hard",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Treinos Personalizados",
      description: "Planos adaptados ao seu nível e objetivos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros atletas e treinadores"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Acompanhamento",
      description: "Monitore seu progresso e conquiste metas"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexibilidade",
      description: "Treine quando e onde quiser"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      result: "Perdi 15kg em 3 meses",
      content: "O app mudou minha vida! Os treinos são desafiadores mas divertidos.",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      name: "Carlos Santos",
      result: "Ganhou 8kg de massa",
      content: "Finalmente consegui os resultados que sempre busquei. Recomendo!",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      name: "Maria Costa",
      result: "Melhorou condicionamento",
      content: "Nunca me senti tão forte e saudável. O suporte é incrível!",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FitPro</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#workouts" className="text-gray-400 hover:text-emerald-400 transition-colors">Treinos</a>
              <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-400 hover:text-emerald-400 transition-colors">Depoimentos</a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Começar Grátis
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Heart className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">#1 Fitness App</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  Transforme Seu
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Corpo</span>
                  <br />e Mente
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Treinos personalizados, acompanhamento profissional e uma comunidade que te motiva. 
                  Alcance seus objetivos fitness de forma inteligente e sustentável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Começar Treino Grátis
                  </button>
                  <button className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200">
                    Ver Planos
                  </button>
                </div>
                <div className="flex items-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>50k+ usuários ativos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <span>95% taxa de sucesso</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Fitness Training"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-500 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Treino de Hoje</p>
                        <p className="text-gray-400 text-sm">45 min • Upper Body</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Plans Section */}
      <section id="workouts" className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Planos de Treino
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Escolha o plano ideal para seu nível e objetivos. Todos incluem acompanhamento personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workoutPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in ${
                  activeWorkout === index ? 'ring-2 ring-emerald-500' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveWorkout(index)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center gap-4 text-gray-300 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {plan.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {plan.workouts}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      plan.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      plan.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {plan.difficulty}
                    </span>
                  </div>
                  <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
                    Começar Plano
                  </button>
                </div>
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
              Por que Escolher FitPro?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnologia avançada e metodologia comprovada para maximizar seus resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-emerald-500/20 text-emerald-400 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Histórias de Transformação
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Veja como nossos usuários alcançaram resultados incríveis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-2xl hover:bg-gray-600 transition-all duration-300 animate-fade-in"
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
                    <p className="text-emerald-400 font-medium">{testimonial.result}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comece Sua Transformação Hoje!
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com o FitPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Começar Grátis Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200">
              Ver Todos os Planos
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
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">FitPro</span>
              </div>
              <p className="text-gray-400">
                Transforme seu corpo e mente com treinos personalizados e acompanhamento profissional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Treinos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Iniciante</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intermediário</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Avançado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Especializado</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinadores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitnessLanding;