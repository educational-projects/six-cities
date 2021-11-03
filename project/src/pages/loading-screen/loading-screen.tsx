import { CircleLoader } from 'react-spinners';
import styles from './loading-screen.module.css';

function Loader(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <CircleLoader color='white'/>
      </div>
    </div>
  );
}

export default Loader;
