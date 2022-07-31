import Navigation from '../components/Navigation';
import ThemeButton from '../components/ThemeButton';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { mockTheme1Products, mockTheme2Products } from '../data/mockData';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // 다시 렌더링되는 조건 값(state)
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  // 조건에 의해서 실행되는 함수
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Products);
    }, 1000);
  });

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Products);
    } else if (themeId === 2) {
      setProducts(mockTheme2Products);
    }
  };

  return (
    <div>
      <div>
        <Navigation />
        <ThemeSection>
          <ThemeButton
            themeName={'#겨울방한템'}
            onClick={() => onClickThemeButton(1)}
          />
          <ThemeButton
            themeName={'#여름더워요'}
            onClick={() => onClickThemeButton(2)}
          />
        </ThemeSection>

        <GrayLine />
      </div>

      <ProductSection>
        {/* TODO: mockData list를 화면에 노출하자 */}
        {/* 자바스크립트 map 문법 */}

        {/* 삼항연산자 */}
        {products ? (
          products.map((product) => (
            <ProductCard
              onClick={() => navigate(`product/${product.id}`)}
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              thumbnail={product.thumbnail}
              mainImage={product.mainImage}
            />
          ))
        ) : (
          <div>테마를 선택해주세요</div>
        )}
      </ProductSection>
    </div>
  );
};

export default Home;

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;
