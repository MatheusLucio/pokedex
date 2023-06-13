import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    
    <div className={styles.BarraDePesquisa}>
      <input
        type="text"
        id="txtBusca"
        placeholder="Procure um Pokemon..."
        value={searchTerm}
       
<div className={styles.BarraDePesquisa}>
      <input
        type="text"
        id="txtBusca"
        placeholder="Procure um Pokemon..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button id="btnBusca">Buscar</button>
    </div>
  );
}