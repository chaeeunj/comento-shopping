import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import BasketItem from '../components/BasketItem';
import * as storage from '../utils/storage';

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [basketItemPrice, setBasketItemPrice] = useState(0);

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
  }, []);

  useEffect(() => {
    const items = storage.getBasketItems();
    setBasketItems(items);
  }, [basketItemCount]);

  useEffect(() => {
    const items = storage.getBasketItems();
    let total = 0;
    items.forEach((item) => (total += item.price));
    setBasketItemPrice(total);
  }, []);

  const onClickRemoveButton = (productId) => {
    storage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
    const items = storage.getBasketItems();
    let total = 0;
    items.forEach((item) => (total += item.price));
    setBasketItemPrice(total);
  };

  return (
    <BasketStyled>
      <Navigation navigationName={'장바구니'} hasBack={true} />

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
      <AllBasketPrice>
        <div>
          <LeftBasketPrice>상품 금액({basketItemCount})개</LeftBasketPrice>
          <RightBasketPrice>{basketItemPrice}원</RightBasketPrice>
        </div>

        <BuyButton>주문하기</BuyButton>
      </AllBasketPrice>
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div``;

const AllBasketPrice = styled.div`
  padding-top: 227px;
`;

const LeftBasketPrice = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #616161;
`;

const RightBasketPrice = styled.div``;

const BuyButton = styled.div`
  width: 390px;
  height: 70px;
  background-color: #13e19c;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
