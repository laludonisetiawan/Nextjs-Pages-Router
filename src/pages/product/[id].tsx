import { useRouter } from 'next/router';
const IdProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>ini adalah id dari produk</h1>
      <h3>Product: {query.id} </h3>
    </div>
  );
};

export default IdProduct;
