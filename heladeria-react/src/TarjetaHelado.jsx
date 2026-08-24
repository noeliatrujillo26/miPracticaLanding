export function TarjetaHelado({ emoji, colorBg, nombre, descripcion, precio }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <div className={`h-48 ${colorBg} flex items-center justify-center text-6xl`}>
        {emoji}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-pink-600 mb-2">{nombre}</h4>
        <p className="text-gray-600 text-sm mb-4">{descripcion}</p>
        <span className="text-lg font-extrabold text-gray-800">${precio} MXN</span>
      </div>
    </div>
  );
}