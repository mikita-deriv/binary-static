import PropTypes from 'prop-types';
import React     from 'react';

const IconTooltipLight = ({ className }) => (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
        <g fill='none' fillRule='evenodd'><circle cx='8' cy='8' r='7.5' stroke='#B0B3BF' /><g fill='#B0B3BF' transform='translate(6.5 4)'><circle cx='1.5' cy='1.25' r='1' /><rect width='1' height='5' x='1' y='3' rx='.5' /></g></g>
    </svg>
);

IconTooltipLight.propTypes = {
    className: PropTypes.string,
};

export { IconTooltipLight };
