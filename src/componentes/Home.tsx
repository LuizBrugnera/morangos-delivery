import React from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Cabeçalho */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">🍓 Morango Express</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-red-200">
              Início
            </a>
            <a href="#" className="hover:text-red-200">
              Produtos
            </a>
            <a href="#" className="hover:text-red-200">
              Sobre
            </a>
            <a href="#" className="hover:text-red-200">
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer" />
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            <Menu className="w-6 h-6 cursor-pointer md:hidden" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-red-100 py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-red-800 mb-4">
            Morangos Frescos na Sua Porta
          </h1>
          <p className="text-xl text-red-700 mb-8">
            Deliciosos, suculentos e entregues em até 2 horas!
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Peça Agora
          </button>
        </div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-25"></div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            Nossos Produtos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Morango Tradicional", "Morango Orgânico", "Cesta Mista"].map(
              (produto, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={produto}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">
                      {produto}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-red-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Morango Express</h3>
              <p>Entregando felicidade em forma de morango desde 2023.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p>Email: contato@morangoexpress.com</p>
              <p>Telefone: (11) 1234-5678</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 cursor-pointer" />
                <Instagram className="w-6 h-6 cursor-pointer" />
                <Twitter className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2023 Morango Express. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};
