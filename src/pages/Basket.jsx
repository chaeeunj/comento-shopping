import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import BasketItem from '../components/BasketItem';
import * as storage from '../utils/storage';

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItemCount - 1);
  };

  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((product) => (
          <BasketItem
            key={product.id}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            onClickRemoveButton={() => onClickRemoveButton(product.id)}
          />
        ))}

      <div> 상품 금액({basketItemCount})개</div>
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div``;
