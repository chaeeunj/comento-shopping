import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import * as storage from '../utils/storage';

const Basket = () => {
  const [basketItems, setBasketItems] = useState();

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    console.log(items);
  }, []);

  const onClickRemoveButton = () => {
    alert('삭제');
  };

  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((item) => (
          <BasketItem
            key={item.id}
            thumbnail={item.thumbnail}
            name={item.name}
            price={item.price}
            onClickRemoveButton={onClickRemoveButton}
          />
        ))}
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div``;

const BasketItem = styled.div``;
