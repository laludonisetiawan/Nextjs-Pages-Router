import style from '../styles/404.module.css';
import Image from 'next/image';
const Custom404 = () => {
  return (
    <div >
      <div className={style.error}>
        <Image src="/404.png" alt="404" width={500} height={300} />
        404 | Halaman tidak ditemukan
      </div>
    </div>
  )
}

export default Custom404