import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setCargando(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg('⚠️ Credenciales incorrectas o error de conexión.');
      setCargando(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-rose-50 to-amber-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full border border-pink-100">
        <div className="text-center mb-8">
          <span className="text-5xl inline-block mb-2">🔑</span>
          <h2 className="text-2xl font-bold text-gray-800">Panel de Administración</h2>
          <p className="text-sm text-gray-500 mt-1">Ingresa tus credenciales para acceder</p>
        </div>

        <form onSubmit={iniciarSesion} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Correo Electrónico</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ejemplo.com" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-red-500 font-medium text-center">{errorMsg}</p>
          )}

          <button 
            type="submit" 
            disabled={cargando}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition duration-300 disabled:opacity-50"
          >
            {cargando ? '⏳ Verificando...' : 'Entrar al Sistema'}
          </button>

          <div className="text-center mt-4">
            <Link to="/" className="text-xs text-pink-500 hover:underline">← Volver al sitio público</Link>
          </div>
        </form>
      </div>
    </div>
  );
}