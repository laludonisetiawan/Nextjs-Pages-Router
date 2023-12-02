import { signIn, signOut, useSession } from 'next-auth/react';
import style from './Navbar.module.css';

const Navbar = () => {
  const { data }: any = useSession();
  console.log(data);
  return (
    <div className={style.navbar}>
      <div className="big">Navbar</div>
      <div>
        {data && data.user.fullname}{' '}
        {data ? (
          <button className={style.button} onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button className={style.button} onClick={() => signIn()}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
