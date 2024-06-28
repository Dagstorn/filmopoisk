import React from 'react';
import styles from './ArrowBtn.module.css';
import classNames from 'classnames';

interface ArrowBtnProps {
    direction?: 'left' | 'right';
    disabled?: boolean;
    onClick: () => void;
    className?: string;
}


const ArrowBtn: React.FC<ArrowBtnProps> = (
    {
        className,
        disabled = false,
        onClick,
        direction = "left"
    }
) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(styles.button, className, { [styles.disabled]: disabled })} >
            {direction === "left" ?
                (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z" fill="#1B1F23" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.93974 13.78C5.81307 13.78 5.68641 13.7333 5.58641 13.6333C5.39307 13.44 5.39307 13.12 5.58641 12.9267L9.93307 8.58001C10.2531 8.26001 10.2531 7.74001 9.93307 7.42001L5.58641 3.07335C5.39307 2.88001 5.39307 2.56001 5.58641 2.36668C5.77974 2.17335 6.09974 2.17335 6.29307 2.36668L10.6397 6.71335C10.9797 7.05335 11.1731 7.51335 11.1731 8.00001C11.1731 8.48668 10.9864 8.94668 10.6397 9.28668L6.29307 13.6333C6.19307 13.7267 6.06641 13.78 5.93974 13.78Z" fill="#1B1F23" />
                    </svg>
                )
            }
        </button>
    );
};

export default ArrowBtn;
