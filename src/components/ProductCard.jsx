const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <div>
      <img width="200" src={thumbnail} />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default ProductCard;
