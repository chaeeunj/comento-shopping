import styled from 'styled-components';

const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <ProductStyled>
      <ImgStyled src={thumbnail} />
      <NameStyled>{name}</NameStyled>
      <DescStyled>{description}</DescStyled>
    </ProductStyled>
  );
};

export default ProductCard;

const ProductStyled = styled.div`
  width: 342px;
  height: 296px;
  margin-top: 40px;
`;

const ImgStyled = styled.img`
  width: 341px;
  height: 204px;
`;

const NameStyled = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
`;

const DescStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
`;
