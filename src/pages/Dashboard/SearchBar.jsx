import { FiFilter, FiSearch } from "react-icons/fi";
import "./Dashboardcss/Searchbar.css"
function SearchBar() {
  return (
    <>
      <div className="search">
        <FiSearch />
        <input type="text" placeholder="Buscar vagas, cargos ou empresas..." />

        <FiFilter />
      </div>
    </>
  );
}

export default SearchBar;
