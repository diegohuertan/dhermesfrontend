import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginint.css';
import { login } from '../../consultas/NoLog';

function Loginint() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      if (response.success) {
        // Redirige al inicio después de un login exitoso
        navigate('/inicio');
      }
    } catch (error) {
      setError('Login failed. Please check your username and password.');
    }
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Capa con imagen de fondo */}
        <div className="LoginBg absolute inset-0 z-10"></div>
        <div className="absolute inset-0 z-20">
          <div
            style={{
              backgroundImage: "url('./pattern1.svg')",
              backgroundRepeat: 'repeat-y',
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="absolute inset-0"
          ></div>
        </div>
        <div className="absolute inset-0 z-30">
          <img className="perrologin" src={process.env.PUBLIC_URL + '/perrologin.png'} alt="Perro de Login"></img>
        </div>
        <div className="absolute inset-0 z-50">
          <div className="flex items-center justify-center h-screen">
            <div className="p-8 bg-">
              <form className="space-y-6 w-70" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                  <div>
                    <img src="/iconoTemp.svg" alt="Icono Temporal" className="h-20 w-20" />
                  </div>
                </div>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src="/logini1.svg" alt="Icono de Usuario" className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full px-10 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  />
                </div>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src="/logini2.svg" alt="Icono de Cerradura" className="h-5 w-5" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-10 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                  />
                </div>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="loginbuttonbg w-full mr-10 ml-10 flex justify-center py-2 px-3 border border-transparent rounded-full shadow-sm text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginint;
