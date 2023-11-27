import { useRouter } from 'next/router';
const DetailProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>ini adalah id dari produk</h1>
      <h3>Product: {query.product} </h3>
    </div>
  );
};

export default DetailProduct;
