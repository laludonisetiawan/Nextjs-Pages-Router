import { fetcher } from '@/lib/swr/fetcher';
import ProductView from '@/views/Product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push('/auth/login');
    }
  }, []);

  const { data, error, isLoading } = useSWR('/api/product', fetcher);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
