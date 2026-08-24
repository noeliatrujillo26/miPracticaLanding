import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export function Admin() {
  const navigate = useNavigate();

  const cerrarSesion = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">📊</span>
          <h1 className="text-xl font-bold">Administrador — Heladería Noelia's</h1>
        </div>
        <button 
          onClick={cerrarSesion} 
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200"
        >
          Cerrar Sesión
        </button>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-700">Resumen de Operaciones</h2>
          <span className="bg-green-100 text-green-700 font-medium text-xs px-3 py-1 rounded-full">● Conectado a Supabase</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-xs text-gray-400 font-bold uppercase">Ventas de Hoy</p>
            <h3 className="text-3xl font-extrabold text-pink-600 mt-2">$3,420 MXN</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-xs text-gray-400 font-bold uppercase">Pedidos Atendidos</p>
            <h3 className="text-3xl font-extrabold text-blue-600 mt-2">78</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-xs text-gray-400 font-bold uppercase">Sabor Más Vendido</p>
            <h3 className="text-xl font-bold text-amber-600 mt-2">Fresa con Crema</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-xs text-gray-400 font-bold uppercase">Stock de Botes</p>
            <h3 className="text-3xl font-extrabold text-green-600 mt-2">42 kg</h3>
          </div>
        </div>
      </main>
    </div>
  );
}