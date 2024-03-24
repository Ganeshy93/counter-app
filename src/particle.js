import React, { useEffect } from 'react';

const NameAnimation = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="name-animation">
            <div id="particles-js" />
            <div className="name-container">
                <h1 className="my-name">Your Name</h1>
            </div>
        </div>
    );
};

export default NameAnimation;
