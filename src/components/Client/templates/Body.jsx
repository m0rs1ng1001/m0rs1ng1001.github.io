import React from 'react';

const Body = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full sm:w-96  bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Registrarse como lavadero
        </h2>
        <div className='border border-solid p-10 mr-60 rounded-md'>
          <p>logo</p>
        </div>
        <form className='mt-10'>
          <div className="mb-2">
            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-600 w-1/4 pr-4">
                Código
              </label>
              <input
                type="text"
                id="codigo"
                className="mt-1 p-2 flex-grow border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-600 w-1/4 pr-4">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="mt-1 p-2 flex-grow border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-600 w-1/4 pr-4">
                Ciudad
              </label>
              <input
                type="text"
                id="ciudad"
                className="mt-1 p-2 flex-grow border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-600 w-1/4 pr-4">
                Correo
              </label>
              <input
                type="email"
                id="correo"
                className="mt-1 p-2 flex-grow border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-600 w-1/4 pr-4">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                className="mt-1 p-2 flex-grow border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>
          
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-10"
          >
            Registrarse
          </button>
          <button className="bg-custom-botones text-white font-semibold mt-4 py-2 px-4 rounded hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-700 w-full"><a href="/registeruser">registrarse como usuario?</a></button>
        </form>
      </div>
    </div>
  );
};

export default Body;