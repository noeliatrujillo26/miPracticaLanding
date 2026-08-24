import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export function Home() {
  // Estado para el carrito de compras
  const [carrito, setCarrito] = useState([]);
  const [mostrandoCarrito, setMostrandoCarrito] = useState(false);
  const [procesando, setProcesando] = useState(false);

  // Lista de helados
  const helados = [
    { id: 1, nombre: "Vainilla & Caramelo", precio: 45, emoji: "🍨", bg: "bg-amber-100" },
    { id: 2, nombre: "Fresa con Crema", precio: 48, emoji: "🍓", bg: "bg-rose-100" },
    { id: 3, nombre: "Chocolate Oscuro 70%", precio: 50, emoji: "🍫", bg: "bg-amber-200" }
  ];

  // Agregar producto al carrito
  const agregarAlCarrito = (helado) => {
    setCarrito([...carrito, helado]);
  };

  // Vaciar carrito
  const vaciarCarrito = () => setCarrito([]);

  // Calcular total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  // Registrar la compra en Supabase
  const realizarCompra = async () => {
    if (carrito.length === 0) return;
    setProcesando(true);

    // Guarda el registro en la tabla 'pedidos' de Supabase
    const { error } = await supabase
      .from('pedidos')
      .insert([
        { 
          total: total, 
          detalles: JSON.stringify(carrito),
          fecha: new Date().toISOString()
        }
      ]);

    setProcesando(false);

    if (error) {
      alert("Hubo un error al registrar la compra: " + error.message);
    } else {
      alert("¡Compra realizada con éxito! Gracias por tu pedido 🍦");
      vaciarCarrito();
      setMostrandoCarrito(false);
    }
  };

  return (
    <div className="bg-pink-50 text-gray-800 font-sans min-h-screen">
      {/* Navegación */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-3xl">🍦</span>
          <h1 className="text-2xl font-bold text-pink-600">Noelia's Gelato</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Botón Carrito */}
          <button 
            onClick={() => setMostrandoCarrito(!mostrandoCarrito)}
            className="relative bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-4 py-2 rounded-full transition shadow flex items-center gap-2"
          >
            🛒 Carrito
            {carrito.length > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {carrito.length}
              </span>
            )}
          </button>

          <Link 
            to="/login" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-full transition shadow"
          >
            Acceso Admin
          </Link>
        </div>
      </nav>

      {/* Ventana Modal del Carrito */}
      {mostrandoCarrito && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h3 className="text-xl font-bold text-gray-800">Tu Carrito 🛒</h3>
                <button onClick={() => setMostrandoCarrito(false)} className="text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>
              </div>

              {carrito.length === 0 ? (
                <p className="text-gray-500 text-center py-8">El carrito está vacío</p>
              ) : (
                <ul className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                  {carrito.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between items-center">
                      <span>{item.emoji} {item.nombre}</span>
                      <span className="font-bold text-pink-600">${item.precio} MXN</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {carrito.length > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span className="text-pink-600">${total} MXN</span>
                </div>
                <button 
                  onClick={realizarCompra}
                  disabled={procesando}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition shadow disabled:opacity-50 mb-2"
                >
                  {procesando ? 'Guardando en Supabase...' : 'Confirmar y Pagar'}
                </button>
                <button 
                  onClick={vaciarCarrito}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-2 rounded-xl transition text-sm"
                >
                  Vaciar Carrito
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 text-white shadow-inner">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">¡Los helados más deliciosos de la ciudad!</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">Ingredientes 100% naturales, elaborados artesanalmente todos los días.</p>
      </section>

      {/* Catálogo */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-700 mb-10">Sabores Destacados</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helados.map((helado) => (
            <div key={helado.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 flex flex-col justify-between">
              <div>
                <div className={`h-48 ${helado.bg} flex items-center justify-center text-6xl`}>{helado.emoji}</div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-pink-600 mb-2">{helado.nombre}</h4>
                  <p className="text-gray-600 text-sm mb-4">Elaborado artesanalmente con los mejores ingredientes.</p>
                  <span className="text-lg font-extrabold text-gray-800">${helado.precio} MXN</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button 
                  onClick={() => agregarAlCarrito(helado)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-xl transition shadow"
                >
                  + Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
