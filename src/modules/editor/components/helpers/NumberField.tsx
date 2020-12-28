import * as React from 'react';
import './EditorHelpers.css';

import { TextField } from '@rmwc/textfield';

interface IProps {
    value: string,
    onChange: (s: string) => void,
    error?: string,
    label: string,
    autoComplete?: string,
    required?: boolean
}

export const NumberField: React.SFC<IProps> = ({
    value,
    onChange,
    label,
    error,
    autoComplete,
    required
}) => {
    return (
        <TextField
            className="EditorField"
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
            outlined={true}
            size={5}
            label={label}
            autoComplete={autoComplete}
            required={required}
            pattern="\d*"
        />
    )
};

