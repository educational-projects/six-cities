import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <>
      <Header/>
      <section className={styles.container}>
        <h1 className={styles.title}>404. Page not found</h1>
        <Link className={styles.link} to='/'>
          <span className={styles.span}>Go to back</span>
        </Link>
      </section>
      <Footer/>
    </>
  );
}

export default NotFound;
