import { StyledCartTotal } from "./style";

export function CartTotal({ currentSale, setCurrentSale, item, setItem }) {
  const valores = currentSale.reduce((a, b) => {
    return a + b.price;
  }, 0);

  function removeAll() {
    setCurrentSale([]);
    setItem([]);
  }

  return (
    <StyledCartTotal>
      <div>
        <h4>Total:</h4>
        <p>
          {valores.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </StyledCartTotal>
  );
}
