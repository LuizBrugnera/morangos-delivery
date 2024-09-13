import React from "react";
import { Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const numberToReal = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const [items, setItems] = React.useState([
    {
      id: 1,
      name: "Morango Tradicional",
      price: 15.99,
      quantity: 2,
      imagem: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Morango Orgânico",
      price: 19.99,
      quantity: 1,
      imagem: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Cesta Mista",
      price: 29.99,
      quantity: 1,
      imagem: "/placeholder.svg?height=80&width=80",
    },
  ]);

  const changeQuantity = (id: number, delta: number) => {
    setItems(
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <a
            className="text-2xl font-bold select-none cursor-pointer"
            href="/home"
          >
            🍓 Morango Express
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <a href="/home" className="flex text-red-600 hover:underline">
            <ArrowLeft className="mr-2" />
            Continuar Comprando
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Seu Carrinho</h2>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow mb-4"
              >
                <img
                  src={item.imagem}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600"> {numberToReal(item.price)}</p>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => changeQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => changeQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-4"
                  onClick={() => removeItem(item.id)}
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
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <Input
                className="mt-4 md:hidden"
                placeholder="Código de Desconto"
              />
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
                <CreditCard className="mr-2 h-4 w-4" /> Finalizar Compra
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-red-800 text-white py-4 mt-8 margin-">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Morango Express. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
