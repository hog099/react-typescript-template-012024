import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const LoginTemplate: React.FC<Props> = ({ children }) => {
    return <div className="w-screen min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">{children}</div>;
};
