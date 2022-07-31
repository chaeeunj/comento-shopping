import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { getBasketItems } from '../utils/storage';

const Basket = () => {
  getBasketItems();
  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div``;
