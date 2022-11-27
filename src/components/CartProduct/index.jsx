import { CartTotal } from "../CartTotal";
import { StyledProducts } from "./style";

export function Products({ currentSale, setCurrentSale, item, setItem }) {
  function remover(el, id) {
    const remove = currentSale.filter((prod) => {
      return prod.name !== el;
    });
    setCurrentSale(remove);
  }

  return (
    <>
      {currentSale.map((el) => {
        return (
          <StyledProducts key={el.id}>
            <div className="img">
              <img src={el.img} alt={el.name} />
            </div>
            <div className="divnome">
              <h3>{el.name}</h3>
              <small>{el.category}</small>
            </div>
            <button onClick={() => remover(el.name, el.id)}>Remover</button>
          </StyledProducts>
        );
      })}
      <CartTotal
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        item={item}
        setItem={setItem}
      />
    </>
  );
}
