import { Products } from "../CartProduct";
import { CartVazio } from "../CartVasio";

import { StyledCart } from "./style";

export function Cart({ currentSale, setCurrentSale, item, setItem }) {
  return (
    <StyledCart>
      <div className="title">
        <h3>Carrinho de compras</h3>
      </div>
      <ul>
        {currentSale.length === 0 ? (
          <CartVazio />
        ) : (
          <>
            <Products
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              item={item}
              setItem={setItem}
            />
          </>
        )}
      </ul>
    </StyledCart>
  );
}
