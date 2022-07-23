import Navigation from '../components/Navigation';
import ThemeButton from '../components/ThemeButton';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { mockTheme1Produdcts, mockTheme2Produdcts } from '../data/mockData';
import React, { useState, useEffect } from 'react';

const Home = () => {
  // 다시 렌더링되는 조건 값(state)
  const [products, setProducts] = useState();

  // 조건에 의해서 실행되는 함수
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Produdcts);
    }, 1000);
  });

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else if (themeId === 2) {
      setProducts(mockTheme2Produdcts);
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
              key={product.id}
              name={product.id}
              description={product.description}
              thumbnail={product.thumbnail}
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
