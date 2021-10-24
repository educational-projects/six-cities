import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      <section className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src='../../img/test.png' alt='404'/>
        </div>
        <Link className={styles.link} to='/'>
          <span className={styles.span}>Go back</span>
        </Link>
      </section>
      <Footer/>
    </div>
  );
}

export default NotFound;
