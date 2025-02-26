import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>

return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Sitio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="/" 
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'text-white')}
              end
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'text-white')}
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'text-white')}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'text-yellow-400' : 'text-white')}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
    
    </>
    
  )
}
