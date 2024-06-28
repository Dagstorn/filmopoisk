import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';


const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => {
    return (
        <button className={classNames(styles.button, className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
