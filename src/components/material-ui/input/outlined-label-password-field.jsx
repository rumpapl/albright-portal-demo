import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


// internal imports
import {
    FormLabel,
    OutlinedInput
} from './elements';

import { PrimaryTooltipIconButton } from '../button';

const OutlinedLabelPasswordField = forwardRef((props, ref) => {
    const {
        label,
        required,
        placeholder,
        error,
        helperText,
        ...others } = props;
    const [show, setShow] = React.useState(false);


    const handleClickShowPassword = () => {
        setShow((prev) => !prev);
    };

    const handleMouseDownPassword = (event) => {
        setShow((prev) => !prev);
    };
    return (
        <Fragment>
            <FormLabel required={required}>{label}</FormLabel>
            <OutlinedInput
                inputRef={ref}
                type={show ? "text" : "password"}
                fullWidth
                error={error}
                {...others}
                placeholder={placeholder}
                endAdornment={
                    <InputAdornment position="end">
                        <PrimaryTooltipIconButton
                            title={show ? 'Hide' : 'Show'}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            placement="left"
                        >
                            {show ? <VisibilityOff /> : <Visibility />}
                        </PrimaryTooltipIconButton>
                    </InputAdornment>
                }
            />
        </Fragment>
    )
});

OutlinedLabelPasswordField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    helperText: PropTypes.any,
};

OutlinedLabelPasswordField.defaultProps = {
    required: false,
    placeholder: "Enter here",
};

export default OutlinedLabelPasswordField;
