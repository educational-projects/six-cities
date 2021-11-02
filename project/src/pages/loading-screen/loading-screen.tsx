import styles from './loading-screen.module.css';

function Loading(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrappew}>
        <img className={styles.spiner} src="../../img/loading.gif" alt="loading" />
      </div>
    </div>
  );
}

export default Loading;
