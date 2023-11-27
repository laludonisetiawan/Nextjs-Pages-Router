import Link from 'next/link';
import router, { useRouter } from 'next/router';
const LoginPage = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    router.push('/product');
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum punya akun? registrasi <Link href="/auth/register">disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
