import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({color,text,onClick}) => {
    return  <button 
        style={{backgroundColor:color}} 
        onClick={onClick}
        className="btn">
            {text}
        </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired

}