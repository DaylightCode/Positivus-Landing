import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={`container mx-auto px-4 lg:px-8 ${className || ''}`}>
      {children}
    </div>
  );
};