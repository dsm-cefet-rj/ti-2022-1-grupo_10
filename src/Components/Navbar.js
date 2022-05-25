import { useState } from "react";
import {NavLink} from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <NavLink to="/home" className="brand-name"> Estoqueasy </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to="/cadastro"> Produto </NavLink>
          </li>
          <li>
            <NavLink to="/cadastroMP"> Insumo </NavLink>
          </li>
          <li>
            <NavLink to="/producao"> Produção </NavLink>
          </li>
          <li>
            <NavLink to="/venda"> Venda </NavLink>
          </li>
          <li>
            <NavLink to="/relatorioproduzidos"> Mais Produzidos </NavLink>
          </li>
          <li>
            <NavLink to="/relatorioMP"> Mais Utilizados </NavLink>
          </li>
          <li>
            <NavLink to="/relatorioVenda"> Mais Vendidos </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
