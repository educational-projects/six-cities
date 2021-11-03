import styles from './loading-screen.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src="../../img/loading.gif" alt="loading" />
      </div>
    </div>
  );
}

export default Loader;
