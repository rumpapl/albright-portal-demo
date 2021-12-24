import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiTooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/styles';

const IconButton = withStyles((theme) => ({
    root: {
        borderRadius: 10,
        padding: 5,
        "& .MuiSvgIcon-root": {
            fontSize: theme.typography.pxToRem(20),
            color: theme.palette.primary.main,
        },
    },
}))(MuiIconButton);

const Tooltip = withStyles((theme) => ({
    arrow: {
        color: theme.palette.primary.light,
    },
    tooltip: {
        backgroundColor: theme.palette.primary.light,
        fontSize: theme.typography.pxToRem(10),
        color: theme.palette.primary.main,
    },
}))(MuiTooltip);

const PrimaryTooltipIconButton = forwardRef((props, ref) => {
    const { title, placement, children, ...others } = props;
    
    return (
        <Tooltip title={title} placement={placement} ref={ref}>
            <IconButton aria-label={title}
                {...others}
            >
                {children}
            </IconButton>
        </Tooltip>
    )
});

PrimaryTooltipIconButton.propTypes = {
    label: PropTypes.string,
}

PrimaryTooltipIconButton.defaultProps = {
    placement: 'right',
}

export default PrimaryTooltipIconButton;
