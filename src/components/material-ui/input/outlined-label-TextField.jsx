import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FormHelperText } from '@material-ui/core';

// internal imports
import {
    OutlinedTextField,
    FormLabel,
} from './elements';

export const OutlinedLabelTextField = forwardRef((props, ref) => {
    const {
        label,
        required,
        placeholder,
        error,
        helperText,
        ...others } = props;
    return (
        <Fragment>
            <FormLabel required={required}>{label}</FormLabel>
            <OutlinedTextField
                variant='outlined'
                fullWidth
                inputRef={ref}
                placeholder={placeholder}
                error={error}
                {...others}
            />
            {Boolean(helperText) && (
                <FormHelperText error={error}>{helperText}</FormHelperText>
            )}
        </Fragment>
    )
});

OutlinedLabelTextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    helperText: PropTypes.any,
    startIcon: PropTypes.any,
};

OutlinedLabelTextField.defaultProps = {
    required: false,
    placeholder: "Enter here",
};
export default OutlinedLabelTextField;