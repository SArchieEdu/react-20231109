export const Product = ({ product }) => {
  if (!product) {
    return null;
  }

  const { name, type } = product;

  return (
    <div>
      <span>{name}</span> - <span>{type}</span>
    </div>
  );
};
