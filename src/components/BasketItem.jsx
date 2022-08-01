import styled from 'styled-components';

const BasketItem = ({ thumbnail, name, price, onClickRemoveButton }) => {
  return (
    <>
      <BasketItemStyled>
        <RowLayout>
          <RowLayout>
            <ProductImage style={{ backgroundImage: `url(${thumbnail})` }} />
            <ColumnLayout>
              <ProductName>{name}</ProductName>
              <div>{price}원</div>
            </ColumnLayout>
          </RowLayout>

          <CloseButton onClick={onClickRemoveButton}>X</CloseButton>
        </RowLayout>
      </BasketItemStyled>
      <GrayLine />
    </>
  );
};

export default BasketItem;

const BasketItemStyled = styled.div`
  padding: 16px;
  margin: 10px 0px;
  width: 360px;
`;

const RowLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.div`
  width: 120px;
  height: 100px;
  background-size: cover;
  background-position: center;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const ProductName = styled.div`
  font-style: normal;
  font-weight: 700px;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;

const GrayLine = styled.div`
  height: 1px;
  width: 342px;
  background: #eeeeee;
`;
