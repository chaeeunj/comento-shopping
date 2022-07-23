import Navigation from '../components/Navigation';
import ThemeButton from '../components/ThemeButton';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { mockTheme1Produdcts, mockTheme2Produdcts } from '../data/mockData';

const Home = () => {
  return (
    <div>
      <div>
        <Navigation />
        <ThemeSection>
          <ThemeButton themeName={'#겨울방한템'} />
          <ThemeButton themeName={'#따순머그컵'} />
        </ThemeSection>

        <GrayLine />
      </div>

      <ProductSection>
        {/* TODO: mockData list를 화면에 노출하자 */}
        {/* 자바스크립트 map 문법 */}

        {mockTheme1Produdcts.map((product) => (
          <ProductCard
            name={product.id}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        ))}
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
