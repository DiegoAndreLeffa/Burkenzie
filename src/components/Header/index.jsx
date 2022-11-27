import { useState } from "react";
import logo from "../../img/LogoHamburKenzie.svg";
import { StyledHeader } from "./style";

export function Header({ products, filteredProducts, setFilteredProducts }) {
  const [busca, setBusca] = useState("");

  function filtro() {
    const filtro = products.filter((produto) => {
      const { name, category } = produto;

      if (name.toLowerCase().includes(busca.toLowerCase())) {
        return produto;
      } else if (category.toLowerCase().includes(busca.toLowerCase())) {
        return produto;
      }
    });

    setFilteredProducts(filtro);
    return filtro;
  }

  return (
    <StyledHeader>
      <img src={logo} alt="Burger Kenzie" />

      <div>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button onClick={() => filtro()}>Pesquisar</button>
      </div>
    </StyledHeader>
  );
}
