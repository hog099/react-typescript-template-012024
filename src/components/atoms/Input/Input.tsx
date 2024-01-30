import React from 'react';

interface Props {
    classContainer?: string;
    className?: string;
    height?: string;
    name: string;
    label?: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange?: (value: string) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    helperText?: string | any;
    endAddorment?: React.ReactNode;
}

export const InputComponent: React.FC<Props> = ({
    classContainer,
    className,
    height = '50',
    name,
    label,
    type = 'text',
    placeholder = '',
    value = '',
    onChange = () => null,
    required = false,
    helperText,
    endAddorment,
}) => {
    return (
        <div className={`relative mb-0 h-auto ${classContainer || ''}`}>
            {label && <label className='text-slate-700' htmlFor={`${name}-refid`}>{label}</label>}
            <input
                id={`${name}-refid`}
                className={`${className} w-full h-[${height}px] appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                name={name}
                placeholder={placeholder}
                type={type}
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {Boolean(endAddorment) && <span className="absolute z-10 inset-y-0 right-0 flex items-center px-2 mt-[20px]">{endAddorment}</span>}
            {helperText && <p className="text-sm leading-normal mt-1 ml-1 text-red-800 dark:text-red-500">{helperText}</p>}
        </div>
    );
};
