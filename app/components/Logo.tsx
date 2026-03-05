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
const Logo: React.FC<LogoProps> = ({ className = "", style, color }) => {
    const finalStyle = color ? { ...style, color } : style;

    return (
        <span className={`twonnect-logo ${className}`} style={finalStyle}>
            <span>TWONN</span><span className="logo-char-e"><span className="logo-e-bar" /><span className="logo-e-bar" /><span className="logo-e-bar" /></span><span>CT</span>
        </span>
    );
};

export default Logo;
