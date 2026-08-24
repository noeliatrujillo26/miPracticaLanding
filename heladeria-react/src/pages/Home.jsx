import { Link } from 'react-router-dom';
import { TarjetaHelado } from '../TarjetaHelado';

export function Home() {
  return (
    <div className="bg-pink-50 text-gray-800 font-sans min-h-screen">
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-3xl">🍦</span>
          <h1 className="text-2xl font-bold text-pink-600">Noelia's Gelato</h1>
        </div>
        <div>
          <Link to="/login" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow">
            🔐 Acceso Admin
          </Link>
        </div>
      </nav>

      <section className="text-center py-16 px-4 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 text-white shadow-inner">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">¡Los helados más deliciosos de la ciudad!</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">Ingredientes 100% naturales, elaborados artesanalmente todos los días.</p>
      </section>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-700 mb-10">Sabores Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TarjetaHelado emoji="🍨" colorBg="bg-amber-100" nombre="Vainilla & Caramelo" descripcion="Vainilla pura de Papantla con hilos de caramelo salado suave." precio={45} />
          <TarjetaHelado emoji="🍓" colorBg="bg-rose-100" nombre="Fresa con Crema" descripcion="Fresas frescas del campo mezcladas con crema artesanal batida." precio={48} />
          <TarjetaHelado emoji="🍫" colorBg="bg-amber-200" nombre="Chocolate Oscuro 70%" descripcion="Para amantes del cacao intenso con chispas de chocolate amargo." precio={50} />
        </div>
      </main>
    </div>
  );
}