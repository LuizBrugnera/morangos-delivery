import React from "react";
import { Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const [itens, setItens] = React.useState([
    {
      id: 1,
      nome: "Morango Tradicional",
      preco: 15.99,
      quantidade: 2,
      imagem: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      nome: "Morango Orgânico",
      preco: 19.99,
      quantidade: 1,
      imagem: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      nome: "Cesta Mista",
      preco: 29.99,
      quantidade: 1,
      imagem: "/placeholder.svg?height=80&width=80",
    },
  ]);

  const alterarQuantidade = (id: number, delta: number) => {
    setItens(
      itens
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: Math.max(0, item.quantidade + delta) }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const removerItem = (id: number) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  const total = itens.reduce(
    (sum, item) => sum + item.preco * item.quantidade,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">🍓 Morango Express</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <ArrowLeft className="mr-2" />
          <a href="#" className="text-red-600 hover:underline">
            Continuar Comprando
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Seu Carrinho</h2>
            {itens.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow mb-4"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.nome}</h3>
                  <p className="text-gray-600">R$ {item.preco.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => alterarQuantidade(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-2">{item.quantidade}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => alterarQuantidade(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-4"
                  onClick={() => removerItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              <div className="space-y-2 mb-4">
                {itens.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.nome} x{item.quantidade}
                    </span>
                    <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <Input className="mt-4" placeholder="Código de Desconto" />
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
                <CreditCard className="mr-2 h-4 w-4" /> Finalizar Compra
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-red-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Morango Express. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
