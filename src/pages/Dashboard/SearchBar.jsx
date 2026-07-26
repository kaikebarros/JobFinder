import { FiFilter, FiSearch } from "react-icons/fi";
import "./Dashboardcss/Searchbar.css"
function SearchBar() {
  return (
    <>
      <div className="search">
        <div className="input">
        <FiSearch />
        <input type="text" placeholder="Buscar vagas, cargos ou empresas..." />

        <FiFilter />
         </div>
          <button className="buscar">Buscar</button>
      </div>

      
    </>
  );
}

export default SearchBar;
