import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Review from '../components/Review';
import { getProductDetail, mockReviews } from '../data/mockData';
import * as webStorage from '../utils/storage';

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const [activeMenuTab, setActiveMenuTab] = useState('description');
  const navigate = useNavigate();

  useEffect(() => {
    const response = getProductDetail(productId);
    setProduct(response);
  }, []);

  const onClickMenuTab = (menuTabName) => {
    setActiveMenuTab(menuTabName);
  };

  const onClickAddBasketButton = () => {
    // 장바구니에 아이템을 담는다
    webStorage.addBasket(product);

    // 장바구니 페이지로 이동한다
    navigate('/basket');
  };

  return (
    <Container>
      <Navigation />
      {product && (
        <main>
          <MainImage
            style={{
              backgroundImage: `url(${product.thumbnail})`,
            }}
          />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.price}원</ProductDescription>

          <MenuTabs>
            <MenuTab
              active={activeMenuTab === 'description'}
              onClick={() => onClickMenuTab('description')}>
              상품 설명
            </MenuTab>
            <MenuTab
              active={activeMenuTab === 'review'}
              onClick={() => onClickMenuTab('review')}>
              상품 후기
            </MenuTab>
          </MenuTabs>
          {activeMenuTab === 'description' && (
            <ProductDetailImage src={product.mainImage} alt="사진 설명" />
          )}

          {activeMenuTab === 'review' && (
            <div>
              {mockReviews.map((review) => (
                <Review
                  key={review.id}
                  profileImage={review.profileImage}
                  username={review.username}
                  score={review.score}
                  createdDate={review.createdDate}
                  reviewText={review.reviewText}
                />
              ))}
            </div>
          )}
        </main>
      )}
      <AddBasketButton onClick={onClickAddBasketButton}>
        장바구니 담기
      </AddBasketButton>
    </Container>
  );
};
export default ProductDetail;

const Container = styled.div``;
const MainImage = styled.div`
  width: 390px;
  height: 420px;
  background-size: cover;
  background-position: center;
  margin-bottom: 24px;
`;

const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  padding-bottom: 8px;
`;

const ProductDescription = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.86);
  padding-bottom: 24px;
`;

const MenuTabs = styled.div`
  width: 390px;
  display: flex;
`;

const MenuTab = styled.div`
  flex: 1;
  padding: 14px;
  border: solid 1px #eeeeee;
  text-align: center;
  background-color: ${(props) => props.active && '#eeeeee'};
`;

const ProductDetailImage = styled.img`
  width: 342px;
  margin-left: 24px;
`;

const AddBasketButton = styled.div`
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
