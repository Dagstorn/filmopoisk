import { ChangeEvent } from 'react';
import styles from './CustomInput.module.css';
import classNames from 'classnames';

interface CustomInputProps {
    value: string;
    onChange: (value: any) => void;
    placeholder?: string;
    inputType?: string;
    className?: string;
}

function CustomInput({ value, onChange, placeholder = '', inputType = 'text', className }: CustomInputProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input
            className={classNames(styles.customInput, className)}
            type={inputType}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
}

export default CustomInput;
