import React from 'react';
 
const BlinkingBackground = ({ dotCount = 100 }) => {
    return (
        <div className="blinking-container">
            {Array.from({ length: dotCount }).map((_, i) => {
                const style = {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                };
                return <div key={i} className="dot" style={style} />;
            })}
        </div>
    );
};
 
export default BlinkingBackground;