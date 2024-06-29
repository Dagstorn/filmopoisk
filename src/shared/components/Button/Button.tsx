import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ className, children, variant = 'default', ...props }) => {
    return (
        <button className={classNames(
            styles.button,
            {
                [styles.default]: variant === 'default',
                [styles.outline]: variant === 'outline',
            },
            className
        )} {...props}>
            {children}
        </button>
    );
};

export default Button;
