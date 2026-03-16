import React from 'react';

interface LogoProps {
    className?: string;
    style?: React.CSSProperties;
    color?: string;
}

/**
 * TWONNECT Stylized Logo
 * Implements a "Neo Geometric" aesthetic with Montserrat 800.
 * JSX is written on a single line to avoid accidental whitespace from newlines.
 */
const Logo: React.FC<LogoProps> = ({ className = "", style }) => {
    const height = style?.fontSize || '1.8rem';
    return (
        <img 
            src="/assests/TWONNECT logo_black.png" 
            alt="TWONNECT" 
            className={className} 
            style={{ height: height, width: 'auto', objectFit: 'contain', verticalAlign: 'middle', ...style }} 
        />
    );
};


export default Logo;
