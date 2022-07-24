import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { getProductDetail } from '../data/mockData';

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  return (
    <ProductDetailStyled>
      <Navigation />
      {product && (
        <ProductWrapper>
          <ProductImg src={product.thumbnail} wid5h="200" />
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDesc>{product.description}</ProductDesc>
        </ProductWrapper>
      )}
    </ProductDetailStyled>
  );
};

export default ProductDetail;

const ProductDetailStyled = styled.div``;

const ProductWrapper = styled.div`
  width: 390px;
  height: 420px;
`;

const ProductImg = styled.img`
  width: 390px;
  height: 420px;
`;

const ProductTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.01em;
  margin-top: 24px;
  margin-left: 24px;
`;

const ProductDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.86);
  margin-top: 8px;
  margin-left: 24px;
`;
