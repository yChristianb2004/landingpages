import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Trophy, Users, Zap, Star, Gamepad2, Target, Crown, Sword, Shield, ArrowRight } from 'lucide-react';

const GameLanding = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [playerCount, setPlayerCount] = useState(125847);

  const games = [
    {
      title: "Battle Royale Arena",
      genre: "Battle Royale",
      players: "100 players",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sobreviva em uma arena épica com 100 jogadores"
    },
    {
      title: "Cyber Racing",
      genre: "Racing",
      players: "12 players",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Corridas futuristas em alta velocidade"
    },
    {
      title: "Fantasy Quest",
      genre: "RPG",
      players: "Multiplayer",
      image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Aventura épica em mundo fantástico"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Jogabilidade Fluida",
      description: "60 FPS garantidos em todos os dispositivos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiplayer Global",
      description: "Jogue com amigos do mundo inteiro"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Torneios Épicos",
      description: "Compete por prêmios incríveis"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Rankings",
      description: "Suba no ranking mundial"
    }
  ];

  const tournaments = [
    {
      name: "Championship Finals",
      prize: "$50,000",
      date: "15 Dez 2024",
      participants: "2,048",
      status: "Inscrições Abertas",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Weekly Arena",
      prize: "$5,000",
      date: "Todo Sábado",
      participants: "512",
      status: "Ativo",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rookie Cup",
      prize: "$1,000",
      date: "20 Dez 2024",
      participants: "256",
      status: "Em Breve",
      image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const streamers = [
    {
      name: "ProGamer_BR",
      viewers: "12.5k",
      game: "Battle Royale Arena",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      live: true
    },
    {
      name: "CyberRacer",
      viewers: "8.2k",
      game: "Cyber Racing",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
      live: true
    },
    {
      name: "FantasyMaster",
      viewers: "15.7k",
      game: "Fantasy Quest",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150",
      live: true
    }
  ];

  // Simulate player count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate games
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGame(prev => (prev + 1) % games.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">GameVerse</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#games" className="text-gray-400 hover:text-indigo-400 transition-colors">Jogos</a>
              <a href="#tournaments" className="text-gray-400 hover:text-indigo-400 transition-colors">Torneios</a>
              <a href="#community" className="text-gray-400 hover:text-indigo-400 transition-colors">Comunidade</a>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Jogar Agora
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-indigo-400">{playerCount.toLocaleString()} jogadores online</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  Entre na
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Arena</span>
                  <br />e Domine
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  A plataforma de jogos mais épica do mundo. Batalhe, compete e conquiste 
                  seu lugar no topo dos rankings globais. Sua jornada lendária começa aqui!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Jogar Grátis Agora
                  </button>
                  <button className="border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Ver Torneios
                  </button>
                </div>
                <div className="flex items-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Multiplayer Global</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span>Grátis para Jogar</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <img
                    src={games[activeGame].image}
                    alt={games[activeGame].title}
                    className="rounded-3xl shadow-2xl transition-all duration-500"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-500 p-3 rounded-full">
                        <Gamepad2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold">{games[activeGame].title}</p>
                        <p className="text-gray-400 text-sm">{games[activeGame].genre} • {games[activeGame].players}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Game Selector */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {games.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGame(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          activeGame === index ? 'bg-indigo-500' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Nossos Jogos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uma coleção épica de jogos para todos os estilos. Ação, estratégia, corrida e muito mais!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveGame(index)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {game.genre}
                    </span>
                    <span className="text-gray-300 text-sm">{game.players}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-300 mb-4">{game.description}</p>
                  <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Jogar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Por que GameVerse?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A plataforma mais avançada para gamers sérios que buscam a melhor experiência.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-indigo-500/20 text-indigo-400 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Torneios Épicos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Compete contra os melhores jogadores e ganhe prêmios incríveis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-2xl overflow-hidden hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tournament.status === 'Ativo' ? 'bg-green-500/20 text-green-400' :
                      tournament.status === 'Inscrições Abertas' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-gray-300">
                    <div className="flex items-center justify-between">
                      <span>Prêmio:</span>
                      <span className="text-green-400 font-bold">{tournament.prize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Data:</span>
                      <span>{tournament.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Participantes:</span>
                      <span>{tournament.participants}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Participar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Streamers ao Vivo
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Assista aos melhores jogadores em ação e aprenda novas estratégias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streamers.map((streamer, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={streamer.avatar}
                      alt={streamer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {streamer.live && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        LIVE
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{streamer.name}</h4>
                    <p className="text-gray-400 text-sm">{streamer.game}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 text-sm">{streamer.viewers} viewers</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Assistir Stream
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para a Batalha?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhões de jogadores e prove que você tem o que é preciso para ser um campeão!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Jogar Grátis Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200">
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
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">GameVerse</span>
              </div>
              <p className="text-gray-400">
                A plataforma de jogos mais épica do mundo. Batalhe, compete e conquiste!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Jogos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Battle Royale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Racing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RPG</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comunidade</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Torneios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rankings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Streams</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fórum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Report</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameVerse. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameLanding;