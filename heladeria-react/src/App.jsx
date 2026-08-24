import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';

function App() {
  return (
    <Routes>
      {/* Página Principal Pública (Catálogo) */}
      <Route path="/" element={<Home />} />

      {/* Página de Inicio de Sesión */}
      <Route path="/login" element={<Login />} />

      {/* Panel Administrador */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;