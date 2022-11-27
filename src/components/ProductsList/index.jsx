import { toast } from "react-toastify";
import { StyledProductList } from "./style";

export function ProductList({
  products,
  currentSale,
  setCurrentSale,
  item,
  setItem,
}) {
  function handleClick(prod) {
    setItem((oldList) => [...oldList, prod.id]);

    const id = prod.id;

    if (item.includes(id) === false) {
      setCurrentSale((oldList) => [...oldList, prod]);
    } else {
      toast.error("Item ja foi adicionado");
    }
  }

  return (
    <StyledProductList>
      <ul>
        {products.map((prod) => {
          const { id, img, name, category, price } = prod;
          return (
            <li key={id}>
              <div>
                <img src={img} alt={name} />
              </div>
              <div>
                <h2>{name}</h2>
                <small>{category}</small>
                <p>
                  {price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button onClick={() => handleClick(prod)}>Adicionar</button>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledProductList>
  );
}
