import React from 'react';
import reactDom from 'react-dom';

function ColoredUserpic({ src, size, margin, backgroundColor, colors,
    hoverColors, colorWidth }) {
    const [colorsLinearGradient, setColorsLinearGradient] = React.useState(colors);
    function onMouseEnter() {
        setColorsLinearGradient(hoverColors);
    }
    function onMouseLeave() {
        setColorsLinearGradient(colors);
    }
    return (
        <div className="border-gradient" onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                width: size,
                height: size,
                background: `linear-gradient(to right, 
                    ${colorsLinearGradient})`
            }}>
            <img className="avatar" alt="аватар" src={src}
                style={{
                    width: size, height: size, borderWidth: margin, padding: colorWidth,
                    borderColor: backgroundColor
                }} />
        </div>
    )
}
export default ColoredUserpic;