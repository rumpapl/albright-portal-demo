import { Button } from "@material-ui/core";
import { styled, withStyles, alpha} from "@material-ui/core/styles";

const RoundButton = withStyles((theme) => ({
    root: {
        borderRadius: 30,
        textTransform: 'capitalize',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightRegular,
        padding: "10px 20px",
        minwidth: 120,
        height: 35,
    },
    startIcon: {
        "& .MuiSvgIcon-root": {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightLight,
            width: 14,
        },
    },
    endIcon: {
        "& .MuiSvgIcon-root": {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightLight,
            width: 14,
        },
    },
    containedSizeSmall: {
        padding: "10px 20px",
        height: 35,
    },
    outlinedSizeSmall: {
        padding: "10px 20px",
        height: 35,
    },
    textSizeLarge: {
        fontSize: theme.typography.pxToRem(16),
        padding: "10px 30px",
    },
    outlinedSizeLarge: {
        padding: "10px 30px",
        height: 40,
    },
    containedSizeLarge: {
        padding: "10px 30px",
        height: 40,
    },
    contained: {
        "&:hover": {
            boxShadow: theme.shadows[8],
        },
        "&:active": {
            boxShadow: theme.shadows[8],
        },
        "&:focus": {
            boxShadow: theme.shadows[8],
        },
    },
    containedPrimary: {
        boxShadow: `0px 5px 5px -3px ${alpha(
            theme.palette.primary.main,
            0.2
        )},0px 8px 10px 1px ${alpha(
            theme.palette.primary.main,
            0.14
        )},0px 3px 14px 2px ${alpha(theme.palette.primary.main, 0.12)}`,
    },
    containedSecondary: {
        boxShadow: `0px 5px 5px -3px ${alpha(
            theme.palette.secondary.main,
            0.2
        )},0px 8px 10px 1px ${alpha(
            theme.palette.secondary.main,
            0.14
        )},0px 3px 14px 2px ${alpha(theme.palette.secondary.main, 0.12)}`,
    },
    outlined: {
        border: `1px solid ${theme.palette.type === "light"
                ? "rgba(0, 0, 0, 0.23)"
                : "rgba(255, 255, 255, 0.23)"
            }`,
    },
    outlinedPrimary: {
        border: `1px solid ${alpha(theme.palette.primary.main, 0.9)}`,
        "&:hover": {
            border: `1px solid ${theme.palette.primary.main}`,
        },
    },
    outlinedSecondary: {
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.9)}`,
        "&:hover": {
            border: `1px solid ${theme.palette.secondary.main}`,
        },
    },
}))(Button);

export default RoundButton;