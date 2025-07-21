import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, ShoppingCart, Search, Filter, Heart, Plus, Minus, Truck } from 'lucide-react';

const FoodDeliveryLanding = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    { id: 'popular', name: 'Popular', icon: '🔥' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burger', icon: '🍔' },
    { id: 'sushi', name: 'Sushi', icon: '🍣' },
    { id: 'dessert', name: 'Sobremesa', icon: '🍰' },
    { id: 'drinks', name: 'Bebidas', icon: '🥤' }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      category: "burger",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "R$ 3,99",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Hambúrgueres",
      popular: true
    },
    {
      id: 2,
      name: "Pizza Express",
      category: "pizza", 
      rating: 4.6,
      deliveryTime: "30-40 min",
      deliveryFee: "Grátis",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Italiana",
      popular: true
    },
    {
      id: 3,
      name: "Sushi Master",
      category: "sushi",
      rating: 4.9,
      deliveryTime: "40-50 min", 
      deliveryFee: "R$ 5,99",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Japonesa",
      popular: false
    },
    {
      id: 4,
      name: "Sweet Dreams",
      category: "dessert",
      rating: 4.7,
      deliveryTime: "20-30 min",
      deliveryFee: "R$ 2,99", 
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Sobremesas",
      popular: true
    },
    {
      id: 5,
      name: "Fresh Juice Bar",
      category: "drinks",
      rating: 4.5,
      deliveryTime: "15-25 min",
      deliveryFee: "R$ 1,99",
      image: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Bebidas",
      popular: false
    },
    {
      id: 6,
      name: "Gourmet Burger",
      category: "burger",
      rating: 4.4,
      deliveryTime: "35-45 min",
      deliveryFee: "R$ 4,99",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
      cuisine: "Hambúrgueres",
      popular: false
    }
  ];

  const filteredRestaurants = activeCategory === 'popular' 
    ? restaurants.filter(r => r.popular)
    : restaurants.filter(r => r.category === activeCategory);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Média de 30 minutos para sua porta"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Frete Grátis",
      description: "Em pedidos acima de R$ 25"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Qualidade Garantida",
      description: "Restaurantes verificados e avaliados"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Rastreamento",
      description: "Acompanhe seu pedido em tempo real"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Voltar ao Portfolio
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🍕</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">FoodFast</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">São Paulo, SP</span>
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-red-600 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Comida Deliciosa
                <span className="text-yellow-300"> Entregue</span>
                <br />na Sua Porta
              </h1>
              <p className="text-xl text-pink-100 mb-8 leading-relaxed">
                Descubra os melhores restaurantes da sua cidade. Peça agora e receba 
                em minutos com qualidade garantida e preços incríveis!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 flex-1">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar restaurantes ou pratos..."
                    className="bg-transparent border-none outline-none text-gray-900 flex-1"
                  />
                </div>
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105">
                  Buscar
                </button>
              </div>
              <div className="flex items-center gap-8 text-pink-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Entrega em 30min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  <span>Frete grátis</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Food Delivery"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Star className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold">4.8 Avaliação</p>
                      <p className="text-gray-600 text-sm">50k+ pedidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-pink-100 text-pink-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Categorias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore nossa variedade de restaurantes e encontre exatamente o que você está procurando.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-pink-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  {restaurant.deliveryFee === "Grátis" && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Frete Grátis
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-600 text-sm">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      <span>{restaurant.deliveryFee}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Ver Cardápio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Peça sua comida favorita em 3 passos simples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Escolha o Restaurante",
                description: "Navegue pelos melhores restaurantes da sua região",
                icon: "🏪"
              },
              {
                step: "2", 
                title: "Faça seu Pedido",
                description: "Selecione seus pratos favoritos e personalize",
                icon: "🛒"
              },
              {
                step: "3",
                title: "Receba em Casa",
                description: "Acompanhe a entrega e desfrute da sua refeição",
                icon: "🚚"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Pedir?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Baixe nosso app e tenha acesso a ofertas exclusivas e entrega ainda mais rápida!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              📱 Baixar App
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-200">
              Pedir Agora
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
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🍕</span>
                </div>
                <span className="text-2xl font-bold">FoodFast</span>
              </div>
              <p className="text-gray-400">
                A melhor comida da cidade entregue na sua porta com rapidez e qualidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pizza</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hambúrguer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sushi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobremesas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Entrega</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@foodfast.com</li>
                <li>0800 123 4567</li>
                <li>WhatsApp: (11) 99999-9999</li>
                <li>Atendimento 24h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FoodFast. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoodDeliveryLanding;