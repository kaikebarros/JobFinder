import { FiFilter, FiSearch } from "react-icons/fi";
import "./Dashboardcss/Searchbar.css"
import { useState } from "react";
function SearchBar({busca, setBusca}) {


  return (
    <>
      <div className="search">
        <div className="input">
        <FiSearch />
        <input type="text" placeholder="Buscar vagas, cargos ou empresas..."
        
        onChange={(e)=>setBusca (e.target.value)}
        
        
        />

        <FiFilter />
         </div>
          <button className="buscar">Buscar</button>
      </div>

      
    </>
  );
}

export default SearchBar;
