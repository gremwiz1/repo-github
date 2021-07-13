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
                width: size + margin + colorWidth,
                height: size + margin + colorWidth,
                background: `linear-gradient(to right, 
                    ${colorsLinearGradient})`
            }}>
            <img className="avatar" alt="аватар" src={src}
                style={{
                    width: size, height: size, borderWidth: margin,
                    borderColor: backgroundColor
                }} />
        </div>
    )
}
export default ColoredUserpic;