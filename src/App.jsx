import React, { useState } from 'react';

import fetchData from './services/api';
import initialData from './helpers/initialData';

import Card from './components/Card/Card';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetchData(city);
    setData(response);
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-emerald-500 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}

export default App;
