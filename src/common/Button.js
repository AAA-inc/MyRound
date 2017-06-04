import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
);

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    children: PropTypes.node,
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object
};

export default Button;
