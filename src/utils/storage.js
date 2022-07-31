const BASKET = 'BASKET';

export const getBasketItems = () => {
  const items = localStorage.getItem(BASKET);
  return items ? JSON.parse(items) : [];
};

export const addBasket = (product) => {
  let items = getBasketItems();

  // 동일 상품이 있는 경우 추가하지 않음
  const isSameProduct = !!items.find((item) => item.id == product.id);
  if (!isSameProduct) {
    items.push(product);
    localStorage.setItem(BASKET, JSON.stringify(items));
  }
};
