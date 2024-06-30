import classNames from 'classnames';
import styles from './Spinner.module.css';

const Spinner = ({ extraClass }: { extraClass?: string }) => {
    return (
        <div className={classNames(styles.spinner, extraClass)}>
            <div className={styles.loader}></div>
        </div >
    );
};

export default Spinner;
