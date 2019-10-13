import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254499.81417402!2d24.73850242519298!3d60.10986782816844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki!5e0!3m2!1sen!2sfi!4v1570976654739!5m2!1sen!2sfi" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;